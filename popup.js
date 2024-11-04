document.getElementById('formatClipboard').addEventListener('click', () => {
  navigator.clipboard.readText().then(text => {
    const formattedText = text.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    navigator.clipboard.writeText(formattedText).then(() => {
      document.getElementById('output').textContent = formattedText;
      alert('Formatted text copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy text:', err);
      alert('Failed to copy text to clipboard.');
    });
  }).catch(err => {
    console.error('Failed to read clipboard:', err);
    alert('Failed to read clipboard text.');
  });
});