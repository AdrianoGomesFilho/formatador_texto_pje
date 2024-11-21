document.addEventListener('DOMContentLoaded', function() {
  // Adiciona um ouvinte de eventos ao elemento de entrada para formatar o texto ao digitar
  document.getElementById('inputText').addEventListener('input', function() {
    formatText();
  });

  // Adiciona um ouvinte de eventos ao botão para copiar o texto ao clicar
  document.getElementById('copyButton').addEventListener('click', function() {
    copyText();
  });
});

// Função para formatar o texto de entrada
function formatText() {
  let inputText = document.getElementById('inputText').value;
  console.log("Entrada Original:", inputText); // Depuração

  // Remove espaços extras
  let formattedText = inputText.replace(/\s+/g, ' ');
  console.log("Após remover espaços extras:", formattedText); // Depuração

  // Remove "Número do processo: <número>"
  formattedText = formattedText.replace(/Número do processo:\s*\d{7}-\d{2}\.\d{4}\.\d{1,2}\.\d{2}\.\d{4}/gi, '');
  console.log("Após remover Número do processo:", formattedText); // Depuração

  // Remove "Número do documento: <número>"
  formattedText = formattedText.replace(/Número do documento:\s*\d{29}/gi, '');
  console.log("Após remover Número do documento:", formattedText); // Depuração

  // Remove URLs mesmo que façam parte de uma linha mais longa
  formattedText = formattedText.replace(/https:\/\/pje\.trt\d+\.jus\.br\/\w+\/Processo\/ConsultaDocumento\/listView\.seam\?nd=\d+/gi, '');
  console.log("Após remover URLs:", formattedText); // Depuração

  // Remove "Assinado eletronicamente por: <nome> - <data> - <id>"
  formattedText = formattedText.replace(/Assinado eletronicamente por:.*? - \d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2} - \w{7}/gi, '');
  console.log("Após remover Assinado eletronicamente por:", formattedText); // Depuração

  // Remove "Documento assinado eletronicamente por <nome>, em <data>, às <hora> - <id>"
  formattedText = formattedText.replace(/Documento assinado eletronicamente por .*?, em \d{2}\/\d{2}\/\d{4}, às \d{2}:\d{2}:\d{2} - \w{7}/gi, '');
  console.log("Após remover Documento assinado eletronicamente por:", formattedText); // Depuração

  // Remove "Documento assinado eletronicamente por <nome>, em <data>, às <hora> - <id> Fls.: <número>"
  formattedText = formattedText.replace(/Documento assinado eletronicamente por .*?, em \d{2}\/\d{2}\/\d{4}, às \d{2}:\d{2}:\d{2} - \w{7} Fls\.\: \d+/gi, '');
  console.log("Após remover Documento assinado eletronicamente por com Fls:", formattedText); // Depuração

  // Remove "ID. <id> - Pág. <número>"
  formattedText = formattedText.replace(/ID\. \w{7,8} - Pág\. \d+/gi, '');
  console.log("Após remover ID e Pág:", formattedText); // Depuração

  // Remove "Fls.: <número>"
  formattedText = formattedText.replace(/Fls\.\:\s*\d+/gi, '');
  console.log("Após remover Fls:", formattedText); // Depuração

  // Remove quebras de linha
  formattedText = formattedText.replace(/\n/g, ' ');
  console.log("Após remover quebras de linha:", formattedText); // Depuração

  // Remove linhas em branco
  formattedText = formattedText.replace(/^\s*[\r\n]+/gm, '');
  console.log("Após remover linhas em branco:", formattedText); // Depuração

  // Remove linhas que são apenas espaços em branco
  formattedText = formattedText.replace(/^\s*$/gm, '');
  console.log("Após remover linhas que são apenas espaços em branco:", formattedText); // Depuração

  // Remove quaisquer espaços extras restantes após as substituições
  formattedText = formattedText.replace(/\s+/g, ' ').trim();
  console.log("Texto Formatado Final:", formattedText); // Depuração

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