import React from "react";
import "./header.css";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import IconButton from "@mui/material/IconButton";
import { NavLink, useHistory } from "react-router-dom";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="app-header">
      <div className="header-container">
        {backButton ? (
          <IconButton onClick={() => history.push("/tcards")}>
            <ArrowBackIosNewRoundedIcon
              className="header-icon"
              fontSize="large"
            />
          </IconButton>
        ) : (
          <NavLink to="/">
            <IconButton>
              <PersonIcon className="header-icon" fontSize="large" />
            </IconButton>
          </NavLink>
        )}

        <NavLink to="/tcards">
          <IconButton>
            <img
              className="header-logo"
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tinder-icon.png"
              alt=""
            />
          </IconButton>
        </NavLink>

        <NavLink to="/chat-message">
          <IconButton>
            <MessageIcon className="header-icon" fontSize="large" />
          </IconButton>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
