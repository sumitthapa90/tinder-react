import React from "react";
import Chat from "./Chat";
import "./chatmessage.css";

function ChatMessage() {
  return (
    <div className="chat-box">
      <Chat
        name="sumit"
        message="whats up and how are you boy gvagvdjhbasbdiba"
        profilePik="./image/profile.jpg"
        timestamp="35 min ago"
      />
      <Chat
        name="kabir"
        message="yes i am from london"
        profilePik="./image/2.jpg"
        timestamp="38 min ago"
      />
      <Chat
        name="ram"
        message="i love to code alone"
        profilePik="./image/3.jpg"
        timestamp="20 min ago"
      />
      <Chat
        name="sonali"
        message="Hello boy how are you"
        profilePik="./image/5.jpeg"
        timestamp="65 min ago"
      />
      <Chat
        name="sumit"
        message="whats up"
        profilePik="./image/7.jpg"
        timestamp="54 min ago"
      />
    </div>
  );
}

export default ChatMessage;
