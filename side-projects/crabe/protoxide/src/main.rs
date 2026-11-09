use protoxide::{Client, Credentials};
use std::io::{self, Write};

fn prompt(label: &str) -> String {
    print!("{label}");
    io::stdout().flush().expect("unable to flush stdout");
    let mut value = String::new();
    io::stdin()
        .read_line(&mut value)
        .expect("unable to read input");
    value.trim().to_owned()
}

fn display_client(client: &mut Client) {
    if !client.base.logged_in {
        eprintln!("\nLe fichier a bien été lu, mais Pronote a refusé la session.");
        eprintln!("Le token est probablement expiré : régénère credentials.json avec Pronotepy.");
        return;
    }

    println!("\nConnexion réussie : true");
    if let Some(info) = &client.base.info {
        println!("Utilisateur : {}", info.name);
    }

    match client.periods() {
        Ok(periods) => {
            println!("Périodes : {}", periods.len());
            for period in periods {
                println!(
                    "- {} : {} note(s)",
                    period.name.as_deref().unwrap_or("(sans nom)"),
                    period.grades.len()
                );
                for grade in period.grades {
                    println!(
                        "  {} / {}",
                        grade.grade.as_deref().unwrap_or("?"),
                        grade.out_of.as_deref().unwrap_or("?")
                    );
                }
            }
        }
        Err(error) => eprintln!("Impossible de lire les périodes : {error}"),
    }
}

fn main() {
    let arguments: Vec<String> = std::env::args().collect();
    if let Some(path) = arguments.get(1) {
        if path == "--help" || path == "-h" {
            println!("Usage:\n  cargo run\n  cargo run -- credentials.json");
            return;
        }
        let contents = match std::fs::read_to_string(path) {
            Ok(contents) => contents,
            Err(error) => {
                eprintln!("Impossible de lire {path}: {error}");
                std::process::exit(1);
            }
        };
        let credentials: Credentials = match serde_json::from_str(&contents) {
            Ok(credentials) => credentials,
            Err(error) => {
                eprintln!("credentials.json invalide : {error}");
                std::process::exit(1);
            }
        };
        let mut client = match Client::token_login(
            &credentials.pronote_url,
            &credentials.username,
            &credentials.password,
            &credentials.uuid,
            credentials.client_identifier,
        ) {
            Ok(client) => client,
            Err(error) => {
                eprintln!("Échec de connexion avec les credentials : {error}");
                std::process::exit(1);
            }
        };
        display_client(&mut client);
        return;
    }

    println!("Protoxide - test Pronote\n");
    let url = {
        let value = prompt("URL Pronote [https://demo.index-education.net/pronote/eleve.html]: ");
        if value.is_empty() {
            "https://demo.index-education.net/pronote/eleve.html".to_owned()
        } else {
            value
        }
    };
    let username = prompt("Identifiant [demonstration]: ");
    let username = if username.is_empty() {
        "demonstration".to_owned()
    } else {
        username
    };
    let password =
        rpassword::prompt_password("Mot de passe [pronotevs]: ").expect("unable to read password");
    let password = if password.is_empty() {
        "pronotevs".to_owned()
    } else {
        password
    };

    match Client::new(&url, &username, &password, None, None) {
        Ok(mut client) => {
            display_client(&mut client);
        }
        Err(error) => {
            eprintln!("\nÉchec de connexion : {error}");
            std::process::exit(1);
        }
    }
}
