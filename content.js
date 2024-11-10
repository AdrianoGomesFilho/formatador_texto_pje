document.addEventListener('mouseover', function(event) {
    // Check if the mouse is over the PDF text layer
    if (event.target.closest('#viewerContainer .textLayer')) {
        const selectedText = window.getSelection().toString();
        if (selectedText) {
            const textarea = document.createElement('textarea');
            textarea.value = selectedText;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('Text copied to clipboard');
        }
    }
});