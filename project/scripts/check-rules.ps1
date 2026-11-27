# Checks Kotlin/resource files against the rules in ../rules.
# Usage (PowerShell): .\scripts\check-rules.ps1 -Root C:\path\to\app\src\main
param([string]$Root = ".")

$ErrorActionPreference = "Stop"
$script:bad = 0
$allowedHosts = @("api.open-meteo.com", "geocoding-api.open-meteo.com")

function Report($rule, $file, $line, $text) {
    Write-Host ("[{0}] {1}:{2}  {3}" -f $rule, $file, $line, $text.Trim()) -ForegroundColor Yellow
    $script:bad++
}

$checks = @(
    @{ Rule = "strings (rules/typography.md)"; Pattern = 'Text\(\s*(text\s*=\s*)?"|contentDescription\s*=\s*"' },
    @{ Rule = "locale (rules/localization.md)"; Pattern = 'Locale\.(US|UK|ENGLISH|GERMAN|FRENCH)\b|Locale\(\s*"' },
    @{ Rule = "fonts (rules/typography.md)"; Pattern = 'FontFamily\(|Font\(\s*R\.font' }
)

$ktFiles = Get-ChildItem -Path $Root -Recurse -Filter *.kt -File |
    Where-Object { $_.FullName -notmatch '\\(build|\.gradle)\\' }

foreach ($f in $ktFiles) {
    $n = 0
    foreach ($line in Get-Content -LiteralPath $f.FullName) {
        $n++
        foreach ($c in $checks) {
            if ($line -match $c.Pattern) { Report $c.Rule $f.FullName $n $line }
        }
        if ($line -match 'https?://([^/"\s]+)') {
            $hostName = $Matches[1]
            if ($allowedHosts -notcontains $hostName) {
                Report "network (rules/weather.md)" $f.FullName $n $line
            }
        }
    }
}

$drawables = Get-ChildItem -Path $Root -Recurse -File |
    Where-Object { $_.DirectoryName -match '\\res\\drawable' -and $_.Name -notmatch '^(ic_|bg_)' }
foreach ($d in $drawables) {
    Report "icons (rules/icons.md)" $d.FullName 0 "drawable name must start with ic_ (or bg_ for backgrounds)"
}

if ($script:bad -gt 0) {
    Write-Host "`n$($script:bad) problem(s) found." -ForegroundColor Red
    exit 1
}
Write-Host "OK: no rule violations." -ForegroundColor Green
