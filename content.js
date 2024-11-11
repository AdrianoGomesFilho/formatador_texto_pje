
document.addEventListener('copy', (event) => {
    const selectedText = window.getSelection().toString();
    chrome.runtime.sendMessage({ action: 'formatClipboard', text: selectedText }, (response) => {
      if (response.success) {
        console.log('Text formatted and copied to clipboard');
      } else {
        console.error('Failed to format clipboard text:', response.error);
      }
    });
  });