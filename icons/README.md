# Icon Generation

This directory contains the icons for the Demo Prep Tool browser extension.

## Files

- `generate-icons.js` - Node.js script that generates SVG icons
- `generate-icons.html` - Browser-based tool to view and save PNG icons
- `svg-to-png.py` - Python script to convert SVGs to PNGs (requires cairosvg or svglib)
- `icon16.svg`, `icon32.svg`, `icon48.svg`, `icon128.svg` - Generated SVG icons

## Converting SVG to PNG

### Option 1: Use the browser (Easiest)

1. Open `generate-icons.html` in your web browser
2. Right-click on each canvas and select "Save image as..."
3. Save each as `icon16.png`, `icon32.png`, `icon48.png`, and `icon128.png`

### Option 2: Use Python

```bash
pip install cairosvg
python svg-to-png.py
```

### Option 3: Use ImageMagick

```bash
convert icon16.svg icon16.png
convert icon32.svg icon32.png
convert icon48.svg icon48.png
convert icon128.svg icon128.png
```

### Option 4: Online converter

Upload the SVG files to an online converter like:
- https://cloudconvert.com/svg-to-png
- https://svgtopng.com/

## Icon Design

The icon depicts a presentation screen with a stand, representing demo/presentation mode. Key features:
- Blue gradient screen background
- White content bars representing slides/content
- Red indicator dot (suggesting "live" or "demo mode")
- Professional presentation stand
