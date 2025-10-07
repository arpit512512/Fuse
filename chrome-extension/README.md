# Fuse Browser Watcher - Chrome Extension

A Chrome extension that monitors browser tab activity and sends data to the Fuse Engineering Autopilot application.

## Features

- 🔍 **Tab Monitoring**: Watch any browser tab and track user interactions
- 📊 **Activity Tracking**: Captures clicks, scrolls, form inputs, DOM changes, and errors
- 🔄 **Real-time Sync**: Sends activity data to Fuse app in real-time
- 💾 **Offline Queue**: Stores data locally when Fuse app is unreachable
- 🎯 **Multi-tab Support**: Monitor multiple tabs simultaneously
- ⚡ **Lightweight**: Minimal performance impact on browsing

## Installation

### 1. Load Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top right)
3. Click **Load unpacked**
4. Select the `chrome-extension` folder

### 2. Pin the Extension

1. Click the Extensions icon (puzzle piece) in Chrome toolbar
2. Find "Fuse Browser Watcher"
3. Click the pin icon to keep it visible

## Usage

### Starting Tab Monitoring

1. **Click the extension icon** in your Chrome toolbar
2. Navigate to the tab you want to monitor
3. Click **"Start Watching"** in the popup
4. The extension will begin tracking activity on that tab

### Viewing Watched Tabs

- Open the extension popup to see all currently watched tabs
- Each tab shows its title and URL
- Click the **✕** button to stop watching a specific tab

### Connection Status

The popup shows connection status to the Fuse app:
- **Green dot**: Connected and sending data
- **Red dot**: Disconnected (data queued locally)

## Tracked Activities

The extension monitors:

- **Page Loads**: Initial page load events
- **Clicks**: Element clicks with target information
- **Scrolling**: Scroll position and viewport size
- **Form Inputs**: Input field interactions (values not captured for privacy)
- **DOM Changes**: Significant page updates
- **Navigation**: SPA routing and URL changes
- **Errors**: JavaScript errors and console errors
- **Visibility**: Tab visibility changes (active/background)
- **Performance**: Memory usage and load times

## Configuration

### Fuse App URL

By default, the extension connects to `http://localhost:3000`. To change this:

Edit `scripts/background.js` line 4:
```javascript
const FUSE_APP_URL = 'https://your-fuse-app.com';
```

### Tracking Settings

Configure what to track in `scripts/content.js` (lines 10-16):

```javascript
const CONFIG = {
  batchInterval: 5000,      // Send data every N milliseconds
  maxQueueSize: 50,         // Max activities before forcing send
  trackClicks: true,        // Track click events
  trackScrolls: true,       // Track scroll events
  trackFormInputs: true,    // Track form field changes
  trackDOMChanges: true     // Track page mutations
};
```

## Architecture

```
┌─────────────────────┐
│   Browser Tab       │
│  (Web Page)         │
└──────┬──────────────┘
       │ Activity Events
       ▼
┌─────────────────────┐
│  Content Script     │
│  (content.js)       │
└──────┬──────────────┘
       │ Messages
       ▼
┌─────────────────────┐
│  Background Worker  │
│  (background.js)    │
└──────┬──────────────┘
       │ HTTP POST
       ▼
┌─────────────────────┐
│   Fuse App          │
│   (localhost:3000)  │
└─────────────────────┘
```

## API Integration

The extension sends data to the Fuse app via POST requests to:

```
POST http://localhost:3000/api/browser-watcher
```

### Request Payload

```json
{
  "type": "activity",
  "activities": [
    {
      "type": "click",
      "elementType": "BUTTON",
      "elementId": "submit-btn",
      "timestamp": "2024-10-03T18:00:00.000Z",
      "url": "https://example.com"
    }
  ],
  "tabInfo": {
    "url": "https://example.com",
    "title": "Example Page",
    "timestamp": "2024-10-03T18:00:00.000Z"
  }
}
```

## Privacy & Security

- **No sensitive data**: Form input values are NOT captured
- **Local storage**: Data is queued locally if app is unreachable
- **User control**: Users explicitly enable watching per tab
- **Transparent**: All tracked activities are logged to console

## Development

### File Structure

```
chrome-extension/
├── manifest.json           # Extension configuration
├── popup.html             # Extension popup UI
├── scripts/
│   ├── background.js      # Service worker (tab management)
│   ├── content.js         # Injected page monitor
│   └── popup.js           # Popup UI logic
├── styles/
│   └── popup.css          # Popup styling
└── icons/                 # Extension icons (16x16, 48x48, 128x128)
```

### Testing

1. Make code changes
2. Go to `chrome://extensions/`
3. Click the refresh icon on "Fuse Browser Watcher"
4. Test in a new tab

### Debugging

- **Background script**: Right-click extension icon → Inspect service worker
- **Content script**: Open DevTools on any page → Console tab
- **Popup**: Right-click extension icon → Inspect popup

## Troubleshooting

### Extension Not Appearing
- Ensure Developer mode is enabled
- Reload the extension from chrome://extensions/

### Not Sending Data
- Check Fuse app is running on `localhost:3000`
- Check console for connection errors
- Verify CORS is enabled on Fuse app

### High Memory Usage
- Reduce `maxQueueSize` in content.js config
- Increase `batchInterval` to send less frequently
- Disable unused tracking features

## Next Steps

To integrate with the Fuse app, create an API endpoint at:

```typescript
// fuse-mvp/src/app/api/browser-watcher/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  
  // Process browser activity data
  console.log('Received activity:', data);
  
  // Store in database or forward to agent system
  
  return Response.json({ success: true });
}
```

## License

MIT


