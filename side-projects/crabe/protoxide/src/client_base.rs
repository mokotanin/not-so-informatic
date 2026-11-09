use crate::{
    data_classes::{self, ClientInfo, Period},
    exceptions::Error,
    pronote_api::{Communication, Encryption, prepare_onglets},
};
use chrono::{NaiveDate, Utc};
use serde::{Deserialize, Serialize};
use serde_json::{Value, json};
use sha2::{Digest, Sha256};
use std::sync::Arc;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LoginMode {
    Normal,
    QrCode,
    Token,
}
impl LoginMode {
    pub fn is_mobile(self) -> bool {
        !matches!(self, Self::Normal)
    }
}
pub type EntFn = Arc<dyn Fn(&str, &str, &str) -> Result<String, Error> + Send + Sync>;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Credentials {
    pub pronote_url: String,
    pub username: String,
    pub password: String,
    pub uuid: String,
    pub client_identifier: Option<String>,
}

pub struct ClientBase {
    pub pronote_url: String,
    pub username: String,
    pub password: String,
    pub uuid: String,
    pub login_mode: LoginMode,
    pub client_identifier: Option<String>,
    pub account_pin: Option<String>,
    pub device_name: Option<String>,
    pub attributes: Value,
    pub func_options: Value,
    pub communication: Communication,
    pub encryption: Encryption,
    pub info: Option<ClientInfo>,
    pub start_day: NaiveDate,
    pub logged_in: bool,
    pub expired: bool,
    periods_cache: Option<Vec<Period>>,
}
impl ClientBase {
    pub fn new(
        url: &str,
        username: &str,
        password: &str,
        ent: Option<EntFn>,
        mode: LoginMode,
        uuid: &str,
        account_pin: Option<String>,
        client_identifier: Option<String>,
        device_name: Option<String>,
    ) -> Result<Self, Error> {
        if username.is_empty() && password.is_empty() {
            return Err(Error::Pronote("credentials are required".into()));
        }
        let url = if let Some(auth) = ent {
            (auth)(username, password, url)?
        } else {
            url.into()
        };
        let mut communication = Communication::new(&url, mode.is_mobile())?;
        let options = communication.initialise(client_identifier.as_deref())?;
        let start_day = options["dataSec"]["data"]["General"]["PremierLundi"]["V"]
            .as_str()
            .map(data_classes::util::date_parse)
            .transpose()?
            .unwrap_or_else(|| Utc::now().date_naive());
        let mut encryption = communication.encryption.clone();
        encryption.aes_iv = communication.encryption.aes_iv;
        let mut client = Self {
            pronote_url: url,
            username: username.into(),
            password: password.into(),
            uuid: uuid.into(),
            login_mode: mode,
            client_identifier,
            account_pin,
            device_name,
            attributes: json!(communication.attributes),
            func_options: options,
            communication,
            encryption,
            info: None,
            start_day,
            logged_in: false,
            expired: false,
            periods_cache: None,
        };
        client.authenticate()?;
        Ok(client)
    }
    fn authenticate(&mut self) -> Result<(), Error> {
        let space = self.attributes["a"]
            .as_str()
            .and_then(|v| v.parse::<i64>().ok())
            .unwrap_or(0);
        let identification = self.post("Identification", None, Some(json!({
            "genreConnexion": 0, "genreEspace": space,
            "identifiant": self.username, "pourENT": false, "demandeConnexionAppliMobile": self.login_mode == LoginMode::QrCode,
            "enConnexionAppliMobile": self.login_mode == LoginMode::Token, "uuidAppliMobile": if self.login_mode.is_mobile() { &self.uuid } else { "" }
        })))?;
        let challenge = identification["dataSec"]["data"]["challenge"]
            .as_str()
            .unwrap_or_default();
        let alea = identification["dataSec"]["data"]["alea"]
            .as_str()
            .unwrap_or_default();
        let mut key_material = format!(
            "{}{}",
            self.username,
            hex::encode_upper(Sha256::digest(
                format!("{alea}{}", self.password).as_bytes()
            ))
        );
        if identification["dataSec"]["data"]["modeCompLog"]
            .as_bool()
            .unwrap_or(false)
        {
            key_material = format!(
                "{}{}",
                self.username.to_lowercase(),
                &key_material[self.username.len()..]
            );
        }
        let key = Sha256::digest(key_material.as_bytes());
        let mut auth_encryption = self.encryption.clone();
        auth_encryption.aes_set_key(&key);
        let challenge = hex::encode(auth_encryption.aes_encrypt(challenge.as_bytes())?);
        let response = self.post(
            "Authentification",
            None,
            Some(json!({"connexion": 0, "challenge": challenge, "espace": space})),
        )?;
        if response["dataSec"]["data"]["cle"].is_null() {
            return Ok(());
        }
        self.communication
            .after_auth(&response, &auth_encryption.aes_key)?;
        self.encryption = self.communication.encryption.clone();
        self.logged_in = true;
        self.info = Some(ClientInfo::new(
            &self.func_options["dataSec"]["data"]["ressource"],
        ));
        self.communication.authorized_onglets =
            prepare_onglets(&self.func_options["dataSec"]["data"]["listeOnglets"]);
        Ok(())
    }
    pub fn export_credentials(&self) -> Credentials {
        Credentials {
            pronote_url: self.pronote_url.clone(),
            username: self.username.clone(),
            password: self.password.clone(),
            uuid: self.uuid.clone(),
            client_identifier: self.client_identifier.clone(),
        }
    }
    pub fn get_week(&self, date: NaiveDate) -> i32 {
        ((date - self.start_day).num_days() / 7 + 1) as i32
    }
    pub fn periods(&mut self) -> Result<Vec<Period>, Error> {
        if let Some(v) = &self.periods_cache {
            return Ok(v.clone());
        }
        let list = self.func_options["dataSec"]["data"]["General"]["ListePeriodes"]
            .as_array()
            .cloned()
            .unwrap_or_default();
        let periods = list.iter().map(Period::new).collect::<Vec<_>>();
        self.periods_cache = Some(periods.clone());
        Ok(periods)
    }
    pub fn post(
        &mut self,
        name: &str,
        tab: Option<i64>,
        data: Option<Value>,
    ) -> Result<Value, Error> {
        let mut payload = json!({"data": data.unwrap_or_else(|| json!({}))});
        if let Some(onglet) = tab {
            payload["Signature"] = json!({"onglet": onglet});
        }
        self.communication.post(name, payload)
    }
    pub fn session_check(&mut self) -> Result<bool, Error> {
        self.post(
            "Navigation",
            Some(7),
            Some(json!({"onglet": 7, "ongletPrec": 7})),
        )?;
        Ok(std::mem::take(&mut self.expired))
    }
    pub fn refresh(&mut self) -> Result<(), Error> {
        self.communication = Communication::new(&self.pronote_url, self.login_mode.is_mobile())?;
        self.func_options = self
            .communication
            .initialise(self.client_identifier.as_deref())?;
        self.periods_cache = None;
        Ok(())
    }
    pub fn keep_alive(&mut self) -> KeepAlive<'_> {
        KeepAlive { client: self }
    }
}
pub struct KeepAlive<'a> {
    client: &'a mut ClientBase,
}
impl<'a> KeepAlive<'a> {
    pub fn alive(&mut self) -> Result<(), Error> {
        self.client
            .post(
                "Navigation",
                Some(7),
                Some(json!({"onglet": 7, "ongletPrec": 7})),
            )
            .map(|_| ())
    }
}
