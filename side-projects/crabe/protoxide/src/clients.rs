use crate::{
    client_base::{ClientBase, EntFn, LoginMode},
    data_classes::*,
    exceptions::Error,
};
use chrono::NaiveDate;
use serde_json::json;

pub struct Client {
    pub base: ClientBase,
    pub children: Vec<ClientInfo>,
}
pub struct ParentClient {
    pub base: ClientBase,
    pub children: Vec<ClientInfo>,
}
pub struct VieScolaireClient {
    pub base: ClientBase,
    pub children: Vec<ClientInfo>,
}

macro_rules! constructors {
    ($name:ident) => {
        impl $name {
            pub fn new(
                url: &str,
                username: &str,
                password: &str,
                ent: Option<EntFn>,
                mfa: Option<(&str, &str)>,
            ) -> Result<Self, Error> {
                let (pin, device) = mfa
                    .map(|x| (Some(x.0.to_owned()), Some(x.1.to_owned())))
                    .unwrap_or((None, None));
                Ok(Self {
                    base: ClientBase::new(
                        url,
                        username,
                        password,
                        ent,
                        LoginMode::Normal,
                        "",
                        pin,
                        None,
                        device,
                    )?,
                    children: Vec::new(),
                })
            }
            pub fn token_login(
                url: &str,
                username: &str,
                password: &str,
                uuid: &str,
                client_identifier: Option<String>,
            ) -> Result<Self, Error> {
                Ok(Self {
                    base: ClientBase::new(
                        url,
                        username,
                        password,
                        None,
                        LoginMode::Token,
                        uuid,
                        None,
                        client_identifier,
                        None,
                    )?,
                    children: Vec::new(),
                })
            }
            pub fn export_credentials(&self) -> crate::Credentials {
                self.base.export_credentials()
            }
            pub fn session_check(&mut self) -> Result<bool, Error> {
                self.base.session_check()
            }
            pub fn refresh(&mut self) -> Result<(), Error> {
                self.base.refresh()
            }
        }
    };
}
constructors!(Client);
constructors!(ParentClient);
constructors!(VieScolaireClient);

impl Client {
    pub fn periods(&mut self) -> Result<Vec<Period>, Error> {
        self.base.periods()
    }
    pub fn lessons(
        &mut self,
        from: NaiveDate,
        to: Option<NaiveDate>,
    ) -> Result<Vec<Lesson>, Error> {
        let data = self.base.post("PageEmploiDuTemps", Some(16), Some(json!({"dateDebut": from.format("%d/%m/%Y").to_string(), "dateFin": to.unwrap_or(from).format("%d/%m/%Y").to_string()})))?;
        Ok(data["dataSec"]["data"]["listeCours"]
            .as_array()
            .cloned()
            .unwrap_or_default()
            .iter()
            .map(Lesson::new)
            .collect())
    }
    pub fn homework(&mut self, from: NaiveDate, to: NaiveDate) -> Result<Vec<Homework>, Error> {
        let data = self.base.post("PageCahierDeTextes", Some(14), Some(json!({"dateDebut": from.format("%d/%m/%Y").to_string(), "dateFin": to.format("%d/%m/%Y").to_string()})))?;
        Ok(data["dataSec"]["data"]["listeTravail"]
            .as_array()
            .cloned()
            .unwrap_or_default()
            .iter()
            .map(Homework::new)
            .collect())
    }
    pub fn menus(&mut self, date: NaiveDate) -> Result<Vec<Menu>, Error> {
        let data = self.base.post(
            "PageMenus",
            Some(22),
            Some(json!({"date": date.format("%d/%m/%Y").to_string()})),
        )?;
        Ok(data["dataSec"]["data"]["listeMenus"]
            .as_array()
            .cloned()
            .unwrap_or_default()
            .iter()
            .map(Menu::new)
            .collect())
    }
    pub fn information_and_surveys(&mut self, unread: bool) -> Result<Vec<Object>, Error> {
        let data = self.base.post(
            "PageInformations",
            Some(8),
            Some(json!({"uniquementNonLues": unread})),
        )?;
        Ok(data["dataSec"]["data"]["listeInformations"]
            .as_array()
            .cloned()
            .unwrap_or_default()
            .iter()
            .map(Object::new)
            .collect())
    }
    pub fn get_teaching_staff(&mut self) -> Result<Vec<TeachingStaff>, Error> {
        let data = self.base.post("PageAnnuaire", Some(9), None)?;
        Ok(data["dataSec"]["data"]["listeEnseignants"]
            .as_array()
            .cloned()
            .unwrap_or_default()
            .iter()
            .map(TeachingStaff::new)
            .collect())
    }
}
