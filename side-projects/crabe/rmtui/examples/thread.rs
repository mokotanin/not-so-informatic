use indicatif::{ProgressBar, ProgressStyle};
use std::process::Command;
use std::thread;
use std::time::Duration;

fn main() {
    // 1. Create and style your spinner
    let pb = ProgressBar::new_spinner();
    pb.set_style(
        ProgressStyle::default_spinner()
            .tick_chars("⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏")
            .template("{spinner:.cyan} {msg}")
            .expect("Valid template"),
    );
    pb.set_message("Scanning for Wi-Fi networks (using threads)...");
    pb.enable_steady_tick(Duration::from_millis(100));

    // 2. Spawn a separate OS thread to handle the heavy blocking nmcli work
    let handle = thread::spawn(|| {
        Command::new("nmcli")
            .args(["device", "wifi", "list", "--rescan", "yes"])
            .output() // This blocks this background thread completely
    });

    // 3. While the background thread is blocked, our main thread is completely free.
    // indicatif's steady_tick keeps animating the spinner automatically.

    // 4. Join the thread (wait for it to finish and get the result)
    let output_result = handle.join().expect("The background thread panicked");

    // 5. Clean up the spinner and print output
    pb.finish_and_clear();

    match output_result {
        Ok(output) if output.status.success() => {
            let stdout = String::from_utf8_lossy(&output.stdout);
            println!("{}", stdout);
        }
        Ok(output) => {
            let stderr = String::from_utf8_lossy(&output.stderr);
            eprintln!("✖ nmcli failed: {}", stderr);
        }
        Err(err) => {
            eprintln!("✖ Failed to execute nmcli: {}", err);
        }
    }
}
