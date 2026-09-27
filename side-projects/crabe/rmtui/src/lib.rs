// use clap::builder::Str;
use console::{Term, style};
use dialoguer::{Select, theme::ColorfulTheme};
use indicatif::{ProgressBar, ProgressStyle};
use std::process::{Command, Stdio};
use std::thread;
use std::time::Duration;

pub fn scan_ntwks() {
    let pb = ProgressBar::new_spinner();
    pb.set_style(
        ProgressStyle::default_spinner()
            .template("{spinner:.cyan} {msg}")
            .expect("Valid template"),
    );
    pb.set_message("scanning for networks...");
    pb.enable_steady_tick(Duration::from_millis(100));

    let handle = thread::spawn(|| {
        Command::new("nmcli")
            .args(["device", "wifi", "list", "--rescan", "yes"])
            // .args(["-t", "-f", "NAME", "connection", "show"])
            .output()
    });

    let output_result = handle.join().expect("the background thread panicked");

    pb.finish_and_clear();

    match output_result {
        Ok(output) if output.status.success() => {
            let stdout = String::from_utf8_lossy(&output.stdout);
            println!("{}", stdout);
        }
        Ok(output) => {
            let stderr = String::from_utf8_lossy(&output.stderr);
            eprintln!("nmcli failed: {}", stderr);
        }
        Err(err) => {
            eprintln!("failed to execute nmcli: {}", err);
        }
    }
}

pub fn get_ntwk_names() -> std::io::Result<String> {
    get_ntwk_names_filtered(false)
}

pub fn get_ntwk_names_active() -> std::io::Result<String> {
    get_ntwk_names_filtered(true)
}

pub fn get_ntwk_names_filtered(active_only: bool) -> std::io::Result<String> {
    //intended only in commands (not replacing scan_ntwks fn)

    let mut cmd = Command::new("nmcli");
    cmd.args([
        "-t",
        "-f",
        "IN-USE,SSID,BAND,BARS",
        "device",
        "wifi",
        "list",
    ]);

    let output = cmd.output()?;

    let networks: Vec<(String, String)> = String::from_utf8(output.stdout)
        .map_err(std::io::Error::other)?
        .lines()
        .filter_map(|line| {
            let fields = parse_nmcli_fields(line);
            let in_use = fields.first()?;
            if active_only && in_use != "*" {
                return None;
            }
            let ssid = fields.get(1)?.clone();
            if ssid.is_empty() {
                return None;
            }
            let band = fields.get(2)?;
            let bars = fields.get(3)?;

            let marker = if in_use == "*" {
                if active_only {
                    style("*").red().to_string()
                } else {
                    style("*").blue().to_string()
                }
            } else {
                " ".to_string()
            };

            let bandcolored = style(band).yellow().to_string();

            let bars_color = if bars == "____" {
                style(bars).red().to_string()
            } else if bars == "▂___" {
                style(bars).red().to_string()
            } else if bars == "▂▄__" {
                style(bars).true_color(215, 106, 47).to_string()
            } else {
                style(bars).green().to_string()
            };

            let row = format!("{marker} {ssid} [{bandcolored}] {bars_color}");
            Some((row, ssid))
        })
        .collect();

    if networks.is_empty() {
        return Err(std::io::Error::other("no network connections found"));
    }

    println!(
        "{}",
        style("select a network (up/down to select and enter to confirm):").bold()
    );

    let rows: Vec<String> = networks.iter().map(|(row, _)| row.clone()).collect();
    let selection = Select::with_theme(&ColorfulTheme::default())
        .items(&rows)
        .default(0)
        .interact_on(&Term::stderr())?;

    Ok(networks[selection].1.clone())
}

fn parse_nmcli_fields(line: &str) -> Vec<String> {
    let mut fields = vec![String::new()];
    let mut escaped = false;

    for character in line.chars() {
        if escaped {
            fields.last_mut().unwrap().push(character);
            escaped = false;
        } else {
            match character {
                '\\' => escaped = true,
                ':' => fields.push(String::new()),
                _ => fields.last_mut().unwrap().push(character),
            }
        }
    }

    if escaped {
        fields.last_mut().unwrap().push('\\');
    }

    fields
}

pub fn crnt_hn() {
    let output = Command::new("nmcli")
        .args(["general", "hostname"])
        .stdout(Stdio::piped())
        .output()
        .unwrap();

    let hostname = String::from_utf8(output.stdout).unwrap();
    println!("your current hostname is {}", hostname)
}

pub fn r_hn(name: &str) {
    Command::new("sudo")
        .args(["nmcli", "general", "hostname", name])
        .stdout(Stdio::piped())
        .output()
        .unwrap();

    println!("your hostname is now {}", name)
}

pub fn actv_ntwk(name: String) {
    let pb = ProgressBar::new_spinner();

    pb.set_style(
        ProgressStyle::default_spinner()
            .template("{spinner:.cyan} {msg}")
            .expect("valid template"),
    );

    pb.set_message(format!("activating {name}"));
    pb.enable_steady_tick(Duration::from_millis(100));

    let command_name = name.clone();

    let handle = thread::spawn(move || {
        Command::new("nmcli")
            .args(["--ask","connection", "up", &command_name])
            .output()
    });

    let output_result = handle.join().expect("the background thread panicked");

    pb.finish_and_clear();

    match output_result {
        Ok(output) if output.status.success() => {
            println!("{name} {}", style("activated").green().bold())
        }

        Ok(output) => {
            let stderr = String::from_utf8_lossy(&output.stderr);
            eprintln!("nmcli failed: {stderr}");
        }

        Err(err) => {
            eprintln!("failed to execute nmcli: {err}");
        }
    }
}

pub fn de_ntwk(name: String) {
    let pb = ProgressBar::new_spinner();

    pb.set_style(
        ProgressStyle::default_spinner()
            .template("{spinner:.red} {msg}")
            .expect("valid template"),
    );

    pb.set_message(format!("deactivating {name}"));
    pb.enable_steady_tick(Duration::from_millis(100));

    let command_name = name.clone();

    let handle = thread::spawn(move || {
        Command::new("nmcli")
            .args(["connection", "down", &command_name])
            .output()
    });

    let output_result = handle.join().expect("the background thread panicked");

    pb.finish_and_clear();

    match output_result {
        Ok(output) if output.status.success() => {
            println!("{name} {}", style("deactivated").red().bold());
        }

        Ok(output) => {
            let stderr = String::from_utf8_lossy(&output.stderr);
            eprintln!("nmcli failed: {stderr}");
        }

        Err(err) => {
            eprintln!("failed to execute nmcli: {err}");
        }
    }
}
