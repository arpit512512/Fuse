# Quick Start Guide

Get the Fuse Browser Watcher extension up and running in 5 minutes!

## Step 1: Generate Icons (2 minutes)

1. Open `chrome-extension/icons/create-icons.html` in your browser
2. Right-click each canvas and save as:
   - `icon16.png`
   - `icon48.png`
   - `icon128.png`
3. Save all three files in the `chrome-extension/icons/` folder

## Step 2: Load Extension in Chrome (1 minute)

1. Open Chrome and go to `chrome://extensions/`
2. Toggle **"Developer mode"** ON (top right corner)
3. Click **"Load unpacked"**
4. Select the `chrome-extension` folder from your file system
5. The extension should now appear in your extensions list!

## Step 3: Set Up Fuse App API (2 minutes)

Create an API endpoint in your Fuse app to receive data:

```bash
cd fuse-mvp
mkdir -p src/app/api/browser-watcher
```

Create `src/app/api/browser-watcher/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    console.log('📊 Browser activity received:', {
      type: data.type,
      tabUrl: data.tabInfo?.url,
      activitiesCount: data.activities?.length
    });
    
    // TODO: Store in database or process with agents
    
    return NextResponse.json({ 
      success: true,
      message: 'Activity received'
    });
  } catch (error) {
    console.error('Error processing browser activity:', error);
    return NextResponse.json(
      { error: 'Failed to process activity' },
      { status: 500 }
    );
  }
}

// Enable CORS for extension
export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
```

## Step 4: Test It Out! (30 seconds)

1. Start your Fuse app: `npm run dev` (in fuse-mvp folder)
2. Open any website in Chrome
3. Click the Fuse extension icon
4. Click **"Start Watching"**
5. Interact with the page (click, scroll, type)
6. Check your Fuse app console for incoming activity logs! 🎉

## What's Next?

### Monitor Specific Sites

The extension is great for monitoring:
- 📊 **Production dashboards** (Grafana, Datadog, etc.)
- 🔧 **Admin panels** you want to watch
- 🧪 **Test environments** during deployments
- 📈 **Analytics platforms**

### Integrate with Fuse Agents

Update your Fuse app to:
1. Store browser activities in a database
2. Trigger agents based on detected anomalies
3. Create incidents automatically
4. Generate reports from browsing patterns

### Example Integration

```typescript
// In your Fuse app API route
if (data.activities) {
  for (const activity of data.activities) {
    // Detect errors
    if (activity.type === 'error' || activity.type === 'consoleError') {
      await createIncident({
        title: 'Browser error detected',
        source: 'browser-watcher',
        details: activity
      });
    }
    
    // Track important actions
    if (activity.type === 'click' && activity.elementId === 'deploy-button') {
      await notifySlack({
        message: `🚀 Deployment initiated from dashboard`,
        url: data.tabInfo.url
      });
    }
  }
}
```

## Troubleshooting

**Extension not loading?**
- Make sure you're in the `chrome-extension` folder when loading
- Check for errors in `chrome://extensions/`

**Not receiving data in Fuse app?**
- Verify Fuse app is running on `http://localhost:3000`
- Check browser console for CORS errors
- Ensure API route is created correctly

**High memory usage?**
- Edit `scripts/content.js` and reduce tracking features
- Increase `batchInterval` to send data less frequently

## Support

Need help? Check:
- Full README: `chrome-extension/README.md`
- Extension logs: Right-click icon → Inspect service worker
- Content script logs: Open DevTools on any page



