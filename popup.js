// document.getElementById('formatButton').addEventListener('click', function() {
//   formatText();
// });

document.getElementById('inputText').addEventListener('input', function() {
  formatText();
});

document.getElementById('copyButton').addEventListener('click', function() {
  copyText();
});

function formatText() {
  let inputText = document.getElementById('inputText').value;
  let formattedText = inputText
    .replace(/\s+/g, ' ') // Remove extra spaces
    .replace(/\n/g, ' ') // Remove breaklines
    .replace(/^\s*[\r\n]+/gm, '') // Remove blank lines
    .replace(/^\s*$/gm, '') // Remove lines that are only whitespace
    .replace(/Documento assinado eletronicamente por.*? - \w{7}/g, '')
    .replace(/Assinado eletronicamente por:.*? - \d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2} - \w{7}/g, '')
    .replace(/Assinado eletronicamente por:.*? - Juntado em: \d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2} - \w{7}/g, '')
    .replace(/QR Code para validação de documento.*? - \w{7}/g, '')
    .replace(/Símbolo PJe QR Code para validação de documento/g, '')
    .replace(/Número do processo: \d{7}-\d{2}\.\d{4}\.\d{1,2}\.\d{2}\.\d{4}/g, '') // Remove "Número do processo: <number>"
    .replace(/Número do documento: \d{29}/g, '') // Remove "Número do documento: <number>"
    .replace(/https:\/\/pje\.trt\d{2}\.jus\.br\/(segundograu|primeirograu)\/Processo\/ConsultaDocumento\/listView\.seam\?nd=\d{29}/g, '') // Remove URL
    .replace(/ID\. \w{8} - Pág\. \d+/g, '') // Remove "ID. <id> - Pág. <number>"
    .replace(/\d{29}/g, '') // Remove 29-digit numbers
    .replace(/https:\/\/pje\.trt\d{2}\.jus\.br\/(segundograu|primeirograu)\/Processo\/ConsultaDocumento\/listView\.seam\?nd=\d{29}/g, '') // Remove URL
    .replace(/ID\. \w{7} - Pág\. \d+/g, '') // Remove "ID. <id> - Pág. <number>"
    .replace(/\d{29}/g, '') // Remove 29-digit numbers  
    .replace(/Fls\.\:\s*\d+/g, '') // Remove "Fls.: <number>"
    
    .trim();
  document.getElementById('outputText').value = formattedText;
}

function copyText() {
  let outputText = document.getElementById('outputText');
  outputText.select();
  outputText.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand('copy');
}