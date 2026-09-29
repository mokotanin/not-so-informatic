// spinner loading example
use indicatif::{ProgressBar, ProgressStyle};
use std::{thread, time::Duration};

fn main() {
    // 1. Create a new spinner instance
    let pb = ProgressBar::new_spinner();

    // 2. Configure the look and feel (style) of the loading icon
    pb.set_style(
        ProgressStyle::default_spinner()
            // The characters to cycle through during the animation
            .tick_chars("⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏")
            // "{spinner:.green}" styles the icon, "{msg}" displays your custom text
            .template("{spinner:.green} {msg}")
            .expect("Valid template structure"),
    );

    // 3. Set the initial loading message
    pb.set_message("Fetching data from API...");

    // 4. Start a steady automatic background animation tick (e.g., every 100ms)
    pb.enable_steady_tick(Duration::from_millis(100));

    // Simulate some background work
    thread::sleep(Duration::from_secs(3));

    // 5. Clean up when finished (can use finish_with_message or finish_and_clear)
    pb.finish_with_message("Done!");
}
