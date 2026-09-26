use indicatif::{ProgressBar, ProgressStyle};
use std::time::Duration;

// 1. Mark your async function with the `async` keyword
async fn fetch_data_simulated() -> Result<String, String> {
    // tokio::time::sleep pauses this specific task without freezing the OS thread.
    // This mimics waiting for a slow API or database response.
    tokio::time::sleep(Duration::from_secs(3)).await;

    Ok("Successfully fetched 1,250 records!".to_string())
}

// 2. Use the #[tokio::main] macro to turn your main function into an async entry point
#[tokio::main]
async fn main() {
    // Create and style the spinner
    let pb = ProgressBar::new_spinner();
    pb.set_style(
        ProgressStyle::default_spinner()
            .tick_chars("⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏")
            .template("{spinner:.cyan} {msg}")
            .expect("Static template is valid"),
    );

    pb.set_message("Connecting to remote server...");

    // Start the spinner animation ticking every 100ms in the background
    pb.enable_steady_tick(Duration::from_millis(100));

    // 3. Await the async function.
    // The spinner continues to animate smoothly on screen while we wait here.
    match fetch_data_simulated().await {
        Ok(data) => {
            // Clean up the spinner and print the final success message
            pb.finish_with_message(format!("✔ {}", data));
        }
        Err(err) => {
            // Clean up the spinner and print the error message
            pb.finish_with_message(format!("✖ Error: {}", err));
        }
    }
}
