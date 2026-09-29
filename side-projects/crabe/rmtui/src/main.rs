use std::str;

use anyhow::Result;
use clap::{Parser, Subcommand};

// redirection temporaire : pour l'instant cli ensuite on part sur un tui.

#[derive(Parser)]
#[command(
    name = "rmTUI",
    version = "0.0.2-alpha",
    about = "nmtui bootleg😤",
    long_about = "Réseau Manager TUI (french literal of NMTUI)"
)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    Scan,
    Activate {
        #[arg(short, long)]
        name: Option<String>,
    },
    Edit {
        #[arg(short, long)]
        name: Option<String>,
    },
    Hostname {
        #[arg(short, long)]
        rename: Option<String>,
    }, // TODO Set the radio switches status
    Deactivate {
        #[arg(short, long)]
        name: Option<String>,
    },
    Status {},
}

fn main() -> Result<()> {
    let args = Cli::parse();

    match args.command {
        Commands::Scan {} => {
            rmtui::scan_ntwks();
        }
        Commands::Activate { name } => {
            if let Some(name) = name {
                rmtui::actv_ntwk(name);
            } else {
                let name = rmtui::get_ntwk_names()?;
                rmtui::actv_ntwk(name);
            }
        }
        Commands::Deactivate { name } => {
            if let Some(name) = name {
                rmtui::de_ntwk(name);
            } else {
                let name = rmtui::get_ntwk_names_active()?;
                rmtui::de_ntwk(name);
            }
        }
        Commands::Edit { name } => {
            if let Some(name) = name {
                rmtui::edit(name)?;
            } else {
                let name = rmtui::get_ntwk_names()?;
                rmtui::edit(name)?;
            }
        }
        Commands::Hostname { rename } => {
            if let Some(rename) = rename {
                // & converts String to &str
                rmtui::r_hn(&rename); //require sudo
            } else {
                rmtui::crnt_hn();
            }
        }
        Commands::Status {} => {
            rmtui::status()?;
            }
    }

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::{Cli, Commands};
    use clap::Parser;

    #[test]
    fn parses_scan_command() {
        let cli = Cli::try_parse_from(["rmtui", "scan"]).unwrap();
        assert!(matches!(cli.command, Commands::Scan));
    }

    #[test]
    fn parses_activate_name_with_spaces() {
        let cli = Cli::try_parse_from(["rmtui", "activate", "--name", "Home Wi-Fi"]).unwrap();

        match cli.command {
            Commands::Activate { name } => assert_eq!(name.as_deref(), Some("Home Wi-Fi")),
            _ => panic!("expected activate command"),
        }
    }

    #[test]
    fn requires_a_subcommand() {
        assert!(Cli::try_parse_from(["rmtui"]).is_err());
    }
}
