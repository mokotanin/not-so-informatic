use aes::Aes128;
use base64::{Engine, engine::general_purpose::STANDARD};
use cbc::cipher::{BlockDecryptMut, BlockEncryptMut, KeyIvInit, block_padding::Pkcs7};
use chrono::Utc;
use md5::{Digest, Md5};
use rand::RngCore;
use regex::Regex;
use reqwest::blocking::{Client as HttpClient, Response};
use serde_json::{Value, json};
use std::{collections::HashMap, io::Read};

use crate::exceptions::Error;

type AesCbcEnc = cbc::Encryptor<Aes128>;
type AesCbcDec = cbc::Decryptor<Aes128>;

pub const USER_AGENT: &str = "Mozilla/5.0 (X11; Linux x86_64; rv:73.0) Gecko/20100101 Firefox/73.0";
pub const MOBILE_USER_AGENT: &str = "iPhone";

#[derive(Clone)]
pub struct Encryption {
    pub aes_iv: [u8; 16],
    pub aes_iv_temp: [u8; 16],
    pub aes_key: [u8; 16],
}

impl Default for Encryption {
    fn default() -> Self {
        let mut temp = [0; 16];
        rand::thread_rng().fill_bytes(&mut temp);
        Self {
            aes_iv: [0; 16],
            aes_iv_temp: temp,
            aes_key: Md5::digest([]).into(),
        }
    }
}

impl Encryption {
    pub fn aes_set_iv(&mut self, value: Option<&[u8]>) {
        self.aes_iv = value.map_or_else(
            || Md5::digest(self.aes_iv_temp).into(),
            |v| v.try_into().unwrap_or([0; 16]),
        );
    }
    pub fn aes_set_key(&mut self, value: &[u8]) {
        self.aes_key = Md5::digest(value).into();
    }
    pub fn aes_encrypt(&self, data: &[u8]) -> Result<Vec<u8>, Error> {
        let mut buf = vec![0; data.len() + 16];
        buf[..data.len()].copy_from_slice(data);
        let out = AesCbcEnc::new(&self.aes_key.into(), &self.aes_iv.into())
            .encrypt_padded_mut::<Pkcs7>(&mut buf, data.len())
            .map_err(|e| Error::Crypto(e.to_string()))?;
        Ok(out.to_vec())
    }
    pub fn aes_decrypt(&self, data: &[u8]) -> Result<Vec<u8>, Error> {
        let mut buf = data.to_vec();
        AesCbcDec::new(&self.aes_key.into(), &self.aes_iv.into())
            .decrypt_padded_mut::<Pkcs7>(&mut buf)
            .map(|v| v.to_vec())
            .map_err(|e| Error::Crypto(e.to_string()))
    }
    pub fn rsa_encrypt(&self, data: &[u8]) -> Result<Vec<u8>, Error> {
        use rsa::{Pkcs1v15Encrypt, RsaPublicKey};
        let n = rsa::BigUint::parse_bytes(b"130337874517286041778445012253514395801341480334668979416920989365464528904618150245388048105865059387076357492684573172203245221386860699130638566643129067735803043895605014125081521285387341454154194253026277", 10)
            .ok_or_else(|| Error::Crypto("invalid Pronote RSA modulus".into()))?;
        let key = RsaPublicKey::new(n, rsa::BigUint::from(65537u32))
            .map_err(|e| Error::Crypto(e.to_string()))?;
        let mut rng = rand::thread_rng();
        key.encrypt(&mut rng, Pkcs1v15Encrypt, data)
            .map_err(|e| Error::Crypto(e.to_string()))
    }
}

pub fn enlever_alea(value: &str) -> String {
    value.chars().step_by(2).collect()
}
pub fn en_bytes(value: &str) -> Result<Vec<u8>, Error> {
    value
        .split(',')
        .map(|x| {
            x.trim().parse::<u8>().map_err(|e| Error::Data {
                message: e.to_string(),
                path: "bytes".into(),
            })
        })
        .collect()
}
pub fn prepare_onglets(value: &Value) -> Vec<i64> {
    fn walk(v: &Value, out: &mut Vec<i64>) {
        match v {
            Value::Array(a) => a.iter().for_each(|x| walk(x, out)),
            Value::Object(o) => o.values().for_each(|x| walk(x, out)),
            Value::Number(n) => {
                if let Some(i) = n.as_i64() {
                    out.push(i)
                }
            }
            _ => {}
        }
    }
    let mut out = Vec::new();
    walk(value, &mut out);
    out
}

pub struct Communication {
    pub root_site: String,
    pub html_page: String,
    pub session: HttpClient,
    pub encryption: Encryption,
    pub attributes: HashMap<String, String>,
    pub request_number: u64,
    pub authorized_onglets: Vec<i64>,
    pub compress_requests: bool,
    pub encrypt_requests: bool,
    pub last_ping: i64,
    pub last_response: Option<Response>,
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn aes_round_trip() {
        let mut encryption = Encryption::default();
        encryption.aes_set_key(b"test-key");
        encryption.aes_set_iv(Some(&[7; 16]));
        let encrypted = encryption.aes_encrypt(b"pronote").unwrap();
        assert_eq!(encryption.aes_decrypt(&encrypted).unwrap(), b"pronote");
    }
    #[test]
    fn helpers_match_protocol() {
        assert_eq!(enlever_alea("aXbYcZ"), "abc");
        assert_eq!(en_bytes("1, 2, 255").unwrap(), vec![1, 2, 255]);
        assert_eq!(prepare_onglets(&json!([1, {"a": [2, 3]}])), vec![1, 2, 3]);
    }
}

