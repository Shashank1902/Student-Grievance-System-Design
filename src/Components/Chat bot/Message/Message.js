import "./message.css"

function Message({isClient, msg}) {
    console.log(isClient, msg);
    return(
        <>
        <div className={isClient ? "clientMsg" : "botMsg"}>
            <div className="msg-box">{msg}</div>
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