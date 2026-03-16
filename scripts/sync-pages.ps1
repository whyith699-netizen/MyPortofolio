$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$distPath = Join-Path $repoRoot "dist"
$assetsPath = Join-Path $repoRoot "assets"

if (-not (Test-Path $distPath)) {
  throw "Build output not found at $distPath"
}

if (Test-Path $assetsPath) {
  Remove-Item -Recurse -Force $assetsPath
}

Copy-Item -Force (Join-Path $distPath "index.html") (Join-Path $repoRoot "index.html")
Copy-Item -Force (Join-Path $distPath "favicon.svg") (Join-Path $repoRoot "favicon.svg")
Copy-Item -Force (Join-Path $distPath "icons.svg") (Join-Path $repoRoot "icons.svg")
Copy-Item -Recurse -Force (Join-Path $distPath "assets") $assetsPath
