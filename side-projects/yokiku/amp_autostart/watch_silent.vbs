Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "powershell -ExecutionPolicy Bypass -Command ""& '.venv\Scripts\python.exe' '.\watch.py'""", 0