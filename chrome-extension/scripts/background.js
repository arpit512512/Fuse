// Fuse Browser Watcher - Background Service Worker
// Manages tab monitoring and communication with Fuse app

const FUSE_APP_URL = 'http://localhost:3000'; // Fuse app endpoint
const watchedTabs = new Map(); // Store watched tab information
const pendingActions = new Map(); // Store pending actions awaiting approval
let actionIdCounter = 0; // Counter for generating unique action IDs

// Initialize extension
chrome.runtime.onInstalled.addListener(() => {
  console.log('Fuse Browser Watcher installed');
  
  // Set default storage
  chrome.storage.local.set({
    isWatching: false,
    watchedTabIds: [],
    fuseAppConnected: false
  });
});

// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.action) {
    case 'startWatching':
      startWatchingTab(message.tabId);
      sendResponse({ success: true });
      break;
      
    case 'stopWatching':
      stopWatchingTab(message.tabId);
      sendResponse({ success: true });
      break;
      
    case 'getWatchedTabs':
      sendResponse({ tabs: Array.from(watchedTabs.values()) });
      break;
      
    case 'tabActivity':
      // Forward activity from content script to Fuse app
      sendActivityToFuse(message.data);
      break;
      
    case 'getPendingActions':
      sendResponse({ actions: Array.from(pendingActions.values()) });
      break;
      
    case 'approveAction':
      approveAction(message.actionId).then(result => {
        sendResponse(result);
      });
      return true; // Async response
      
    case 'rejectAction':
      rejectAction(message.actionId);
      sendResponse({ success: true });
      break;
      
    case 'requestAction':
      // Allow Fuse to request an action (for testing/demo purposes)
      requestActionFromFuse(message.actionData);
      sendResponse({ success: true });
      break;
      
    default:
      sendResponse({ error: 'Unknown action' });
  }
  
  return true; // Keep message channel open for async response
});

// Start watching a specific tab
async function startWatchingTab(tabId) {
  try {
    const tab = await chrome.tabs.get(tabId);
    
    watchedTabs.set(tabId, {
      id: tabId,
      url: tab.url,
      title: tab.title,
      startTime: new Date().toISOString(),
      status: 'watching'
    });
    
    // Update storage
    const watchedTabIds = Array.from(watchedTabs.keys());
    chrome.storage.local.set({ 
      isWatching: true,
      watchedTabIds 
    });
    
    // Inject content script if not already present
    await chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['scripts/content.js']
    });
    
    // Notify Fuse app
    sendToFuse({
      type: 'watchingStarted',
      tab: watchedTabs.get(tabId)
    });
    
    console.log(`Started watching tab ${tabId}: ${tab.title}`);
  } catch (error) {
    console.error('Error starting watch:', error);
  }
}

// Stop watching a specific tab
function stopWatchingTab(tabId) {
  if (watchedTabs.has(tabId)) {
    const tab = watchedTabs.get(tabId);
    watchedTabs.delete(tabId);
    
    // Update storage
    const watchedTabIds = Array.from(watchedTabs.keys());
    chrome.storage.local.set({ 
      isWatching: watchedTabIds.length > 0,
      watchedTabIds 
    });
    
    // Notify Fuse app
    sendToFuse({
      type: 'watchingStopped',
      tab: tab
    });
    
    console.log(`Stopped watching tab ${tabId}`);
  }
}

// Monitor tab updates for watched tabs
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (watchedTabs.has(tabId)) {
    if (changeInfo.status === 'complete') {
      sendToFuse({
        type: 'tabUpdated',
        tabId: tabId,
        url: tab.url,
        title: tab.title,
        timestamp: new Date().toISOString()
      });
    }
  }
});

// Monitor tab removal
chrome.tabs.onRemoved.addListener((tabId) => {
  if (watchedTabs.has(tabId)) {
    stopWatchingTab(tabId);
  }
});

// Send activity data to Fuse app
function sendActivityToFuse(activity) {
  sendToFuse({
    type: 'activity',
    ...activity,
    timestamp: new Date().toISOString()
  });
}

// Generic function to send data to Fuse app (dummy implementation)
async function sendToFuse(data) {
  // Dummy implementation - just log the message
  console.log('📤 Sending context to Fuse:', data.type, data);
  
  // Mark as connected for UI purposes
  chrome.storage.local.set({ fuseAppConnected: true });
  
  // Simulate successful send
  return Promise.resolve({ success: true });
}

// ============ ACTION CONTROL & APPROVAL SYSTEM ============

// Request an action from Fuse (simulate Fuse requesting to do something)
async function requestActionFromFuse(actionData) {
  // Check if action control is enabled
  const result = await chrome.storage.local.get(['actionControlEnabled']);
  const actionControlEnabled = result.actionControlEnabled !== false; // Default to true
  
  if (!actionControlEnabled) {
    console.log('⚠️ Action control is disabled. Ignoring action request:', actionData.type);
    return null;
  }
  
  const actionId = `action_${++actionIdCounter}`;
  const action = {
    id: actionId,
    ...actionData,
    timestamp: new Date().toISOString(),
    status: 'pending'
  };
  
  pendingActions.set(actionId, action);
  
  console.log('🔔 New action requested from Fuse:', action);
  
  // Create a notification badge
  chrome.action.setBadgeText({ text: pendingActions.size.toString() });
  chrome.action.setBadgeBackgroundColor({ color: '#FF6B35' });
  
  // Send notification
  chrome.notifications.create(actionId, {
    type: 'basic',
    iconUrl: 'icons/icon128.png',
    title: 'Fuse Action Request',
    message: `${action.type}: ${action.description || 'Requires your approval'}`,
    priority: 2,
    requireInteraction: true,
    buttons: [
      { title: 'Approve' },
      { title: 'Reject' }
    ]
  });
  
  return action;
}

