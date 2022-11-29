import React from "react";
import "./swipebutton.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import IconButton from "@mui/material/IconButton";

function SwipeButton() {
  return (
    <div className="swipeButton">
      <IconButton>
        <ReplayRoundedIcon fontSize="large" style={{ color: "orange" }} />
      </IconButton>

      <IconButton>
        <CloseRoundedIcon fontSize="large" style={{ color: "red" }} />
      </IconButton>

      <IconButton>
        <StarRateRoundedIcon fontSize="large" style={{ color: "teal" }} />
      </IconButton>

      <IconButton>
        <FavoriteRoundedIcon fontSize="large" style={{ color: "aqua" }} />
      </IconButton>

      <IconButton>
        <BoltRoundedIcon fontSize="large" style={{ color: "darkmagenta" }} />
      </IconButton>
    </div>
  );
}

export default SwipeButton;
