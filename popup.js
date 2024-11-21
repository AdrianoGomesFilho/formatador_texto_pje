document.addEventListener('DOMContentLoaded', function() {
  // Adicionar dois listeners somente após o conteúdo estar totalmente carregado (DOMContentLoaded)
  document.getElementById('inputText').addEventListener('input', function() {
    formatText();
  });

  document.getElementById('copyButton').addEventListener('click', function() {
    copyText();
  });
});

function formatText() {
  let inputText = document.getElementById('inputText').value;

  // Remove espaços extras
  let formattedText = inputText.replace(/\s+/g, ' ');

  // Remove "Número do processo: <número>"
  formattedText = formattedText.replace(/Número do processo:\s*\d{7}-\d{2}\.\d{4}\.\d{1,2}\.\d{2}\.\d{4}/gi, '');
 

  // Remove "Número do documento: <número>"
  formattedText = formattedText.replace(/Número do documento:\s*\d{29}/gi, '');


  // Remove URLs mesmo que façam parte de uma linha mais longa
  formattedText = formattedText.replace(/https:\/\/pje\.trt\d+\.jus\.br\/\w+\/Processo\/ConsultaDocumento\/listView\.seam\?nd=\d+/gi, '');

  // Remove "Assinado eletronicamente por: <nome> - <data> - <id>"
  formattedText = formattedText.replace(/Assinado eletronicamente por:.*? - \d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2} - \w{7}/gi, '');

  // Remove "Documento assinado eletronicamente por <nome>, em <data>, às <hora> - <id>"
  formattedText = formattedText.replace(/Documento assinado eletronicamente por .*?, em \d{2}\/\d{2}\/\d{4}, às \d{2}:\d{2}:\d{2} - \w{7}/gi, '');
  console.log

  // Remove "Documento assinado eletronicamente por <nome>, em <data>, às <hora> - <id> Fls.: <número>"
  formattedText = formattedText.replace(/Documento assinado eletronicamente por .*?, em \d{2}\/\d{2}\/\d{4}, às \d{2}:\d{2}:\d{2} - \w{7} Fls\.\: \d+/gi, '');

  // Remove "ID. <id> - Pág. <número>"
  formattedText = formattedText.replace(/ID\. \w{7,8} - Pág\. \d+/gi, '');

  // Remove "Fls.: <número>"
  formattedText = formattedText.replace(/Fls\.\:\s*\d+/gi, '');

  // Remove quebras de linha
  formattedText = formattedText.replace(/\n/g, ' ');

  // Remove linhas em branco
  formattedText = formattedText.replace(/^\s*[\r\n]+/gm, '');

  // Remove linhas que são apenas espaços em branco
  formattedText = formattedText.replace(/^\s*$/gm, '');

  // Remove quaisquer espaços extras restantes após as substituições
  formattedText = formattedText.replace(/\s+/g, ' ').trim();


  // Define o texto formatado no elemento de saída
  document.getElementById('outputText').value = formattedText;
}

// Função para copiar o texto formatado para a área de transferência
function copyText() {
  let outputText = document.getElementById('outputText');
  outputText.select();
  outputText.setSelectionRange(0, 99999); // Para dispositivos móveis
  document.execCommand('copy');
}