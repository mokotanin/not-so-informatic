use anyhow::{Context, Result};
use clap::Parser;

/// Search for a pattern in a file and display the lines that contain
#[derive(Parser)]
struct Cli {
    /// The pattern to look for
    pattern: String,
    /// The path to the file to read
    path: std::path::PathBuf,
}

/// Clap knows which fields to expect and their expected format.
/// It can automatically generate a nice --help message
/// as well as give some great errors to suggest you pass --output when you wrote --putput.

fn main() -> Result<()> {
    let args = Cli::parse();

    let content = std::fs::read_to_string(&args.path)
        .with_context(|| format!("could not read file `{}`", args.path.display()))?;

    grrs::find_matches(&content, &args.pattern, &mut std::io::stdout());

    Ok(())
}
