import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaToolbox, FaEnvelopeOpen } from "react-icons/fa";
import { IconContext } from "react-icons";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">
            <IconContext.Provider value={{ className: "icons" }}>
              <FaHome />
            </IconContext.Provider>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <IconContext.Provider value={{ className: "icons" }}>
              <FaUser />
            </IconContext.Provider>
          </Link>
        </li>
        <li>
          <Link to="/">
            <IconContext.Provider value={{ className: "icons" }}>
              <FaToolbox />
            </IconContext.Provider>
          </Link>
        </li>
        <li>
          <Link to="/">
            <IconContext.Provider value={{ className: "icons" }}>
              <FaEnvelopeOpen />
            </IconContext.Provider>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
