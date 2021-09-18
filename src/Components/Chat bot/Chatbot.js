import { useState, useRef } from "react";
import axios from "axios";
import "./chatbot.css";
import Message from "./Message/Message";

function Chatbot() {
  const [botMsg, setBotMsg] = useState("");
  const [clientMsg, setClientMsg] = useState("");

  const message = useRef();

  const handleClientMsg = function() {
    setClientMsg(message.current.value);
    console.log(clientMsg);
  }

  const handleClick = function (e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/chatbot", { message: message.current.value })
      .then((response) => {
        console.log(response.data);
        setBotMsg(response.data);
      });

    console.log(message.current.value);
  };

  return (
    <>
      <div className="chatbot-container">
        <div className="chatbot-top">
          <img className="chatbot-avatar-img" src="assets/chatbot-avatar.png" alt=""/>
        </div>

        <div className="message-container">
          <Message client={1} clientMsg={clientMsg}/>
          <Message client={0} botMsg={botMsg}/>
        </div>
        <form onSubmit={handleClick}>
          <div className="input-container">
            <input
              className="message-input"
              type="text"
              placeholder="Type your message here"
              ref={message}
            />
            <button className="submit-button" onClick={handleClientMsg} type="submit"></button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Chatbot;
