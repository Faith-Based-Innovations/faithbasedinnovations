Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$srcDir = Join-Path $root "assets\illustrations"
$destDir = Join-Path $root "assets\philosophy"
$width = 560
$height = 420

$map = @{
  "philosophy-local-first.png" = "machine-first.png"
  "philosophy-product-boundaries.png" = "product-boundaries.png"
  "philosophy-steward-trace.png" = "traceable-intelligence.png"
}

New-Item -ItemType Directory -Force -Path $destDir | Out-Null

foreach ($entry in $map.GetEnumerator()) {
  $src = Join-Path $srcDir $entry.Key
  $dest = Join-Path $destDir $entry.Value
  if (-not (Test-Path $src)) {
    Write-Error "Missing source: $src"
    continue
  }

  $img = [System.Drawing.Image]::FromFile($src)
  $bmp = New-Object System.Drawing.Bitmap $width, $height
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $g.Clear([System.Drawing.Color]::FromArgb(255, 248, 250, 252))
  $g.DrawImage($img, 0, 0, $width, $height)
  $bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
  $img.Dispose()

  $size = (Get-Item $dest).Length
  Write-Output ("{0} -> {1} ({2:N0} bytes)" -f $entry.Key, $entry.Value, $size)
}
