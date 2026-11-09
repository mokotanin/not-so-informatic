pub mod client_base;
pub mod clients;
pub mod create_login;
pub mod data_classes;
pub mod ent;
pub mod exceptions;
pub mod pronote_api;

pub use client_base::{ClientBase, Credentials, EntFn, LoginMode};
pub use clients::{Client, ParentClient, VieScolaireClient};
pub use data_classes::*;
pub use exceptions::Error;
