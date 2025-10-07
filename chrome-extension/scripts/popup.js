// Fuse Browser Watcher - Popup Script
// Manages the extension popup UI

let currentTabId = null;
let actionControlEnabled = true;

// Initialize popup
document.addEventListener('DOMContentLoaded', async () => {
  await getCurrentTab();
  await checkConnectionStatus();
  await loadActionControlState();
  await loadPendingActions();
  setupEventListeners();
  
  // Update pending actions periodically
  setInterval(loadPendingActions, 1000);
});

// Get current tab ID
async function getCurrentTab() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab) {
      currentTabId = tab.id;
    }
  } catch (error) {
    console.error('Error getting current tab:', error);
  }
}

// Load action control state
async function loadActionControlState() {
  try {
    const result = await chrome.storage.local.get(['actionControlEnabled']);
    actionControlEnabled = result.actionControlEnabled !== false; // Default to true
    document.getElementById('actionControlToggle').checked = actionControlEnabled;
  } catch (error) {
    console.error('Error loading action control state:', error);
  }
}

// Check connection to Fuse app
async function checkConnectionStatus() {
  try {
    const result = await chrome.storage.local.get(['fuseAppConnected']);
    const isConnected = result.fuseAppConnected || false;
    
    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('connectionStatus');
    
    if (isConnected) {
      statusDot.classList.add('connected');
      statusText.textContent = 'Connected to Fuse App';
    } else {
      statusDot.classList.add('disconnected');
      statusText.textContent = 'Disconnected from Fuse App';
    }
  } catch (error) {
    console.error('Error checking connection:', error);
  }
}

// Load pending actions
async function loadPendingActions() {
  try {
    const response = await chrome.runtime.sendMessage({
      action: 'getPendingActions'
    });
    
    const actions = response.actions || [];
    const container = document.getElementById('pendingActionsContainer');
    const list = document.getElementById('pendingActionsList');
    const badge = document.getElementById('actionsBadge');
    const infoMessage = document.getElementById('infoMessage');
    
    badge.textContent = actions.length;
    
    if (actions.length > 0) {
      container.style.display = 'block';
      infoMessage.style.display = 'none';
      
      list.innerHTML = actions.map(action => `
        <div class="action-item" data-action-id="${action.id}">
          <div class="action-header">
            <span class="action-type">${getActionIcon(action.type)} ${action.type}</span>
            <span class="action-time">${getTimeAgo(action.timestamp)}</span>
          </div>
          <div class="action-description">${escapeHtml(action.description || 'No description')}</div>
          ${action.url ? `<div class="action-url">${escapeHtml(action.url)}</div>` : ''}
          <div class="action-buttons">
            <button class="btn-approve" data-action-id="${action.id}">
              ✓ Approve
            </button>
            <button class="btn-reject" data-action-id="${action.id}">
              ✕ Reject
            </button>
          </div>
        </div>
      `).join('');
      
      // Add approve/reject button listeners
      list.querySelectorAll('.btn-approve').forEach(btn => {
        btn.addEventListener('click', async () => {
          const actionId = btn.dataset.actionId;
          await approveActionHandler(actionId);
        });
      });
      
      list.querySelectorAll('.btn-reject').forEach(btn => {
        btn.addEventListener('click', async () => {
          const actionId = btn.dataset.actionId;
          await rejectActionHandler(actionId);
        });
      });
    } else {
      container.style.display = 'none';
      infoMessage.style.display = 'block';
    }
  } catch (error) {
    console.error('Error loading pending actions:', error);
  }
}

// Get icon for action type
function getActionIcon(type) {
  const icons = {
    navigate: '🌐',
    click: '👆',
    fillForm: '📝',
    screenshot: '📸',
    closeTab: '❌',
    openTab: '➕',
    reload: '🔄',
    executeScript: '⚡'
  };
  return icons[type] || '🔧';
}

// Get time ago string
function getTimeAgo(timestamp) {
  const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ago`;
}

// Approve action handler
async function approveActionHandler(actionId) {
  try {
    const response = await chrome.runtime.sendMessage({
      action: 'approveAction',
      actionId: actionId
    });
    
    if (response.success) {
      showNotification('Action approved and executed', 'success');
    } else {
      showNotification(`Failed: ${response.error}`, 'error');
    }
    
    await loadPendingActions();
  } catch (error) {
    showNotification('Error approving action', 'error');
    console.error(error);
  }
}

// Reject action handler
async function rejectActionHandler(actionId) {
  try {
    await chrome.runtime.sendMessage({
      action: 'rejectAction',
      actionId: actionId
    });
    
    showNotification('Action rejected', 'success');
    await loadPendingActions();
  } catch (error) {
    showNotification('Error rejecting action', 'error');
    console.error(error);
  }
}

// Setup event listeners
function setupEventListeners() {
  // Action control toggle
  document.getElementById('actionControlToggle').addEventListener('change', async (e) => {
    actionControlEnabled = e.target.checked;
    await chrome.storage.local.set({ actionControlEnabled });
    
    if (actionControlEnabled) {
      showNotification('Action control enabled', 'success');
    } else {
      showNotification('Action control disabled', 'info');
    }
  });
  
  // Open Fuse App link
  document.getElementById('openFuseApp').addEventListener('click', (e) => {
    e.preventDefault();
    chrome.tabs.create({ url: 'http://localhost:3000' });
  });
  
  // Settings link
  document.getElementById('settingsLink').addEventListener('click', (e) => {
    e.preventDefault();
    showNotification('Settings coming soon', 'info');
  });
}

// Show notification (simple implementation)
function showNotification(message, type = 'info') {
  // Create a simple toast notification
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    top: 16px;
    right: 16px;
    background: ${type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 12px;
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// Utility function to escape HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

