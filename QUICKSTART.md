# Quick Start Guide

Get up and running with Demo Prep Tool in 5 minutes!

## Step 1: Generate Icons (2 minutes)

1. Open `icons/create-png-icons.html` in your web browser
2. Click the "Download All Icons" button
3. Your browser will download 4 PNG files
4. Make sure all files are saved in the `icons/` directory:
   - icon16.png
   - icon32.png
   - icon48.png
   - icon128.png

## Step 2: Install Extension (1 minute)

### For Chrome:
1. Open `chrome://extensions/`
2. Toggle "Developer mode" ON (top-right)
3. Click "Load unpacked"
4. Select this `demo-prep-plugin` folder

### For Edge:
1. Open `edge://extensions/`
2. Toggle "Developer mode" ON (left sidebar)
3. Click "Load unpacked"
4. Select this `demo-prep-plugin` folder

## Step 3: Configure (2 minutes)

1. Click the Demo Prep Tool icon in your toolbar
2. Click "Configure Settings"
3. Enter your demo URL (e.g., `https://app.example.com/login`)
4. Enter domains to clear (one per line):
   ```
   example.com
   .staging.example.com
   ```
5. Click "Save Settings"

## Step 4: Use It!

When you're ready for a demo:
1. Click the Demo Prep Tool icon
2. Click "Prepare for Demo"
3. Done! Cookies cleared and navigated to your demo URL

## Example Configuration

**Use Case**: Demoing a web app that requires fresh login state

**Target URL**: `https://staging.myapp.com/login`

**Domains to Clear**:
```
myapp.com
.staging.myapp.com
auth.myapp.com
```

This will clear all authentication cookies and navigate to the login page, giving you a fresh start for your demo.

## Tips

- Test your configuration before your actual demo
- Keep the extension icon pinned to your toolbar for quick access
- You can change settings anytime without reinstalling
- The extension works on both active tabs and new tabs

## Need Help?

See [README.md](README.md) for detailed documentation.
