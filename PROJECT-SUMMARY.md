# Demo Prep Tool - Project Summary

## Overview

A browser extension (Chrome & Edge compatible) that streamlines demo preparation by clearing cookies for specified domains and navigating to a configured URL with a single click.

## Project Structure

```
demo-prep-plugin/
│
├── Core Extension Files
│   ├── manifest.json           # Extension configuration (Manifest V3)
│   ├── popup.html              # Main popup UI
│   ├── popup.js                # Popup logic
│   ├── options.html            # Settings page UI
│   ├── options.js              # Settings page logic
│   └── background.js           # Background service worker for cookie operations
│
├── Icons
│   ├── icon16.png              # 16x16 toolbar icon (GENERATE THIS)
│   ├── icon32.png              # 32x32 toolbar icon (GENERATE THIS)
│   ├── icon48.png              # 48x48 extension icon (GENERATE THIS)
│   ├── icon128.png             # 128x128 store icon (GENERATE THIS)
│   ├── icon16.svg              # SVG source (16x16)
│   ├── icon32.svg              # SVG source (32x32)
│   ├── icon48.svg              # SVG source (48x48)
│   ├── icon128.svg             # SVG source (128x128)
│   ├── create-png-icons.html   # Browser-based PNG generator ⭐ USE THIS
│   ├── generate-icons.html     # Alternative canvas-based generator
│   ├── generate-icons.js       # Node.js SVG generator
│   ├── svg-to-png.py           # Python converter (requires libraries)
│   └── README.md               # Icon generation guide
│
├── Documentation
│   ├── README.md               # Complete documentation
│   ├── QUICKSTART.md           # 5-minute setup guide
│   ├── PROJECT-SUMMARY.md      # This file
│   └── verify-installation.html # Pre-installation checker
│
└── Configuration
    └── .gitignore              # Git ignore rules
```

## Key Features

1. **One-Click Demo Prep**: Clears cookies and navigates to demo URL instantly
2. **Configurable**: Set target URL and domains via user-friendly interface
3. **Cross-Browser**: Works on Chrome 88+ and Edge 88+ (Chromium)
4. **Persistent Settings**: Configuration synced across browser sessions
5. **Domain Flexibility**: Supports specific domains and subdomain wildcards
6. **User-Friendly**: Clean, modern interface with validation and error handling

## Technical Details

### Architecture

- **Manifest Version**: 3 (latest standard)
- **Service Worker**: Modern background script architecture
- **Storage**: Chrome Storage Sync API for cross-device settings
- **Permissions**: Minimal required permissions (cookies, storage, tabs, activeTab)

### Cookie Clearing Logic

The extension clears cookies for specified domains by:
1. Fetching all cookies for each domain
2. Removing cookies with exact domain matches
3. Removing cookies with leading-dot (subdomain) matches
4. Handling both secure and non-secure cookies
5. Respecting cookie stores for proper isolation

### User Flow

```
User clicks extension icon
    ↓
Popup displays current config
    ↓
User clicks "Prepare for Demo"
    ↓
Background worker clears cookies for all configured domains
    ↓
Current tab navigates to target URL
    ↓
Popup closes automatically
```

## Installation Steps

### 1. Generate PNG Icons (Required!)

**Option A (Recommended)**: Browser-based
- Open `icons/create-png-icons.html` in any browser
- Click "Download All Icons"
- Save all 4 PNG files in the `icons/` directory

**Option B**: Python (if you have cairosvg installed)
```bash
cd icons
pip install cairosvg
python svg-to-png.py
```

**Option C**: Online converter
- Upload SVG files to https://cloudconvert.com/svg-to-png
- Download PNG versions
- Place in `icons/` directory

### 2. Verify Installation

Open `verify-installation.html` in browser to check all required files are present.

### 3. Load Extension

**Chrome**:
1. `chrome://extensions/` → Developer mode ON
2. "Load unpacked" → Select this directory

**Edge**:
1. `edge://extensions/` → Developer mode ON
2. "Load unpacked" → Select this directory

### 4. Configure

