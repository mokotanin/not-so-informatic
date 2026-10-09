extern crate rustc_version;
use rustc_version::Channel;

fn main() {
    // Assert we haven't travelled back in time
    assert!(rustc_version::version().unwrap().major >= 1);

    // PATCHED: ne jamais définir `pf_rustc_nightly`.
    // Cela force l'utilisation du fallback scalaire au lieu du module `arm`
    // qui utilise des intrinsèques SIMD instables supprimées dans les
    // toolchains nightly récentes.
    // Le résultat reste correct, seule la performance change (négligeable ici).
    let _ = Channel::Nightly;
}
