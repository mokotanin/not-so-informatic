import psutil
import subprocess
import time
import pathlib

script_dir = pathlib.Path(__file__).parent
config_path = script_dir / "config.txt"
with open(config_path / "config.txt", "r") as f:
    config = f.read().strip()
    if config.startswith("AMP_PATH="):
        app_to_control_path = config.split("=", 1)[1]
    else:
        print("Invalid config format. Expected 'AMP_PATH=path_to_amp'.")
        exit(1)

app_to_watch = "AppleMusic.exe"
app_to_control_name = "AMWin-RichPresence.exe"


def is_running(process_name):
    for proc in psutil.process_iter(["name"]):
        if proc.info["name"] == process_name:
            return True
    return False


while True:
    watch_running = is_running(app_to_watch)
    control_running = is_running(app_to_control_name)

    if watch_running and not control_running:
        subprocess.Popen(app_to_control_path)

    if not watch_running and control_running:
        for proc in psutil.process_iter(["name"]):
            if proc.info["name"] == app_to_control_name:
                proc.kill()

    time.sleep(2)
