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
  let formattedText = inputText;

  const patternsToRemove = [
    // Remove extra spaces
    { pattern: /\s+/g, replacement: ' ' },
    // Remove "Número do processo: <número>"
    { pattern: /Número do processo:\s*\d{7}-\d{2}\.\d{4}\.\d{1,2}\.\d{2}\.\d{4}/gi, replacement: '' },
    // Remove "Número do documento: <número>"
    { pattern: /Número do documento:\s*\d{29}/gi, replacement: '' },
    // Remove URLs
    { pattern: /https:\/\/pje\.trt\d+\.jus\.br\/\w+\/Processo\/ConsultaDocumento\/listView\.seam\?nd=\d+/gi, replacement: '' },
    // Remove URLs matching "https://pje.trt1.jus.br/pjekz/validacao/235?instancia=1"
    { pattern: /https:\/\/pje\.trt\d+\.jus\.br\/pjekz\/validacao\/\d+\?instancia=\d+/gi, replacement: '' },
    // Remove URLs matching "https://pje.tst.jus.br/tst/Processo/ConsultaDocumento/listView.seam?nd=<number>"
    { pattern: /https:\/\/pje\.tst\.jus\.br\/tst\/Processo\/ConsultaDocumento\/listView\.seam\?nd=\d+/gi, replacement: '' },
    // Remove "Assinado eletronicamente por: <nome> - <data> - <id>"
    { pattern: /Assinado eletronicamente por:.*? - \d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2} - \w{7}/gi, replacement: '' },
    // Remove "Assinado eletronicamente por: <nome> - Juntado em: <data> <hora> - <id>"
    { pattern: /Assinado eletronicamente por: .*? - Juntado em: \d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2} - \w{7}/gi, replacement: '' },
    // Remove "Documento assinado eletronicamente por <nome>, em <data>, às <hora> - <id>"
    { pattern: /Documento assinado eletronicamente por .*?, em \d{2}\/\d{2}\/\d{4}, às \d{2}:\d{2}:\d{2} - \w{7}/gi, replacement: '' },
    // Remove "Documento assinado eletronicamente por <nome>, em <data>, às <hora> - <id> Fls.: <número>"
    { pattern: /Documento assinado eletronicamente por .*?, em \d{2}\/\d{2}\/\d{4}, às \d{2}:\d{2}:\d{2} - \w{7} Fls\.\: \d+/gi, replacement: '' },
    // Remove "ID. <id> - Pág. <número>"
    { pattern: /ID\. \w{7,8} - Pág\. \d+/gi, replacement: '' },
    // Remove "Fls.: <número>"
    { pattern: /Fls\.\:\s*\d+/gi, replacement: '' },
    // Remove "Firmado por assinatura digital em <data> pelo sistema AssineJus da Justiça do Trabalho, conforme MP 2.200-2/2001, que instituiu a Infra-Estrutura de Chaves Públicas Brasileira."
    { pattern: /Firmado por assinatura digital em \d{2}\/\d{2}\/\d{4} pelo sistema AssineJus da Justiça do Trabalho, conforme MP 2\.200-2\/2001, que instituiu a Infra-Estrutura de Chaves Públicas Brasileira\./gi, replacement: '' },
    // Remove line breaks
    { pattern: /\n/g, replacement: ' ' },
    // Remove blank lines
    { pattern: /^\s*[\r\n]+/gm, replacement: '' },
    // Remove lines that are only whitespace
    { pattern: /^\s*$/gm, replacement: '' },
    // Remove any remaining extra spaces
    { pattern: /\s+/g, replacement: ' ' }
  ];

  patternsToRemove.forEach(({ pattern, replacement }) => {
    formattedText = formattedText.replace(pattern, replacement);
  });

  formattedText = formattedText.trim();
  document.getElementById('outputText').value = formattedText;
}

// Função para copiar o texto formatado para a área de transferência
function copyText() {
  let outputText = document.getElementById('outputText');
  navigator.clipboard.writeText(outputText.value);
}