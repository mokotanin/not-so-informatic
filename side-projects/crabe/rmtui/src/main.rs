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
    }, // !TODO Set the radio switches status
       // !TODO deactivate
}

fn main() -> Result<()> {
    let args = Cli::parse();

    match args.command {
        Commands::Scan {} => {
            if let Err(e) = rmtui::get_ntwk_names() {
                println!("error fetching network names: {e}");
            }
        }
        Commands::Activate { name } => {
            if let Some(name) = name {
                rmtui::actv_ntwk(&name)?;
            } else {
                let name = rmtui::get_ntwk_names()?;
                rmtui::actv_ntwk(&name)?;
            }
        }
        Commands::Edit { name } => {
            if let Some(name) = name {
                println!("editing {name}")
            } else {
                println!("what network do you want to edit?")
                // TODO! list all networks from cache (selectable)
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
    }

    Ok(())
}
