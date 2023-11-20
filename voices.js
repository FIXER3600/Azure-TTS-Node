const axios = require('axios');

const subscriptionKey = "9f751503028247d8bd7f5c432c04162a";
const serviceRegion = "brazilsouth";

const endpoint = `https://${serviceRegion}.tts.speech.microsoft.com/cognitiveservices/voices/list`;

const headers = {
  'Authorization': `Bearer ${subscriptionKey}`
};

axios.get(endpoint, { headers })
  .then(response => {
    const voices = response.data;
    console.log("Vozes disponíveis:");
    for (const voice of voices) {
      console.log(`- Nome: ${voice.Name}, Idioma: ${voice.Locale}, Estilo de Fala: ${voice.VoiceType}`);
    }
  })
  .catch(error => {
    console.error("Erro ao obter a lista de vozes:", error);
  });
