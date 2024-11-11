//first npm install axios


//COPILOT CHAT
// To implement AI-based formatting in your extension, you can use a pre-trained language model like OpenAI's GPT-3. You can integrate it using the OpenAI API. Here is a basic example of how you can use the OpenAI API to format text in your extension.

// First, you need to install the axios library to make HTTP requests to the OpenAI API. You can do this by running the following command in your terminal:

// Next, update your popup.js file to include the AI-based formatting functionality:

// 1 vulnerability
// Make sure to replace YOUR_OPENAI_API_KEY with your actual OpenAI API key.

// This code will preprocess the text to remove unwanted strings and then call the OpenAI API to format the text into well-structured paragraphs. The formatted text will then be displayed in the output text area.

// Note: Ensure you handle the API key securely and avoid exposing it in your client-side code. For production use, consider implementing a backend service to handle API requests securely.

const axios = require('axios');

document.getElementById('formatButton').addEventListener('click', async function() {
    let inputText = document.getElementById('input').value;

    // Preprocess the text
    let formattedText = inputText
      .replace(/\s+/g, ' ') // Remove extra spaces
      .replace(/\n/g, ' ') // Remove breaklines
      .replace(/Documento assinado eletronicamente por.*? - \w{7}/g, '') // Remove specific string
      .replace(/Assinado eletronicamente por:.*? - \d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2} - \w{7}/g, '') // Remove entire sentence
      .replace(/QR Code para validação de documento.*? - \w{7}/g, '') // Remove QR Code validation string
      .replace(/Símbolo PJe QR Code para validação de documento/g, '') // Remove additional string
      .trim();

    // Call the OpenAI API for AI-based formatting
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: `Format the following text into well-structured paragraphs:\n\n${formattedText}`,
            max_tokens: 150,
            n: 1,
            stop: null,
            temperature: 0.7
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer YOUR_OPENAI_API_KEY`
            }
        });

        formattedText = response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
    }

    document.getElementById('output').value = formattedText;
});

