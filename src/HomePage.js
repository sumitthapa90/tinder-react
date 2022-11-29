import React from "react";
import "./homepage.css";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="tinder-homepage">
      <div className="lolo-div">
        <div className="logo-sec">
          <ElectricBoltIcon className="logo-sing" fontSize="large" />
          <h1>Flasher</h1>
        </div>
        <strong className="tagLine">Connect where you want ...</strong>
      </div>

      <div className="text-box">
        <h2>
          Go on <br /> Your First Date
        </h2>
        <h4 className="connect-line">Connect with people you know But Havent meet yet</h4>
      </div>

      <div className="submit-btn">
        <NavLink to="/tcards" className="text-deco">
          <Button variant="contained" color="success" className="mu-btn">
            Explore
          </Button>
        </NavLink>

        <NavLink to="/login" className="text-deco">
          <Button variant="contained" color="success" className="mu-btn">
            login
          </Button>
        </NavLink>

        <NavLink to="/singup" className="text-deco">
          <Button variant="contained" color="success" className="mu-btn">
            Singup
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
