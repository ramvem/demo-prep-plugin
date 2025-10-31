// Load and display current configuration
async function loadConfig() {
  const config = await chrome.storage.sync.get(['targetUrl', 'domains']);

  const targetUrlElement = document.getElementById('targetUrl');
  const domainsElement = document.getElementById('domains');

  if (config.targetUrl) {
    targetUrlElement.textContent = config.targetUrl;
    targetUrlElement.classList.remove('empty');
  } else {
    targetUrlElement.textContent = 'Not configured';
    targetUrlElement.classList.add('empty');
  }

  if (config.domains && config.domains.length > 0) {
    domainsElement.textContent = config.domains.join(', ');
    domainsElement.classList.remove('empty');
  } else {
    domainsElement.textContent = 'Not configured';
    domainsElement.classList.add('empty');
  }

  return config;
}

// Show status message
function showStatus(message, isError = false) {
  const statusElement = document.getElementById('status');
  statusElement.textContent = message;
  statusElement.className = 'status ' + (isError ? 'error' : 'success');
  statusElement.style.display = 'block';

  setTimeout(() => {
    statusElement.style.display = 'none';
  }, 5000);
}

// Show/hide loading indicator
function setLoading(loading) {
  document.getElementById('loading').style.display = loading ? 'block' : 'none';
  document.getElementById('prepBtn').disabled = loading;
  document.getElementById('optionsBtn').disabled = loading;
}

// Prepare for demo
async function prepareDemo() {
  const config = await chrome.storage.sync.get(['targetUrl', 'domains']);

  if (!config.targetUrl) {
    showStatus('Please configure the target URL first', true);
    return;
  }

  if (!config.domains || config.domains.length === 0) {
    showStatus('Please configure at least one domain to clear', true);
    return;
  }

  try {
    setLoading(true);

    // Send message to background script to clear cookies
    await chrome.runtime.sendMessage({
      action: 'clearCookies',
      domains: config.domains
    });

    // Navigate to target URL in the current tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.tabs.update(tab.id, { url: config.targetUrl });

    showStatus('Demo prepared successfully!');

    // Close popup after a short delay
    setTimeout(() => {
      window.close();
    }, 1500);

  } catch (error) {
    console.error('Error preparing demo:', error);
    showStatus('Error: ' + error.message, true);
  } finally {
    setLoading(false);
  }
}

// Open options page
function openOptions() {
  chrome.runtime.openOptionsPage();
  window.close();
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  await loadConfig();

  document.getElementById('prepBtn').addEventListener('click', prepareDemo);
  document.getElementById('optionsBtn').addEventListener('click', openOptions);
});
