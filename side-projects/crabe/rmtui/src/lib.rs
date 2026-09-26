use indicatif::{ProgressBar, ProgressStyle};
use std::process::{Command, Stdio};
use std::thread;
use std::time::Duration;

pub fn scan_nwks() {
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
            eprintln!("mcli failed: {}", stderr);
        }
        Err(err) => {
            eprintln!("failed to execute nmcli: {}", err);
        }
    }
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
        .args(["nmcli","general","hostname", name])
        .stdout(Stdio::piped())
        .output()
        .unwrap();

    println!("your hostname is now {}", name)
}
