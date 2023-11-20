const sdk = require("microsoft-cognitiveservices-speech-sdk");
const subscriptionKey = "9f751503028247d8bd7f5c432c04162a";
const serviceRegion = "brazilsouth"; 

const speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);

const audioConfig = sdk.AudioConfig.fromAudioFileOutput("resultado.wav"); 

const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

const texto = `Isto é um exemplo de texto com SSML no serviço de TTS da Azure.
Você pode ajustar a entonação, o volume e muito mais usando SSML.`;

synthesizer.speakTextAsync(
  texto,
  (result) => {
    if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
      console.log("Fala gerada com sucesso.");
    } else {
      console.error(`Erro ao gerar fala: ${result.reason}`);
    }
    synthesizer.close();
  },
  (error) => {
    console.error(`Erro durante a síntese de fala: ${error}`);
    synthesizer.close();
  }
);
