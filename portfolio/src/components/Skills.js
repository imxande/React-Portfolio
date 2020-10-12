import React from "react";
import "../css/Skills.css";
import { IconContext } from "react-icons";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNode,
  FaPython,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div className="skills-container">
      <div class="icons-container">
        <IconContext.Provider value={{ className: "skill-icons" }}>
          <FaHtml5 />
        </IconContext.Provider>
        <h3>HTML5</h3>
      </div>
      <div class="icons-container">
        <IconContext.Provider value={{ className: "skill-icons" }}>
          <FaCss3Alt />
        </IconContext.Provider>
        <h3>CSS3</h3>
      </div>
      <div class="icons-container">
        <IconContext.Provider value={{ className: "skill-icons" }}>
          <FaJsSquare />
        </IconContext.Provider>
        <h3>JavaScript</h3>
      </div>
      <div class="icons-container">
        <IconContext.Provider value={{ className: "skill-icons" }}>
          <FaReact />
        </IconContext.Provider>
        <h3>REACT</h3>
      </div>
      <div class="icons-container">
        <IconContext.Provider value={{ className: "skill-icons" }}>
          <FaNode />
        </IconContext.Provider>
        <h3>NODE</h3>
      </div>
      <div class="icons-container">
        <IconContext.Provider value={{ className: "skill-icons" }}>
          <FaPython />
        </IconContext.Provider>
        <h3>PYTHON</h3>
      </div>
    </div>
  );
};

export default Skills;
