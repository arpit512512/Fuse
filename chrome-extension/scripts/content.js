// Fuse Browser Watcher - Content Script
// Monitors page activity and sends data to background script

(function() {
  'use strict';
  
  console.log('Fuse Browser Watcher: Content script loaded');
  
  let activityQueue = [];
  let isMonitoring = false;
  
  // Configuration
  const CONFIG = {
    batchInterval: 5000, // Send data every 5 seconds
    maxQueueSize: 50,
    trackClicks: true,
    trackScrolls: true,
    trackFormInputs: true,
    trackDOMChanges: true
  };
  
  // Start monitoring when content script is injected
  startMonitoring();
  
  function startMonitoring() {
    if (isMonitoring) return;
    isMonitoring = true;
    
    // Send initial page load event
    sendActivity({
      type: 'pageLoad',
      url: window.location.href,
      title: document.title,
      readyState: document.readyState
    });
    
    // Set up event listeners
    setupListeners();
    
    // Start batch sending
    setInterval(() => {
      if (isMonitoring && chrome.runtime?.id) {
        flushActivityQueue();
      }
    }, CONFIG.batchInterval);
  }
  
  function setupListeners() {
    // Track clicks
    if (CONFIG.trackClicks) {
      document.addEventListener('click', (e) => {
        const target = e.target;
        addActivity({
          type: 'click',
          elementType: target.tagName,
          elementId: target.id || null,
          elementClass: target.className || null,
          text: target.textContent?.substring(0, 50) || null,
          coordinates: { x: e.clientX, y: e.clientY }
        });
      }, true);
    }
    
    // Track scroll activity
    if (CONFIG.trackScrolls) {
      let scrollTimeout;
      window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          addActivity({
            type: 'scroll',
            position: {
              x: window.scrollX,
              y: window.scrollY
            },
            viewportSize: {
              width: window.innerWidth,
              height: window.innerHeight
            }
          });
        }, 500); // Debounce scroll events
      }, { passive: true });
    }
    
    // Track form inputs
    if (CONFIG.trackFormInputs) {
      document.addEventListener('input', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
          addActivity({
            type: 'formInput',
            inputType: e.target.type,
            inputName: e.target.name || null,
            inputId: e.target.id || null,
            // Don't send actual values for privacy
            hasValue: e.target.value.length > 0
          });
        }
      }, true);
    }
    
    // Track DOM mutations (page changes)
    if (CONFIG.trackDOMChanges) {
      const observer = new MutationObserver((mutations) => {
        // Only track significant changes
        const significantChanges = mutations.filter(m => 
          m.type === 'childList' && m.addedNodes.length > 0
        );
        
        if (significantChanges.length > 5) {
          addActivity({
            type: 'domChange',
            changesCount: significantChanges.length,
            description: 'Significant page update detected'
          });
        }
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
    
    // Track navigation (SPA routing)
    let lastUrl = window.location.href;
    new MutationObserver(() => {
      const currentUrl = window.location.href;
      if (currentUrl !== lastUrl) {
        lastUrl = currentUrl;
        addActivity({
          type: 'navigation',
          url: currentUrl,
          title: document.title
        });
      }
    }).observe(document.querySelector('title') || document.body, {
      subtree: true,
      characterData: true,
      childList: true
    });
    
    // Track errors
    window.addEventListener('error', (e) => {
      addActivity({
        type: 'error',
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno
      });
    });
    
    // Track console errors (for app monitoring)
    const originalConsoleError = console.error;
    console.error = function(...args) {
      addActivity({
        type: 'consoleError',
        message: args.map(a => String(a)).join(' ')
      });
      originalConsoleError.apply(console, args);
    };
    
    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      addActivity({
        type: 'visibilityChange',
        hidden: document.hidden
      });
    });
  }
  
  function addActivity(activityData) {
    activityQueue.push({
      ...activityData,
      timestamp: new Date().toISOString(),
      url: window.location.href
    });
    
    // Flush if queue is getting large
    if (activityQueue.length >= CONFIG.maxQueueSize) {
      flushActivityQueue();
    }
  }
  
  function flushActivityQueue() {
    if (activityQueue.length === 0) return;
    
    // Check if extension context is still valid
    if (!chrome.runtime?.id) {
      console.log('Fuse Browser Watcher: Extension context invalidated, stopping monitoring');
      isMonitoring = false;
      return;
    }
    
    // Send all queued activities to background script
    chrome.runtime.sendMessage({
      action: 'tabActivity',
      data: {
        activities: activityQueue,
        tabInfo: {
          url: window.location.href,
          title: document.title,
          timestamp: new Date().toISOString()
        }
      }
    }).catch(err => {
      // Handle extension context invalidation
      if (err.message?.includes('Extension context invalidated')) {
        console.log('Fuse Browser Watcher: Extension reloaded, stopping monitoring');
        isMonitoring = false;
      } else {
        console.warn('Failed to send activity data:', err);
      }
    });
    
    // Clear queue
    activityQueue = [];
  }
  
  // Helper function to send individual activity immediately
  function sendActivity(activityData) {
    // Check if extension context is still valid
    if (!chrome.runtime?.id) {
      return;
    }
    
    chrome.runtime.sendMessage({
      action: 'tabActivity',
      data: {
        activities: [activityData],
        tabInfo: {
          url: window.location.href,
          title: document.title,
          timestamp: new Date().toISOString()
        }
      }
    }).catch(err => {
      // Handle extension context invalidation silently
      if (err.message?.includes('Extension context invalidated')) {
        isMonitoring = false;
      } else {
        console.warn('Failed to send activity:', err);
      }
    });
  }
  
  // Capture page metrics periodically
  setInterval(() => {
    // Stop if extension context is invalid or monitoring stopped
    if (!isMonitoring || !chrome.runtime?.id) {
      return;
    }
    
    addActivity({
      type: 'metrics',
      performance: {
        memoryUsage: performance.memory ? {
          usedJSHeapSize: performance.memory.usedJSHeapSize,
          totalJSHeapSize: performance.memory.totalJSHeapSize
        } : null,
        timing: {
          loadComplete: performance.timing.loadEventEnd - performance.timing.navigationStart,
          domReady: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart
        }
      }
    });
  }, 30000); // Every 30 seconds
  
  // Clean up on page unload
  window.addEventListener('beforeunload', () => {
    flushActivityQueue();
  });
  
  // ============ ACTION EXECUTION HANDLERS ============
  
  // Listen for action execution commands from background script
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Check if extension context is still valid
    if (!chrome.runtime?.id) {
      return false;
    }
    
    switch (message.action) {
      case 'performClick':
        try {
          const element = document.querySelector(message.selector);
          if (element) {
            element.click();
            sendResponse({ success: true });
          } else {
            sendResponse({ success: false, error: 'Element not found' });
          }
        } catch (error) {
          sendResponse({ success: false, error: error.message });
        }
        break;
        
      case 'fillForm':
        try {
          let filled = 0;
          for (const [selector, value] of Object.entries(message.fields)) {
            const element = document.querySelector(selector);
            if (element) {
              element.value = value;
              element.dispatchEvent(new Event('input', { bubbles: true }));
              element.dispatchEvent(new Event('change', { bubbles: true }));
              filled++;
            }
          }
          sendResponse({ success: true, filled });
        } catch (error) {
          sendResponse({ success: false, error: error.message });
        }
        break;
        
      default:
        sendResponse({ error: 'Unknown action' });
    }
    
    return true;
  });
  
})();

