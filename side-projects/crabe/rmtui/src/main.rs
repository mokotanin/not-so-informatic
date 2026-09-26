use std::str;

use anyhow::Result;
use clap::{Parser, Subcommand};

// redirection temporaire : pour l'instant cli ensuite on part sur un tui.

#[derive(Parser)]
#[command(
    name = "rmTUI",
    version = "alpha",
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
        nkws_name: Option<String>,
    },
    Edit {
        #[arg(short, long)]
        nkws_name: Option<String>,
    },
    Hostname {
        #[arg(short, long)]
        rename: Option<String>,
    }, // !TODO Set the radio switches status
}

fn main() -> Result<()> {
    let args = Cli::parse();

    match args.command {
        Commands::Scan {} => {
            rmtui::scan_nwks();
        }
        Commands::Activate { nkws_name } => {
            if let Some(nkws_name) = nkws_name {
                println!("activating {nkws_name}")
            } else {
                println!("what network do you want to activate?")
            }
        }
        Commands::Edit { nkws_name } => {
            if let Some(nkws_name) = nkws_name {
                println!("editing {nkws_name}")
            } else {
                println!("what network do you want to edit?")
            }
        }
        Commands::Hostname { rename } => {
            if let Some(rename) = rename {
                rmtui::r_hn(&rename); //require sudo
            } else {
                rmtui::crnt_hn();
            }
        }
    }

    Ok(())
}
