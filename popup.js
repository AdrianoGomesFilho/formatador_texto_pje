document.getElementById('formatButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const formattedText = formatText(inputText);
    document.getElementById('outputText').value = formattedText;
  });
  
  function formatText(inputText) {
    // Split the text into lines
    let lines = inputText.split('\n');
    
    // Strip leading and trailing whitespace from each line
    lines = lines.map(line => line.trim());
    
    // Remove empty lines
    lines = lines.filter(line => line);
    
    // Join the cleaned lines into a single string with a single space separating each line
    let formattedText = lines.join(' ');
    
    // Replace multiple spaces with a single space
    formattedText = formattedText.replace(/\s+/g, ' ');
    
    return formattedText;
  }