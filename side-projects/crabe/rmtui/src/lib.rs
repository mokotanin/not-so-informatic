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
    cmd.args(["-t", "-f", "NAME", "connection", "show"]);
    if active_only {
        cmd.arg("--active");
    }

    let output = cmd.output()?;

    let names: Vec<String> = String::from_utf8(output.stdout)
        .map_err(std::io::Error::other)?
        .lines()
        .map(str::to_string)
        .filter(|name| !name.is_empty())
        .collect();

    if names.is_empty() {
        return Err(std::io::Error::other("no network connections found"));
    }

    println!(
        "{}",
        style("select a network (up/down to select and enter to confirm):").bold()
    );

    let selection = Select::with_theme(&ColorfulTheme::default())
        .items(&names)
        .default(0)
        .interact_on(&Term::stderr())?;

    println!(
        "\nyou selected: {}",
        style(&names[selection]).green().bold()
    );

    Ok(names[selection].clone())
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
            .args(["connection", "up", &command_name])
            .output()
    });

    let output_result = handle.join().expect("the background thread panicked");

    pb.finish_and_clear();

    match output_result {
        Ok(output) if output.status.success() => {
            println!("{name} activated");
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
            println!("{name} deactivated");
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
