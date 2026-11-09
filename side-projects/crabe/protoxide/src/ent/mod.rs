use crate::{client_base::EntFn, exceptions::Error};
use std::sync::Arc;

/// ENT adapters are intentionally injectable: each deployment can provide its
/// SSO flow without coupling the Pronote protocol to a browser automation stack.
pub fn custom<F>(handler: F) -> EntFn
where
    F: Fn(&str, &str, &str) -> Result<String, Error> + Send + Sync + 'static,
{
    Arc::new(handler)
}

pub fn lookup(_name: &str) -> Option<EntFn> {
    None
}
