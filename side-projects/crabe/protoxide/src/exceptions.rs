use thiserror::Error as ThisError;

#[derive(Debug, ThisError)]
pub enum Error {
    #[error("{0}")]
    Pronote(String),
    #[error("crypto error: {0}")]
    Crypto(String),
    #[error("date parsing error: {0}")]
    Date(String),
    #[error("invalid data at {path}: {message}")]
    Data { message: String, path: String },
    #[error("HTTP error: {0}")]
    Http(#[from] reqwest::Error),
    #[error("JSON error: {0}")]
    Json(#[from] serde_json::Error),
    #[error("URL error: {0}")]
    Url(#[from] url::ParseError),
    #[error("I/O error: {0}")]
    Io(#[from] std::io::Error),
    #[error("invalid hexadecimal data: {0}")]
    Hex(#[from] hex::FromHexError),
    #[error("MFA error: {0}")]
    Mfa(String),
    #[error("child not found: {0}")]
    ChildNotFound(String),
    #[error("discussion is closed")]
    DiscussionClosed,
    #[error("unsupported operation: {0}")]
    Unsupported(String),
}

impl Error {
    pub fn is_expired_object(&self) -> bool {
        matches!(self, Self::Pronote(message) if message.contains("[ERROR 22]"))
    }
    pub fn is_mfa(&self) -> bool {
        matches!(self, Self::Mfa(_))
    }
}
