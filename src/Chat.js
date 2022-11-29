import React from "react";
import Avatar from "@mui/material/Avatar";
import "./chat.css";
import { NavLink } from "react-router-dom";

function Chat({ name, message, profilePik, timestamp }) {
  return (
    <div className="chat">
      <NavLink to="/chat-message/:people">
        <Avatar
          alt={name}
          src={profilePik}
          className="avatar-img"
          fontSize="large"
        />
      </NavLink>

      <div className="chat-info">
        <h5>{name}</h5>
        <p>{message}</p>
      </div>

      <p>{timestamp}</p>
    </div>
  );
}

export default Chat;