// Approve an action and execute it
async function approveAction(actionId) {
  const action = pendingActions.get(actionId);
  if (!action) {
    return { success: false, error: 'Action not found' };
  }
  
  action.status = 'approved';
  console.log('✅ Action approved:', action);
  
  // Execute the action
  const result = await executeAction(action);
  
  // Remove from pending
  pendingActions.delete(actionId);
  updateActionBadge();
  
  // Notify Fuse
  sendToFuse({
    type: 'actionCompleted',
    actionId: actionId,
    result: result
  });
  
  return result;
}

// Reject an action
function rejectAction(actionId) {
  const action = pendingActions.get(actionId);
  if (!action) {
    return;
  }
  
  action.status = 'rejected';
  console.log('❌ Action rejected:', action);
  
  // Remove from pending
  pendingActions.delete(actionId);
  updateActionBadge();
  
  // Notify Fuse
  sendToFuse({
    type: 'actionRejected',
    actionId: actionId
  });
}

// Execute an approved action
async function executeAction(action) {
  console.log('⚡ Executing action:', action);
  
  try {
    switch (action.type) {
      case 'navigate':
        // Navigate to a URL
        await chrome.tabs.update(action.tabId, { url: action.url });
        return { success: true, message: `Navigated to ${action.url}` };
        
      case 'click':
        // Send click command to content script
        await chrome.tabs.sendMessage(action.tabId, {
          action: 'performClick',
          selector: action.selector
        });
        return { success: true, message: `Clicked element: ${action.selector}` };
        
      case 'fillForm':
        // Send form fill command to content script
        await chrome.tabs.sendMessage(action.tabId, {
          action: 'fillForm',
          fields: action.fields
        });
        return { success: true, message: 'Form filled successfully' };
        
      case 'screenshot':
        // Capture screenshot
        const dataUrl = await chrome.tabs.captureVisibleTab(null, {
          format: 'png'
        });
        return { success: true, message: 'Screenshot captured', data: dataUrl };
        
      case 'closeTab':
        // Close a tab
        await chrome.tabs.remove(action.tabId);
        return { success: true, message: 'Tab closed' };
        
      case 'openTab':
        // Open a new tab
        const tab = await chrome.tabs.create({ url: action.url });
        return { success: true, message: 'Tab opened', tabId: tab.id };
        
      case 'reload':
        // Reload a tab
        await chrome.tabs.reload(action.tabId);
        return { success: true, message: 'Tab reloaded' };
        
      case 'executeScript':
        // Execute custom JavaScript
        const results = await chrome.scripting.executeScript({
          target: { tabId: action.tabId },
          func: new Function(action.script)
        });
        return { success: true, message: 'Script executed', results };
        
      default:
        return { success: false, error: 'Unknown action type' };
    }
  } catch (error) {
    console.error('Error executing action:', error);
    return { success: false, error: error.message };
  }
}

// Update badge count
function updateActionBadge() {
  const count = pendingActions.size;
  if (count > 0) {
    chrome.action.setBadgeText({ text: count.toString() });
    chrome.action.setBadgeBackgroundColor({ color: '#FF6B35' });
  } else {
    chrome.action.setBadgeText({ text: '' });
  }
}

// Handle notification button clicks
chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
  if (buttonIndex === 0) {
    // Approve button
    approveAction(notificationId);
  } else {
    // Reject button
    rejectAction(notificationId);
  }
  chrome.notifications.clear(notificationId);
});

// Handle notification clicks (open popup)
chrome.notifications.onClicked.addListener((notificationId) => {
  chrome.action.openPopup();
  chrome.notifications.clear(notificationId);
});

// Demo: Simulate Fuse requesting actions periodically (for testing)
// Uncomment to enable demo mode that sends test actions
/*
let demoActionCounter = 0;
setInterval(() => {
  if (demoActionCounter < 3) { // Only send 3 demo actions
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        const demoActions = [
          {
            type: 'navigate',
            tabId: tabs[0].id,
            url: 'https://example.com',
            description: 'Navigate to example.com (Demo Action)'
          },
          {
            type: 'screenshot',
            tabId: tabs[0].id,
            description: 'Capture screenshot of current page (Demo Action)'
          },
          {
            type: 'reload',
            tabId: tabs[0].id,
            description: 'Reload the current page (Demo Action)'
          }
        ];
        
        requestActionFromFuse(demoActions[demoActionCounter % demoActions.length]);
        demoActionCounter++;
      }
    });
  }
}, 15000); // Every 15 seconds
*/

// Keep service worker alive
chrome.alarms.create('keepAlive', { periodInMinutes: 1 });
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'keepAlive') {
    console.log('Fuse Browser Watcher active');
  }
});

