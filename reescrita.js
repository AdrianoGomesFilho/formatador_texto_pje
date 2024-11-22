document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inputText').addEventListener('input',
    function() {
        formatText();
    });

    document.getElementById('copyButton').addEventListener('click',
    function() {
        copyText();
    });
});

function formatText() {
    let inputText = document.getElementById('inputText').value;

    let formattedText = inputText.replace(/\s+/g, ' ');

    formattedText = formattedText.replace(/Número do processo:\s*\d{7}-\d{2}\.\d{4}\.\d{1,2}\.\d{2}\.\d{4}/gi, '');

    formattedText = formattedText.replace(/Número do documento:\s*\d{29}/gi, '')

    formattedText = formattedText.replace(/https:\/\/pje\.trt\d+\.jus\.br\/\w+\/Processo\/ConsultaDocumento\/listView\.seam\?nd=\d+/gi, '');

    formattedText = formattedText.replace(/Assinado eletronicamente por:.*? - \d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2} - \w{7}/gi, '');

    formattedText = formattedText.replace(/Documento assinado eletronicamente por .*?, em \d{2}\/d{2}\/\d{4}, às \d{2}:\d{2}:\d{2} - \w{7}/gi, '');
    
    formattedText = formatText.replace(/ID\. \w{7,8} - Pág\. \d+/gi, '');

    formattedText = formattedText.replace(/Fls\.\:\s*\d+/gi, '');

    formattedText = formattedText.replace(/\n/g, ' ')

    formattedText=  formattedText.replace(/^\s*[\r\n]+/gm, '');
}