import pywinstyles, sys, sv_ttk, pathlib, subprocess, os

# from PIL import Image, ImageTk
from tkinter import ttk
from tkinter import Tk, filedialog, BooleanVar

root = Tk()
style = ttk.Style()
root.title("AMP AutoStart")
root.geometry("500x400")
root.resizable(False, False)

# icon_path = pathlib.Path(__file__).with_name("icon.jpg")
# if icon_path.exists():
#    app_icon = ImageTk.PhotoImage(Image.open(icon_path))
#    root.iconphoto(False, cast(tkinter.PhotoImage, app_icon))

sv_ttk.set_theme("dark")


def apply_theme_to_titlebar(root):
    version = sys.getwindowsversion()

    if version.major == 10 and version.build >= 22000:
        pywinstyles.change_header_color(
            root, "#1c1c1c" if sv_ttk.get_theme() == "dark" else "#fafafa"
        )
    elif version.major == 10:
        pywinstyles.apply_style(
            root, "dark" if sv_ttk.get_theme() == "dark" else "normal"
        )


apply_theme_to_titlebar(root)

frame = ttk.Frame(root)

frame.pack(fill="both", expand=True, padx=20, pady=20)

titre = ttk.Label(frame, text="Autostart tool", font=("Inter", 18))
titre.pack()

# Global variables for watch process
watch_process = None
is_watch_running = False
status_clear_job = None


def show_status(message, duration_ms=2000):
    global status_clear_job
    status_label.config(text=message)
    if status_clear_job is not None:
        root.after_cancel(status_clear_job)
    status_clear_job = root.after(duration_ms, lambda: status_label.config(text=""))


def check_config_valid():
    """Check if config file has a valid path"""
    script_dir = pathlib.Path(__file__).parent
    config_path = script_dir / "config.txt"

    if not config_path.exists():
        return False

    try:
        with open(config_path, "r") as f:
            line = f.readline().strip()
            if not line or "=" not in line:
                return False
            value = line.split("=", 1)[1]
            return bool(value.strip())
    except:
        return False


def update_watch_button_state():
    if check_config_valid():
        watch_checkbutton.config(state="normal")
        startup_checkbutton.config(state="normal")
    else:
        watch_checkbutton.config(state="disabled")
        startup_checkbutton.config(state="disabled")
        watch_var.set(False)


def browse():
    path = filedialog.askopenfilename(
        initialdir="C:/Downloads",
        title="Select AMPWin-RichPresence.exe",
        filetypes=[("Executable files", "*.exe")],
    )
    if path:
        path_entry.delete(0, "end")
        path_entry.insert(0, path)


def set_path():
    amp_path = path_entry.get()
    print(amp_path)
    script_dir = pathlib.Path(__file__).parent
    config_path = script_dir / "config.txt"

    if amp_path == "":
        with open(config_path, "w") as f:
            f.write("")
        show_status("Config cleared")
        update_watch_button_state()
        return

    with open(config_path, "w") as f:
        f.write(f"AMP_PATH={amp_path}")

    with open(config_path, "r") as r:
        line = r.readline().strip()

    value = line.split("=", 1)[1]
    if value == "":
        print("Path did not write")
    else:
        print("Written")
        update_watch_button_state()


def toggle_watch():
    global watch_process

    if watch_var.get():
        # Start watch
        script_dir = pathlib.Path(__file__).parent
        python_exe = script_dir.parent / ".venv" / "Scripts" / "python.exe"
        watch_script = script_dir / "watch.py"

        # Create startupinfo to hide the console window
        startupinfo = subprocess.STARTUPINFO()
        startupinfo.dwFlags |= subprocess.STARTF_USESHOWWINDOW
        startupinfo.wShowWindow = subprocess.SW_HIDE

        watch_process = subprocess.Popen(
            [str(python_exe), str(watch_script)],
            startupinfo=startupinfo,
            creationflags=subprocess.CREATE_NO_WINDOW,
        )
        show_status("Watch started")
    else:
        # Stop watch
        if watch_process:
            watch_process.terminate()
            watch_process = None
            show_status("Watch stopped")


def toggle_startup():
    startup_folder = (
        pathlib.Path(os.environ["APPDATA"])
        / "Microsoft"
        / "Windows"
        / "Start Menu"
        / "Programs"
        / "Startup"
    )
    startup_script = startup_folder / "amp_watch_startup.vbs"

    if startup_var.get():
        # Create VBS script in startup folder
        script_dir = pathlib.Path(__file__).parent
        python_exe = script_dir.parent / ".venv" / "Scripts" / "python.exe"
        watch_script = script_dir / "watch.py"

        vbs_content = f'''Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "powershell -ExecutionPolicy Bypass -Command ""& '{python_exe}' '{watch_script}'""", 0'''

        with open(startup_script, "w") as f:
            f.write(vbs_content)
        show_status("Added to startup")
    else:
        # Remove script
        if startup_script.exists():
            startup_script.unlink()
            show_status("Removed from startup")


def check_startup_enabled():
    startup_folder = (
        pathlib.Path(os.environ["APPDATA"])
        / "Microsoft"
        / "Windows"
        / "Start Menu"
        / "Programs"
        / "Startup"
    )
    startup_script = startup_folder / "amp_watch_startup.vbs"
    return startup_script.exists()


style.configure("Entry.TEntry", font=("Rubik", 18))

path_entry = ttk.Entry(frame, style="Entry.TEntry")
path_entry.pack(pady=10)

ttk.Button(frame, text="Browse", command=browse).pack()

ttk.Button(frame, text="Set Path", command=set_path).pack(pady=10)

status_label = ttk.Label(frame, text="")
status_label.pack(pady=5)

watch_var = BooleanVar()
watch_checkbutton = ttk.Checkbutton(
    frame, text="Run Watch", variable=watch_var, command=toggle_watch
)
watch_checkbutton.pack(pady=10)

startup_var = BooleanVar(value=check_startup_enabled())
startup_checkbutton = ttk.Checkbutton(
    frame, text="Auto-run at Startup", variable=startup_var, command=toggle_startup
)
startup_checkbutton.pack(pady=5)
print(startup_var)
# Initial check for config validity
update_watch_button_state()

root.mainloop()
