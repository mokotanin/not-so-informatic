use crate::exceptions::Error;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct QrCode {
    pub url: String,
    pub login: String,
    pub jeton: String,
}

pub fn decode_qr_code(_qr: &QrCode, _pin: &str) -> Result<(String, String), Error> {
    Err(Error::Unsupported(
        "QR-code login is not yet available in the non-browser Rust adapter".into(),
    ))
}
