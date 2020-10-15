import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaToolbox, FaEnvelopeOpen } from "react-icons/fa";
import { IconContext } from "react-icons";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="icon-box">
          <IconContext.Provider value={{ className: "icons" }}>
            <FaHome />
          </IconContext.Provider>
          <Link to="/">
            <h2 className="navText">Home</h2>
          </Link>
        </li>
        <li className="icon-box">
          <IconContext.Provider value={{ className: "icons" }}>
            <FaUser />
          </IconContext.Provider>
          <Link to="/about">
            <h2 className="navText">About</h2>
          </Link>
        </li>
        <li className="icon-box">
          <IconContext.Provider value={{ className: "icons" }}>
            <FaToolbox />
          </IconContext.Provider>
          <Link to="/projects">
            <h2 className="navText">Projects</h2>
          </Link>
        </li>
        <li className="icon-box">
          <IconContext.Provider value={{ className: "icons" }}>
            <FaEnvelopeOpen />
          </IconContext.Provider>
          <Link to="/">
            <h2 className="navText">Contact</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
