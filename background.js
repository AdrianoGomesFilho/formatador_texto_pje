chrome.runtime.onInstalled.addListener(() => {
  console.log('Clipboard Text Formatter Extension Installed');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'formatClipboard') {
    const formattedText = request.text.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    navigator.clipboard.writeText(formattedText).then(() => {
      console.log('Formatted text copied to clipboard');
      sendResponse({ success: true });
    }).catch(err => {
      console.error('Failed to copy text:', err);
      sendResponse({ success: false, error: err });
    });
    return true; // Keep the message channel open for sendResponse
  }
});