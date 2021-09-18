import { useState, useRef } from "react";
import axios from "axios";
// import {greetings, weather} from "./chat";
import "./chatbot.css";

// var msg = [];

function Chatbot() {
  const [content, setContent] = useState("");

  // fetch("http://localhost:3000/chatbot")
  //   .then((res) => res.json())
  //   .then((result) => {
  //     console.log(result);
  //   });

  // const SpeechRecognition =
  //   window.SpeechRecognition || window.webkitSpeechRecognition;
  // const recgnition = new SpeechRecognition();

  // recgnition.onstart = () => {
  //   console.log("activted voice");
  // };

  // recgnition.onresult = (event) => {
  //   const current = event.resultIndex;

  //   const transcript = event.results[current][0].transcript;
  //   setContent(transcript);
  //   msgArray.push(transcript);
  //   console.log(msgArray);
  //   readOutLoud(transcript);
  // };

  // function startTalk() {
  //   recgnition.start();
  // }

  // function readOutLoud(message) {
  //   const speech = new SpeechSynthesisUtterance("No warning should arise");

  //   speech.text = "I don't know!!!";

  //   if (message.includes("how are you")) {
  //     const finalText = greetings[Math.floor(Math.random() * greetings.length)];

  //     speech.text = finalText;
  //   }
  //   if (message.includes("weather")) {
  //     const finalText = weather[Math.floor(Math.random() * weather.length)];

  //     speech.text = finalText;
  //   }

  //   speech.volume = 1;
  //   speech.rate = 1;
  //   speech.pitch = 1;
  //   window.speechSynthesis.speak(speech);
  // }
  const message = useRef();
  const handleClick = function (e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/chatbot", { message: message.current.value })
      .then((response) => {
        console.log(response.data);
        setContent(response.data);
      });

    console.log(message.current.value);
  };

  return (
    <>
      <div className="chatbot-container">
        <div className="chatbot-top">
          <img
            className="chatbot-avatar-img"
            src="assets/chatbot-avatar.png"
            alt=""
            srcset=""
          />
        </div>
        {/* <button onClick={startTalk}>Talk</button> */}
        {/* {msgArray.map(msg=> (
            <p>{msg}</p>
        ))} */}
        <div className="message-container">
          <div className="client-msg">
            <div className="msg-box">Hello</div>
            <img
              className="message-avatar"
              src="assets/chatbot-avatar.png"
              alt=""
            />
          </div>
          <div className="bot-msg">
            <img
              className="message-avatar"
              src="assets/chatbot-avatar.png"
              alt=""
            />
            <div className="msg-box">Hello Human</div>
          </div>
          <div className="bot-msg">
            <img
              className="message-avatar"
              src="assets/chatbot-avatar.png"
              alt=""
            />
            <div className="msg-box">{content}</div>
          </div>
        </div>
        <form onSubmit={handleClick}>
          <div className="input-container">
            <input
              className="message-input"
              type="text"
              placeholder="Type your message here"
              ref={message}
            />
            <button className="submit-button" type="submit"></button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Chatbot;
