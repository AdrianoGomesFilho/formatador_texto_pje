document.getElementById('formatButton').addEventListener('click', function() {
  let inputText = document.getElementById('input').value;
  let formattedText = inputText
    .replace(/\s+/g, ' ') // Remove extra spaces
    .replace(/\n/g, ' ') // Remove breaklines
    .replace(/Documento assinado eletronicamente por.*? - \w{7}/g, '') // Remove specific string
    .replace(/Assinado eletronicamente por:.*? - \d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2} - \w{7}/g, '') // Remove entire sentence
    .replace(/QR Code para validação de documento.*? - \w{7}/g, '') // Remove QR Code validation string
    .replace(/Símbolo PJe QR Code para validação de documento/g, '') // Remove additional string
    .trim();
  document.getElementById('output').value = formattedText;
});