impl Communication {
    pub fn new(site: &str, mobile: bool) -> Result<Self, Error> {
        let (root_site, html_page) = Self::get_root_address(site);
        let session = HttpClient::builder()
            .cookie_store(true)
            .user_agent(if mobile {
                MOBILE_USER_AGENT
            } else {
                USER_AGENT
            })
            .build()?;
        Ok(Self {
            root_site,
            html_page,
            session,
            encryption: Encryption::default(),
            attributes: HashMap::new(),
            request_number: 1,
            authorized_onglets: Vec::new(),
            compress_requests: false,
            encrypt_requests: false,
            last_ping: Utc::now().timestamp(),
            last_response: None,
        })
    }
    pub fn get_root_address(addr: &str) -> (String, String) {
        addr.rsplit_once('/')
            .map_or((addr.into(), String::new()), |(root, page)| {
                (root.into(), page.into())
            })
    }
    pub fn initialise(&mut self, client_identifier: Option<&str>) -> Result<Value, Error> {
        let html = self
            .session
            .get(format!("{}/{}", self.root_site, self.html_page))
            .send()?
            .text()?;
        if html.contains("IP") && html.contains("suspend") {
            return Err(Error::Pronote("Your IP address is suspended.".into()));
        }
        let re = Regex::new(r"Start ?\(\{(?P<params>[^}]*)\}\)").unwrap();
        let caps = re
            .captures(&html)
            .ok_or_else(|| Error::Pronote("Pronote page format not recognized".into()))?;
        for item in caps["params"].split(',') {
            let (key, value) = item
                .split_once(':')
                .ok_or_else(|| Error::Pronote("Invalid Pronote bootstrap attributes".into()))?;
            self.attributes.insert(
                key.trim_matches([' ', '\'', '"']).into(),
                value.trim_matches([' ', '\'', '"']).into(),
            );
        }
        let uuid = if self.attributes.get("http").is_some() {
            STANDARD.encode(self.encryption.rsa_encrypt(&self.encryption.aes_iv_temp)?)
        } else {
            STANDARD.encode(self.encryption.aes_iv_temp)
        };
        self.compress_requests = self.attributes.get("CoA").is_some_and(|x| x == "true");
        self.encrypt_requests = self.attributes.get("CrA").is_some_and(|x| x == "true");
        self.post(
            "FonctionParametres",
            json!({"dataSec": {"data": {"Uuid": uuid, "identifiantNav": client_identifier}}}),
        )
    }
    pub fn post(&mut self, function_name: &str, mut payload: Value) -> Result<Value, Error> {
        if self.compress_requests || self.encrypt_requests {
            // Pronote applies these transformations to dataSec only.
            let raw = serde_json::to_vec(&payload)?;
            let transformed = if self.compress_requests {
                let mut encoder =
                    flate2::write::DeflateEncoder::new(Vec::new(), flate2::Compression::new(6));
                std::io::Write::write_all(&mut encoder, &raw)?;
                hex::encode(encoder.finish()?)
            } else {
                String::from_utf8_lossy(&raw).into_owned()
            };
            payload = json!({"dataSec": transformed});
        }
        let number = hex::encode(
            self.encryption
                .aes_encrypt(self.request_number.to_string().as_bytes())?,
        );
        let session = self
            .attributes
            .get("h")
            .and_then(|v| v.parse::<u64>().ok())
            .unwrap_or_default();
        let body =
            json!({"session": session, "no": number, "id": function_name, "dataSec": payload});
        let url = format!(
            "{}/appelfonction/{}/{}/{}",
            self.root_site,
            self.attributes.get("a").cloned().unwrap_or_default(),
            self.attributes.get("h").cloned().unwrap_or_default(),
            number
        );
        let response = self.session.post(url).json(&body).send()?;
        self.request_number += 2;
        self.last_ping = Utc::now().timestamp();
        if !response.status().is_success() {
            return Err(Error::Pronote(format!(
                "Bad request (HTTP {})",
                response.status()
            )));
        }
        let mut value: Value = response.json()?;
        if let Some(error) = value.get("Erreur") {
            return Err(Error::Pronote(format!(
                "[ERROR {}] {}",
                error["G"], error["Titre"]
            )));
        }
        if self.compress_requests {
            if let Some(text) = value["dataSec"].as_str() {
                let bytes = hex::decode(text)?;
                let mut decoder = flate2::read::DeflateDecoder::new(bytes.as_slice());
                let mut out = String::new();
                decoder.read_to_string(&mut out)?;
                value["dataSec"] = serde_json::from_str(&out)?;
            }
        }
        Ok(value)
    }
    pub fn after_auth(&mut self, data: &Value, auth_key: &[u8]) -> Result<(), Error> {
        self.encryption.aes_key = auth_key.try_into().unwrap_or([0; 16]);
        let encrypted = hex::decode(data["dataSec"]["data"]["cle"].as_str().unwrap_or_default())?;
        let work = self.encryption.aes_decrypt(&encrypted)?;
        self.encryption.aes_key = Md5::digest(en_bytes(&String::from_utf8_lossy(&work))?).into();
        Ok(())
    }
}
