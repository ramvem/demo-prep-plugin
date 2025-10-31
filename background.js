// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'clearCookies') {
    clearCookiesForDomains(request.domains)
      .then(() => {
        sendResponse({ success: true });
      })
      .catch((error) => {
        console.error('Error clearing cookies:', error);
        sendResponse({ success: false, error: error.message });
      });

    // Return true to indicate we'll respond asynchronously
    return true;
  }
});

// Clear cookies for specified domains
async function clearCookiesForDomains(domains) {
  console.log('Clearing cookies for domains:', domains);

  for (const domain of domains) {
    try {
      // Get all cookies for this domain
      const cookies = await chrome.cookies.getAll({ domain: domain });

      console.log(`Found ${cookies.length} cookies for domain: ${domain}`);

      // Remove each cookie
      for (const cookie of cookies) {
        const protocol = cookie.secure ? 'https:' : 'http:';
        const url = `${protocol}//${cookie.domain}${cookie.path}`;

        await chrome.cookies.remove({
          url: url,
          name: cookie.name,
          storeId: cookie.storeId
        });

        console.log(`Removed cookie: ${cookie.name} from ${url}`);
      }

      // Also try to clear cookies with a leading dot (subdomain cookies)
      const domainWithDot = domain.startsWith('.') ? domain : '.' + domain;
      const subdomainCookies = await chrome.cookies.getAll({ domain: domainWithDot });

      for (const cookie of subdomainCookies) {
        const protocol = cookie.secure ? 'https:' : 'http:';
        const url = `${protocol}//${cookie.domain}${cookie.path}`;

        await chrome.cookies.remove({
          url: url,
          name: cookie.name,
          storeId: cookie.storeId
        });

        console.log(`Removed subdomain cookie: ${cookie.name} from ${url}`);
      }

    } catch (error) {
      console.error(`Error clearing cookies for domain ${domain}:`, error);
      throw error;
    }
  }

  console.log('Finished clearing cookies for all domains');
}

// Log when extension is installed or updated
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Demo Prep Tool installed');
    // Open options page on first install
    chrome.runtime.openOptionsPage();
  } else if (details.reason === 'update') {
    console.log('Demo Prep Tool updated to version', chrome.runtime.getManifest().version);
  }
});
