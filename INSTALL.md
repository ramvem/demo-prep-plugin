# Installation Guide

Complete step-by-step instructions for installing the Demo Prep Tool browser extension.

## Before You Begin

This extension requires **PNG icon files** to be generated before installation. Don't skip Step 1!

---

## Step 1: Generate PNG Icons (REQUIRED)

The extension needs 4 PNG icon files. Choose one method below:

### Method A: Browser-Based (Easiest - Recommended)

1. Navigate to the `icons` folder
2. Open `create-png-icons.html` in your web browser
3. Click the **"Download All Icons"** button
4. Your browser will download 4 PNG files
5. Ensure all files are in the `icons/` directory:
   - `icon16.png`
   - `icon32.png`
   - `icon48.png`
   - `icon128.png`

### Method B: Python Script

If you have Python installed:

```bash
cd icons
pip install cairosvg
python svg-to-png.py
```

### Method C: Online Converter

1. Go to https://cloudconvert.com/svg-to-png
2. Upload `icons/icon16.svg`, `icons/icon32.svg`, `icons/icon48.svg`, `icons/icon128.svg`
3. Download the converted PNG files
4. Place them in the `icons/` directory

### Method D: ImageMagick

If you have ImageMagick installed:

```bash
cd icons
convert icon16.svg icon16.png
convert icon32.svg icon32.png
convert icon48.svg icon48.png
convert icon128.svg icon128.png
```

---

## Step 2: Verify Files

Run the verification script to ensure all files are present:

### Windows
Double-click `check-files.bat` or run:
```cmd
check-files.bat
```

### Mac/Linux
```bash
./check-files.sh
```

### Alternative: Browser Verification
Open `verify-installation.html` in your browser for a visual checklist.

---

## Step 3: Install in Browser

### For Google Chrome

1. Open Chrome
2. Navigate to `chrome://extensions/`
3. Enable **"Developer mode"** using the toggle in the top-right corner
4. Click the **"Load unpacked"** button
5. Browse to and select the `demo-prep-plugin` directory
6. The extension icon should appear in your toolbar
7. If you don't see the icon, click the puzzle piece icon and pin "Demo Prep Tool"

### For Microsoft Edge

1. Open Edge
2. Navigate to `edge://extensions/`
3. Enable **"Developer mode"** using the toggle in the left sidebar
4. Click the **"Load unpacked"** button
5. Browse to and select the `demo-prep-plugin` directory
6. The extension icon should appear in your toolbar
7. If you don't see the icon, click the puzzle piece icon and pin "Demo Prep Tool"

---

## Step 4: Configure the Extension

### Initial Configuration

1. Click the **Demo Prep Tool** icon in your browser toolbar
2. Click **"Configure Settings"**
3. The Options page will open

### Set Target URL

In the "Target URL" field, enter the URL you want to navigate to when preparing for demos.

**Examples:**
- `https://app.example.com/login`
- `https://staging.mycompany.com/welcome`
- `https://demo.platform.com/dashboard`

### Set Domains to Clear

In the "Domains to Clear" text area, enter each domain on a separate line.

**Examples:**

For a single domain:
```
example.com
```

For multiple domains:
```
example.com
api.example.com
auth.example.com
```

For domains with subdomains:
```
.example.com
.staging.mycompany.com
```

**Note:** Using `.example.com` (with leading dot) will clear cookies for all subdomains.

### Save Configuration

Click the **"Save Settings"** button. You should see a success message.

---

## Step 5: Test the Extension

1. Navigate to one of the domains you configured
2. Log in or set some cookies (browse around)
3. Click the **Demo Prep Tool** icon
4. Review the displayed configuration
5. Click **"Prepare for Demo"**
6. You should:
   - See a success message briefly
   - Be navigated to your target URL
   - Have all cookies cleared for configured domains

### Verify Cookies Were Cleared

1. Open Developer Tools (F12)
2. Go to the "Application" or "Storage" tab
3. Check "Cookies" - the domains you configured should have no cookies (or only new ones from the target URL)

---

## Troubleshooting

### Extension won't load

**Error: "Manifest file is missing or unreadable"**
- Ensure `manifest.json` exists in the root directory
- Verify JSON syntax is valid

**Error: "Could not load icon"**
- Generate PNG icons (Step 1)
- Ensure all 4 PNG files are in the `icons/` directory
- File names must be exact: `icon16.png`, `icon32.png`, `icon48.png`, `icon128.png`

### Extension loads but icon doesn't appear

- Click the puzzle piece icon in your browser toolbar
- Find "Demo Prep Tool" in the list
- Click the pin icon to pin it to your toolbar

### Cookies aren't being cleared

**Check domain format:**
- ✅ Correct: `example.com`
- ✅ Correct: `.example.com`
- ❌ Wrong: `https://example.com`
- ❌ Wrong: `http://example.com`
- ❌ Wrong: `example.com/path`

**Try both formats:**
```
example.com
.example.com
```

**Check browser console:**
1. Right-click extension icon → "Inspect popup"
2. Or go to `chrome://extensions/` → Click "service worker"
3. Look for error messages in the Console tab

### Settings don't save

- Make sure you clicked "Save Settings"
- Check for validation errors on the options page
- Try clicking "Reset to Defaults" and reconfiguring
- Check browser console for errors

### Target URL doesn't open

- Ensure URL includes protocol (`https://` or `http://`)
- Test the URL in a regular browser tab first
- Check for typos in the URL

---

## Uninstallation

### Chrome
1. Go to `chrome://extensions/`
2. Find "Demo Prep Tool"
3. Click "Remove"
4. Confirm removal

### Edge
1. Go to `edge://extensions/`
2. Find "Demo Prep Tool"
3. Click "Remove"
4. Confirm removal

---

## Next Steps

- See [README.md](README.md) for complete documentation
- See [QUICKSTART.md](QUICKSTART.md) for a quick reference guide
- See [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md) for technical details

---

## Need Help?

### Common Commands

**Verify installation:**
```bash
# Windows
check-files.bat

# Mac/Linux
./check-files.sh
```

**Open extension pages:**
- Popup: Click extension icon
- Options: Right-click icon → "Options"
- Background: `chrome://extensions/` → "service worker"

### Debug Mode

Enable verbose logging:
1. Go to extension's options page
2. Open browser console (F12)
3. Click "Prepare for Demo"
4. Check console for detailed logs

---

**You're all set!** Enjoy easier demo preparation. 🎯
