// Load saved settings
async function loadSettings() {
  const config = await chrome.storage.sync.get(['targetUrl', 'domains']);

  if (config.targetUrl) {
    document.getElementById('targetUrl').value = config.targetUrl;
  }

  if (config.domains && config.domains.length > 0) {
    document.getElementById('domains').value = config.domains.join('\n');
  }
}

// Show status message
function showStatus(message, isError = false) {
  const statusElement = document.getElementById('status');
  statusElement.textContent = message;
  statusElement.className = 'status ' + (isError ? 'error' : 'success');
  statusElement.style.display = 'block';

  setTimeout(() => {
    statusElement.style.display = 'none';
  }, 4000);
}

// Save settings
async function saveSettings(e) {
  e.preventDefault();

  const targetUrl = document.getElementById('targetUrl').value.trim();
  const domainsText = document.getElementById('domains').value.trim();

  // Validate URL
  if (!targetUrl) {
    showStatus('Please enter a target URL', true);
    return;
  }

  try {
    new URL(targetUrl);
  } catch (error) {
    showStatus('Please enter a valid URL (e.g., https://example.com)', true);
    return;
  }

  // Parse and validate domains
  if (!domainsText) {
    showStatus('Please enter at least one domain', true);
    return;
  }

  const domains = domainsText
    .split('\n')
    .map(d => d.trim())
    .filter(d => d.length > 0);

  if (domains.length === 0) {
    showStatus('Please enter at least one valid domain', true);
    return;
  }

  // Validate each domain
  for (const domain of domains) {
    if (!isValidDomain(domain)) {
      showStatus(`Invalid domain: ${domain}`, true);
      return;
    }
  }

  // Save to storage
  try {
    await chrome.storage.sync.set({
      targetUrl: targetUrl,
      domains: domains
    });

    showStatus('Settings saved successfully!');
    console.log('Settings saved:', { targetUrl, domains });
  } catch (error) {
    console.error('Error saving settings:', error);
    showStatus('Error saving settings: ' + error.message, true);
  }
}

// Validate domain format
function isValidDomain(domain) {
  // Allow domains with or without leading dot
  // Basic validation for domain format
  const domainRegex = /^\.?[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return domainRegex.test(domain);
}

// Reset to defaults
function resetSettings() {
  if (confirm('Are you sure you want to reset all settings? This will clear your saved configuration.')) {
    document.getElementById('targetUrl').value = '';
    document.getElementById('domains').value = '';

    chrome.storage.sync.clear(() => {
      showStatus('Settings reset successfully');
      console.log('Settings cleared');
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadSettings();

  document.getElementById('settingsForm').addEventListener('submit', saveSettings);
  document.getElementById('resetBtn').addEventListener('click', resetSettings);
});
