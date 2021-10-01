import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./chatbot.css";
import Message from "./Message/Message";

function Chatbot() {
  const [botMsg, setBotMsg] = useState("");
  const [clientMsg, setClientMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState("");

  const message = useRef();

  const handleClientMsg = () => {
    setClientMsg(message.current.value);
    messages.push({ isClient: true, msgTxt: message.current.value });
    console.log(messages);
    console.log(clientMsg);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setInputMsg("");
    axios
      .post("https://sgsapi.herokuapp.com/chatbot", { message: message.current.value })
      .then((response) => {
        console.log(response.data);
        messages.push({ isClient: false, msgTxt: response.data });
        setBotMsg(response.data);
      });
  };

  const messageEl = useRef(null);
  const chatbotContainer = useRef(null);
  const botBtn = useRef(null);

  useEffect(() => {
    let flag = 0;
    botBtn.current.onclick = () => {
      if (flag === 0) {
        chatbotContainer.current.style.bottom = "10px";
        flag = 1;
      } else if (flag === 1) {
        chatbotContainer.current.style.bottom = "-410px";
        flag = 0;
      }
    };

    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  return (
    <>
      <div ref={botBtn} className="bot-btn">
        <img className="bot-btn-img" src="assets/chatbot-avatar.png" alt="" />
      </div>
      <div ref={chatbotContainer} className="chatbot-container">
        <div className="chatbot-top">
          <img
            className="chatbot-avatar-img"
            src="assets/chatbot-avatar.png"
            alt=""
          />
        </div>

        <div className="message-container" ref={messageEl}>
          {messages.map((clientMessage, i) => (
            <Message
              key={i}
              isClient={clientMessage.isClient}
              msg={clientMessage.msgTxt}
            />
          ))}
        </div>
        <form onSubmit={handleClick}>
          <div className="input-container">
            <input
              id="inputMsgForm"
              className="message-input"
              type="text"
              placeholder="Type your message here"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              ref={message}
            />
            <span className="input-mic">
              <i className="fas fa-microphone"></i>
            </span>
            <button
              className="submit-button"
              onClick={handleClientMsg}
              type="submit"
            >
              <i className="fas fa-angle-double-right"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Chatbot;
