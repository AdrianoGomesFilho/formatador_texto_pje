document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('inputText').addEventListener('input', function() {
    formatText();
  });

  document.getElementById('copyButton').addEventListener('click', function() {
    copyText();
  });
});

function formatText() {
  let inputText = document.getElementById('inputText').value;
  console.log("Original Input:", inputText); // Debugging

  let formattedText = inputText.replace(/\s+/g, ' '); // Remove extra spaces
  console.log("After removing extra spaces:", formattedText); // Debugging

  formattedText = formattedText.replace(/Número do processo:\s*\d{7}-\d{2}\.\d{4}\.\d{1,2}\.\d{2}\.\d{4}/gi, ''); // Remove "Número do processo: <number>"
  console.log("After removing Número do processo:", formattedText); // Debugging

  formattedText = formattedText.replace(/Número do documento:\s*\d{29}/gi, ''); // Remove "Número do documento: <number>"
  console.log("After removing Número do documento:", formattedText); // Debugging

  // Remove URLs even if they are part of a longer line
  formattedText = formattedText.replace(/https:\/\/pje\.trt\d+\.jus\.br\/\w+\/Processo\/ConsultaDocumento\/listView\.seam\?nd=\d+/gi, '');
  console.log("After removing URLs:", formattedText); // Debugging

  formattedText = formattedText.replace(/Assinado eletronicamente por:.*? - \d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2} - \w{7}/gi, ''); // Remove "Assinado eletronicamente por: <name> - <date> - <id>"
  console.log("After removing Assinado eletronicamente por:", formattedText); // Debugging

  formattedText = formattedText.replace(/Documento assinado eletronicamente por .*?, em \d{2}\/\d{2}\/\d{4}, às \d{2}:\d{2}:\d{2} - \w{7}/gi, ''); // Remove "Documento assinado eletronicamente por <name>, em <date>, às <time> - <id>"
  console.log("After removing Documento assinado eletronicamente por:", formattedText); // Debugging

  formattedText = formattedText.replace(/ID\. \w{7,8} - Pág\. \d+/gi, ''); // Remove "ID. <id> - Pág. <number>"
  console.log("After removing ID and Pág:", formattedText); // Debugging

  formattedText = formattedText.replace(/Fls\.\:\s*\d+/gi, ''); // Remove "Fls.: <number>"
  console.log("After removing Fls:", formattedText); // Debugging

  formattedText = formattedText.replace(/\n/g, ' '); // Remove breaklines
  console.log("After removing breaklines:", formattedText); // Debugging

  formattedText = formattedText.replace(/^\s*[\r\n]+/gm, ''); // Remove blank lines
  console.log("After removing blank lines:", formattedText); // Debugging

  formattedText = formattedText.replace(/^\s*$/gm, ''); // Remove lines that are only whitespace
  console.log("After removing lines that are only whitespace:", formattedText); // Debugging

  formattedText = formattedText.replace(/\s+/g, ' ').trim(); // Remove any extra spaces left after replacements
  console.log("Final Formatted Text:", formattedText); // Debugging

  document.getElementById('outputText').value = formattedText;
}

function copyText() {
  let outputText = document.getElementById('outputText');
  outputText.select();
  outputText.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand('copy');
}