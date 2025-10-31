# Demo Prep Tool - Browser Extension

A browser extension for Chrome and Microsoft Edge that helps you prepare for demos by clearing cookies for specific domains and navigating to a configured URL with a single click.

## Features

- **One-Click Demo Preparation**: Clear cookies and navigate to your demo URL instantly
- **Configurable Domains**: Specify which domains should have their cookies cleared
- **Configurable Target URL**: Set the URL to navigate to when preparing for demos
- **Chrome & Edge Compatible**: Works on both Chrome and Microsoft Edge browsers
- **Persistent Configuration**: Your settings are saved and synced across browser sessions
- **User-Friendly Interface**: Simple popup and options page for easy configuration

## Installation

### Prerequisites

Before installing the extension, you need to generate the PNG icon files:

1. Open `icons/create-png-icons.html` in your web browser
2. Click "Download All Icons" or download each icon individually
3. Save all four PNG files (`icon16.png`, `icon32.png`, `icon48.png`, `icon128.png`) in the `icons/` directory

### Installing in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" using the toggle in the top-right corner
3. Click "Load unpacked"
4. Select the `demo-prep-plugin` directory
5. The extension icon should appear in your browser toolbar

### Installing in Microsoft Edge

1. Open Edge and navigate to `edge://extensions/`
2. Enable "Developer mode" using the toggle in the left sidebar
3. Click "Load unpacked"
4. Select the `demo-prep-plugin` directory
5. The extension icon should appear in your browser toolbar

## Configuration

### First-Time Setup

When you first install the extension, the options page will open automatically. If not, you can access it by:

1. Click the Demo Prep Tool icon in your browser toolbar
2. Click "Configure Settings"

Or:

1. Right-click the extension icon
2. Select "Options"

### Configuring Target URL

1. In the options page, enter the URL you want to navigate to in the "Target URL" field
2. Example: `https://app.example.com/demo` or `https://staging.myapp.com/login`

### Configuring Domains to Clear

1. In the "Domains to Clear" text area, enter each domain on a separate line
2. Examples:
   - `example.com` - Clears cookies for example.com
   - `.example.com` - Clears cookies for example.com and all subdomains
   - `app.example.com` - Clears cookies only for the app subdomain

**Example configuration:**
```
example.com
.staging.example.com
api.example.com
auth.mycompany.com
```

3. Click "Save Settings"

## Usage

### Preparing for a Demo

1. Click the Demo Prep Tool icon in your browser toolbar
2. Review the current configuration (target URL and domains)
3. Click "Prepare for Demo"
4. The extension will:
   - Clear all cookies for the configured domains
   - Navigate the current tab to your target URL
   - Close the popup automatically

### Viewing Current Configuration

Click the extension icon to see your current target URL and domains without running the demo preparation.

### Changing Configuration

1. Click the extension icon
2. Click "Configure Settings"
3. Update your target URL or domains
4. Click "Save Settings"

## How It Works

The extension consists of three main components:

1. **Popup** (`popup.html`, `popup.js`): The interface you see when clicking the extension icon. Displays current configuration and provides the "Prepare for Demo" button.

2. **Background Script** (`background.js`): Runs in the background and handles cookie clearing operations. It removes cookies for all specified domains, including subdomain cookies.

3. **Options Page** (`options.html`, `options.js`): Full-page settings interface for configuring the target URL and domains. Validates input and saves to browser storage.

## File Structure

```
demo-prep-plugin/
├── manifest.json           # Extension configuration
├── popup.html              # Popup interface HTML
├── popup.js                # Popup interface logic
├── options.html            # Options page HTML
├── options.js              # Options page logic
├── background.js           # Background script for cookie clearing
├── icons/                  # Extension icons
│   ├── icon16.png          # 16x16 icon
│   ├── icon32.png          # 32x32 icon
│   ├── icon48.png          # 48x48 icon
│   ├── icon128.png         # 128x128 icon
│   ├── create-png-icons.html  # Tool to generate PNG icons
│   ├── generate-icons.html    # Alternative icon generator
│   ├── generate-icons.js      # Node.js icon generator
│   └── README.md              # Icon generation instructions
└── README.md               # This file
```

## Permissions

The extension requires the following permissions:

- **cookies**: To clear cookies for specified domains
- **storage**: To save your configuration settings
- **tabs**: To navigate to the target URL
- **activeTab**: To update the current tab
- **host_permissions** (`<all_urls>`): To access cookies across all domains you configure

## Troubleshooting

### Extension doesn't load

- Make sure you've generated and placed all four PNG icon files in the `icons/` directory
- Check that "Developer mode" is enabled in your browser's extensions page
- Look for error messages in the browser's extension management page

### Cookies aren't being cleared

- Verify that the domain names are entered correctly in the options page
- Make sure the domains don't have `http://` or `https://` prefixes (just the domain name)
- Check the browser console for error messages (F12 → Console tab)
- Try including both `example.com` and `.example.com` to catch all cookies

### Target URL doesn't open

- Ensure the URL includes the protocol (`https://` or `http://`)
- Check that the URL is valid and accessible
- Verify you have an active internet connection

### Settings aren't saved

- Make sure you clicked "Save Settings" in the options page
- Check for any validation error messages
- Try resetting settings and reconfiguring

## Development

### Making Changes

1. Edit the relevant files (`popup.html`, `popup.js`, `options.html`, `options.js`, `background.js`)
2. Go to your browser's extensions page
3. Click the refresh/reload icon for the Demo Prep Tool extension
4. Test your changes

### Debugging

- **Popup**: Right-click the extension icon → Inspect popup
- **Background Script**: Go to extensions page → Click "service worker" link under the extension
- **Options Page**: Right-click on options page → Inspect

## Browser Compatibility

- **Chrome**: Version 88+ (Manifest V3 support)
- **Microsoft Edge**: Version 88+ (Chromium-based)
- **Other Chromium-based browsers**: Should work but not officially tested

## Version History

### 1.0.0 (Initial Release)
- One-click demo preparation
- Configurable target URL
- Configurable domains for cookie clearing
- Chrome and Edge compatibility
- Persistent configuration storage
- User-friendly popup and options interfaces

## License

This extension is provided as-is for demo preparation purposes.

## Support

For issues, questions, or feature requests, please refer to your organization's support channels or the repository where this extension is hosted.

---

**Happy Demoing!** 🎯
