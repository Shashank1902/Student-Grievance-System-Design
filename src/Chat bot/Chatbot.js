import { useState } from "react";
import { greetings, weather } from "./chat";
const msgArray = [];
function Chatbot() {
  const [content, setContent] = useState("");

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recgnition = new SpeechRecognition();

  recgnition.onstart = () => {
    console.log("activted voice");
  };

  recgnition.onresult = (event) => {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    setContent(transcript);
    msgArray.push(transcript);
    console.log(msgArray);
    readOutLoud(transcript);
  };

  function startTalk() {
    recgnition.start();
  }

  function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance("No warning should arise");

    speech.text = "I don't know!!!";

    if (message.includes("how are you")) {
      const finalText = greetings[Math.floor(Math.random() * greetings.length)];

      speech.text = finalText;
    }
    if (message.includes("weather")) {
      const finalText = weather[Math.floor(Math.random() * weather.length)];

      speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  }

  return (
    <>
      <div>
        hello chatbot
        <br />
        <button onClick={startTalk}>Talk</button>
        {msgArray.map(msg=> (
            <p>{msg}</p>
        ))}
        <h3>{content}</h3>
      </div>
    </>
  );
}

export default Chatbot;
