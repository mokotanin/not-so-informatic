$appToWatch = "AppleMusic"
$appToControlPath = "C:\Users\titch\Downloads\AMWin-RichPresence-v1.6.1-x64\AMWin-RichPresence.exe"
$appToControlName = "AMWin-RichPresence"

while ($true) {
    $watchRunning = Get-Process -Name $appToWatch -ErrorAction SilentlyContinue
    $controlRunning = Get-Process -Name $appToControlName -ErrorAction SilentlyContinue

    if ($watchRunning -and -not $controlRunning) {
        Start-Process $appToControlPath
    }

    if (-not $watchRunning -and $controlRunning) {
        Stop-Process -Name $appToControlName
    }

    Start-Sleep -Seconds 2
}