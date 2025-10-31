@echo off
echo ================================================
echo Demo Prep Tool - File Verification
echo ================================================
echo.

set MISSING=0

echo Checking required files...
echo.

if exist "manifest.json" (
    echo [OK] manifest.json
) else (
    echo [MISSING] manifest.json
    set MISSING=1
)

if exist "popup.html" (
    echo [OK] popup.html
) else (
    echo [MISSING] popup.html
    set MISSING=1
)

if exist "popup.js" (
    echo [OK] popup.js
) else (
    echo [MISSING] popup.js
    set MISSING=1
)

if exist "options.html" (
    echo [OK] options.html
) else (
    echo [MISSING] options.html
    set MISSING=1
)

if exist "options.js" (
    echo [OK] options.js
) else (
    echo [MISSING] options.js
    set MISSING=1
)

if exist "background.js" (
    echo [OK] background.js
) else (
    echo [MISSING] background.js
    set MISSING=1
)

echo.
echo Checking icon files...
echo.

if exist "icons\icon16.png" (
    echo [OK] icons\icon16.png
) else (
    echo [MISSING] icons\icon16.png - GENERATE THIS!
    set MISSING=1
)

if exist "icons\icon32.png" (
    echo [OK] icons\icon32.png
) else (
    echo [MISSING] icons\icon32.png - GENERATE THIS!
    set MISSING=1
)

if exist "icons\icon48.png" (
    echo [OK] icons\icon48.png
) else (
    echo [MISSING] icons\icon48.png - GENERATE THIS!
    set MISSING=1
)

if exist "icons\icon128.png" (
    echo [OK] icons\icon128.png
) else (
    echo [MISSING] icons\icon128.png - GENERATE THIS!
    set MISSING=1
)

echo.
echo ================================================

if %MISSING%==0 (
    echo.
    echo SUCCESS: All required files are present!
    echo Your extension is ready to be installed.
    echo.
    echo Next steps:
    echo 1. Open chrome://extensions/ or edge://extensions/
    echo 2. Enable Developer mode
    echo 3. Click "Load unpacked"
    echo 4. Select this directory
    echo.
) else (
    echo.
    echo WARNING: Some files are missing!
    echo.
    echo If PNG icons are missing:
    echo 1. Open icons\create-png-icons.html in your browser
    echo 2. Click "Download All Icons"
    echo 3. Save all PNG files to the icons\ directory
    echo.
)

echo ================================================
pause
