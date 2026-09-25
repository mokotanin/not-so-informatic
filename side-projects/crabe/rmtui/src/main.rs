use anyhow::Result;
use clap::{Parser, Subcommand};
use std::process::{Command, Stdio};

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
}

fn main() -> Result<()> {
    let args = Cli::parse();

    match args.command {
        Commands::Scan {} => {
            println!("scanning for networks...")
            // add loading icon
            // add cache the list (needed, cuz for the after)
            // in the end :
            // rmcli scan
            // > [liste...]
            // >
            // > séléctionne
            // > entrée (se connecter)
        }
        Commands::Activate { name } => {
            if let Some(name) = name {
                println!("activating {name}")
            } else {
                println!("what network do you want to activate?")
            }
        }
        Commands::Edit { name } => {
            if let Some(name) = name {
                println!("editing {name}")
            } else {
                println!("what network do you want to edit?")
            }
        }
        Commands::Hostname { rename } => {
            if let Some(rename) = rename {
                println!("hostname renamed to {rename}")
            } else {
                let output = Command::new("nmcli")
                    .args(["general", "hostname"])
                    .stdout(Stdio::piped())
                    .output()
                    .unwrap();

                let hostname = String::from_utf8(output.stdout).unwrap();
                println!("your current hostname is {}", hostname)
            }
        }
    }

    Ok(())
}
