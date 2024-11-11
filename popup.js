document.getElementById('formatButton').addEventListener('click', function() {
  let inputText = document.getElementById('input').value;
  let formattedText = inputText
    .replace(/\s+/g, ' ') // Remove extra spaces
    .replace(/\n/g, ' ') // Remove breaklines
    .replace(/^\s*[\r\n]+/gm, '') // Remove blank lines
    .replace(/^\s*$/gm, '') // Remove lines that are only whitespace
    .replace(/Fls\.\:\s*\d+/g, '')
    .replace(/Documento assinado eletronicamente por.*? - \w{7}/g, '')
    .replace(/Assinado eletronicamente por:.*? - \d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2} - \w{7}/g, '')
    .replace(/Assinado eletronicamente por:.*? - Juntado em: \d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2} - \w{7}/g, '')
    .replace(/QR Code para validação de documento.*? - \w{7}/g, '')
    .replace(/Símbolo PJe QR Code para validação de documento/g, '')
    .trim();
  document.getElementById('output').value = formattedText;
});