1. Click extension icon → "Configure Settings"
2. Enter target URL (e.g., `https://app.example.com`)
3. Enter domains to clear (one per line)
4. Save settings

## Configuration Examples

### Example 1: SaaS Application Demo

**Target URL**: `https://app.example.com/welcome`

**Domains**:
```
example.com
.example.com
auth.example.com
api.example.com
```

### Example 2: Staging Environment

**Target URL**: `https://staging.mycompany.com/login`

**Domains**:
```
.staging.mycompany.com
mycompany.com
auth-staging.mycompany.com
```

### Example 3: Multi-Service Demo

**Target URL**: `https://demo.platform.com/dashboard`

**Domains**:
```
platform.com
.platform.com
accounts.platform.com
analytics.platform.com
cdn.platform.com
```

## Development

### Making Changes

1. Edit source files
2. Reload extension in browser
3. Test changes

### Debugging

- **Popup**: Right-click icon → "Inspect popup"
- **Options**: Right-click options page → "Inspect"
- **Background**: Extensions page → "Service worker" link
- **Console**: Check for errors and logs

### Future Enhancements (Ideas)

- [ ] Multiple configuration profiles
- [ ] Keyboard shortcuts
- [ ] LocalStorage clearing option
- [ ] Session storage clearing
- [ ] Cache clearing
- [ ] History clearing for specific domains
- [ ] Export/import configurations
- [ ] Backup/restore settings
- [ ] Pre-demo checklist
- [ ] Demo timer/countdown
- [ ] One-click demo recording integration

## Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 88+ | ✅ Fully supported |
| Edge | 88+ | ✅ Fully supported |
| Brave | 88+ | ✅ Should work (untested) |
| Opera | 74+ | ✅ Should work (untested) |
| Firefox | N/A | ❌ Needs Manifest V2 version |

## File Sizes (Approximate)

- Total extension: ~50 KB (with PNG icons)
- Core files: ~15 KB
- Icons (PNG): ~30 KB
- Documentation: Variable

## Permissions Explained

| Permission | Purpose | Risk Level |
|------------|---------|------------|
| `cookies` | Clear cookies for specified domains | Low - Only accesses cookies for domains you configure |
| `storage` | Save configuration settings | None - Local storage only |
| `tabs` | Navigate to target URL | Low - Only updates current tab URL |
| `activeTab` | Access current tab | Low - Only when extension is clicked |
| `<all_urls>` | Access cookies across domains | Medium - Required to clear cookies for any domain |

## Security Considerations

- Extension only clears cookies when explicitly triggered by user
- Configuration stored locally in browser (not transmitted)
- No external API calls or data collection
- No tracking or analytics
- Open source - all code is visible and auditable
- Minimal permissions requested
- Manifest V3 security standards

## Testing Checklist

Before deploying for use:

- [ ] Generate all PNG icons
- [ ] Load extension in Chrome
- [ ] Load extension in Edge
- [ ] Configure target URL
- [ ] Add test domains
- [ ] Verify cookies are cleared
- [ ] Verify navigation works
- [ ] Test with invalid URL (should show error)
- [ ] Test with invalid domain (should show error)
- [ ] Test settings persistence (close/reopen browser)
- [ ] Test with subdomain wildcards (.example.com)
- [ ] Test with multiple domains
- [ ] Check console for errors

## Support & Troubleshooting

### Common Issues

**Icons not showing**: Generate PNG files using `icons/create-png-icons.html`

**Cookies not clearing**:
- Check domain format (no http/https)
- Try both `example.com` and `.example.com`
- Check browser console for errors

**Settings not saving**:
- Ensure you clicked "Save Settings"
- Check for validation errors
- Try resetting and reconfiguring

**Extension won't load**:
- Verify all required files present
- Use `verify-installation.html` to check
- Enable Developer mode
- Check extension page for error messages

## Credits

- Icon design: Presentation screen with demo indicator
- Built with: Vanilla JavaScript (no frameworks)
- Compatible with: Manifest V3 standard

## License

Provided as-is for demo preparation purposes.

---

**Ready to start?** Open `QUICKSTART.md` for a 5-minute setup guide!
