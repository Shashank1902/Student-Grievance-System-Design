import "./message.css"

function Message({client, botMsg, clientMsg}) {
    console.log(client, botMsg, clientMsg);
    return(
        <>
        <div className={client ? "clientMsg" : "botMsg" }>
            <div className="msg-box">{client ? clientMsg : botMsg}</div>
            <img
              className="message-avatar"
              src="assets/chatbot-avatar.png"
              alt=""
            />
          </div>
        </>
    )
}

export default Message;