document.getElementById('formatButton').addEventListener('click', function() {
    let inputText = document.getElementById('input').value;
    let formattedText = inputText
      .replace(/\s+/g, ' ') // Remove extra spaces
      .replace(/\n/g, ' ') // Remove breaklines
      .replace(/Documento assinado eletronicamente*? - [a-zA-Z0-9]{7}/g, '') // Remove specific string
      .replace(/Assinado eletronicamente por:*? - [a-zA-Z0-9]{7}/g, '') // Remove entire sentence
      .trim();
    document.getElementById('output').value = formattedText;
  });