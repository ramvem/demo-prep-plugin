#!/bin/bash

echo "================================================"
echo "Demo Prep Tool - File Verification"
echo "================================================"
echo ""

MISSING=0

echo "Checking required files..."
echo ""

check_file() {
    if [ -f "$1" ]; then
        echo "[OK] $1"
    else
        echo "[MISSING] $1"
        MISSING=1
    fi
}

check_file "manifest.json"
check_file "popup.html"
check_file "popup.js"
check_file "options.html"
check_file "options.js"
check_file "background.js"

echo ""
echo "Checking icon files..."
echo ""

if [ -f "icons/icon16.png" ]; then
    echo "[OK] icons/icon16.png"
else
    echo "[MISSING] icons/icon16.png - GENERATE THIS!"
    MISSING=1
fi

if [ -f "icons/icon32.png" ]; then
    echo "[OK] icons/icon32.png"
else
    echo "[MISSING] icons/icon32.png - GENERATE THIS!"
    MISSING=1
fi

if [ -f "icons/icon48.png" ]; then
    echo "[OK] icons/icon48.png"
else
    echo "[MISSING] icons/icon48.png - GENERATE THIS!"
    MISSING=1
fi

if [ -f "icons/icon128.png" ]; then
    echo "[OK] icons/icon128.png"
else
    echo "[MISSING] icons/icon128.png - GENERATE THIS!"
    MISSING=1
fi

echo ""
echo "================================================"

if [ $MISSING -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS: All required files are present!"
    echo "Your extension is ready to be installed."
    echo ""
    echo "Next steps:"
    echo "1. Open chrome://extensions/ or edge://extensions/"
    echo "2. Enable Developer mode"
    echo "3. Click 'Load unpacked'"
    echo "4. Select this directory"
    echo ""
else
    echo ""
    echo "⚠️  WARNING: Some files are missing!"
    echo ""
    echo "If PNG icons are missing:"
    echo "1. Open icons/create-png-icons.html in your browser"
    echo "2. Click 'Download All Icons'"
    echo "3. Save all PNG files to the icons/ directory"
    echo ""
    echo "Alternative methods:"
    echo "- Run: cd icons && python svg-to-png.py"
    echo "- Or use an online converter for the SVG files"
    echo ""
fi

echo "================================================"
