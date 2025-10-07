# Fuse Action Control & Approval System

The Fuse Browser Watcher extension now includes a powerful action control system that allows Fuse to request browser actions that require user approval before execution.

## Features

### 🔔 Action Notifications
- Desktop notifications when Fuse requests an action
- Badge on extension icon showing pending action count
- In-popup action queue with approve/reject buttons

### ✅ Supported Actions

1. **Navigate** - Navigate to a specific URL
   ```javascript
   {
     type: 'navigate',
     tabId: 123,
     url: 'https://example.com',
     description: 'Navigate to example.com'
   }
   ```

2. **Click** - Click an element on the page
   ```javascript
   {
     type: 'click',
     tabId: 123,
     selector: '#button-id',
     description: 'Click the submit button'
   }
   ```

3. **Fill Form** - Fill form fields
   ```javascript
   {
     type: 'fillForm',
     tabId: 123,
     fields: {
       '#email': 'user@example.com',
       '#password': 'secret'
     },
     description: 'Fill login form'
   }
   ```

4. **Screenshot** - Capture page screenshot
   ```javascript
   {
     type: 'screenshot',
     tabId: 123,
     description: 'Capture screenshot of current page'
   }
   ```

5. **Close Tab** - Close a browser tab
   ```javascript
   {
     type: 'closeTab',
     tabId: 123,
     description: 'Close this tab'
   }
   ```

6. **Open Tab** - Open a new tab
   ```javascript
   {
     type: 'openTab',
     url: 'https://example.com',
     description: 'Open example.com in new tab'
   }
   ```

7. **Reload** - Reload a tab
   ```javascript
   {
     type: 'reload',
     tabId: 123,
     description: 'Reload the current page'
   }
   ```

8. **Execute Script** - Run custom JavaScript
   ```javascript
   {
     type: 'executeScript',
     tabId: 123,
     script: 'console.log("Hello from Fuse")',
     description: 'Execute custom script'
   }
   ```

## How It Works

### 1. Fuse Requests an Action

When Fuse wants to perform an action, it sends a request to the extension:

```javascript
chrome.runtime.sendMessage({
  action: 'requestAction',
  actionData: {
    type: 'navigate',
    tabId: currentTabId,
    url: 'https://example.com',
    description: 'Navigate to example.com'
  }
});
```

### 2. User Receives Notification

The user gets:
- A desktop notification with Approve/Reject buttons
- A badge on the extension icon
- The action appears in the popup's "Pending Actions" section

### 3. User Approves or Rejects

**Option A: Via Notification**
- Click "Approve" or "Reject" button directly in the notification

**Option B: Via Popup**
- Open the extension popup
- Review the action details
- Click "✓ Approve" or "✕ Reject"

### 4. Action Execution

If approved:
- The action is executed immediately
- Results are sent back to Fuse
- The action is removed from the pending queue

If rejected:
- The action is cancelled
- Fuse is notified of the rejection
- The action is removed from the pending queue

## Testing

The extension includes test buttons in the popup to simulate Fuse requesting actions:

1. **Test Navigate** - Requests navigation to example.com
2. **Test Screenshot** - Requests a screenshot of the current page
3. **Test Reload** - Requests to reload the current page

Click these buttons to test the approval workflow!

## Demo Mode

To enable automatic action requests for testing, uncomment the demo code in `background.js`:

```javascript
// Around line 355 in background.js
let demoActionCounter = 0;
setInterval(() => {
  if (demoActionCounter < 3) {
    // ... demo code
  }
}, 15000);
```

This will automatically request 3 demo actions every 15 seconds.

## Integration with Fuse App

When the Fuse app backend is ready, it can request actions via WebSocket or HTTP:

```javascript
// Example: Request an action from Fuse backend
fetch('chrome-extension://<extension-id>/action-request', {
  method: 'POST',
  body: JSON.stringify({
    type: 'navigate',
    tabId: 123,
    url: 'https://example.com',
    description: 'Navigate based on incident context'
  })
});
```

## Security

- All actions require explicit user approval
- Users can see full details before approving
- Actions are logged to the console
- Users can reject any action without consequences
- No sensitive data (like passwords) is logged

## Console Logging

All action activity is logged to help with debugging:

- 🔔 Action requested
- ✅ Action approved
- ❌ Action rejected
- ⚡ Action executing
- 📤 Sending context to Fuse

Open DevTools console to see these logs.




