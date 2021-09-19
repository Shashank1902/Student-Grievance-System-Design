import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./chatbot.css";
import Message from "./Message/Message";

function Chatbot() {
  const [botMsg, setBotMsg] = useState("");
  const [clientMsg, setClientMsg] = useState("");
  const [messages, setMessages] = useState([]);

  const message = useRef();

  const handleClientMsg = function() {
    setClientMsg(message.current.value);
    messages.push({isClient: true, msgTxt: message.current.value});
    console.log(messages);
    console.log(clientMsg);
  }

  const handleClick = function (e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/chatbot", { message: message.current.value })
      .then((response) => {
        console.log(response.data);
        messages.push({isClient: false, msgTxt: response.data});
        setBotMsg(response.data);
      });
  };

  const messageEl = useRef(null);

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  return (
    <>
      <div className="chatbot-container">
        <div className="chatbot-top">
          <img className="chatbot-avatar-img" src="assets/chatbot-avatar.png" alt=""/>
        </div>

        <div className="message-container" ref={messageEl}>
          {messages.map((clientMessage, i) => (<Message key={i} isClient={clientMessage.isClient} msg={clientMessage.msgTxt}/>))}
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
