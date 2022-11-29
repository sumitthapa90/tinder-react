import React, { useState } from "react";
import "./chatscreen.css";
import Avatar from "@mui/material/Avatar";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([
    {
      name: "sonali",
      message: "How are you ",
      image: "./image/2.jpg",
    },
    {
      name: "sid",
      message: "i am fine ",
      image: "./image/3.jpg",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage([...message, { message: input }]);
    setInput("");
  };
  return (
    <>
      <div className="chat-screen">
        <h3 className="chatscreen-h3">You matched with sumit on 10/10/2023</h3>
        {message.map((msg) => {
          return (
            <div className="msg-box">
              <Avatar alt={msg.name} src={msg.image} />
              <p className="chatscreen-text">{msg.message}</p>
            </div>
          );
        })}

        <div className="inputContainer">
          <form>
            <input
              type="text"
              className="chatscreen-inputField"
              placeholder="Type..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSubmit} className="submit-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChatScreen;
