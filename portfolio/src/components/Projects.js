import React, { useState } from "react";
import Navbar from "./NavBar";
import "../css/Projects.css";
import ConnectOurKids from "./ConnectOurKids";

const Projects = () => {
  // function to handle click and renders selected project
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Span click");
  };

  return (
    <div className="projects-container">
      <div className="top-container">
        <h2>PROJECTS</h2>
        <span>MY WORK</span>
      </div>
      <div className="projects-gallery">
        <div className="card">
          <img
            className="project-image"
            src={require("../images/Connect.jpg")}
            alt={"Portfolio Image"}
          />
          <div className="hidden-message hidden-overlay" onClick={handleClick}>
            <span>Click To Learn More!</span>
          </div>
        </div>
        <div className="card">
          <img
            className="project-image"
            src={require("../images/PostHere.jpg")}
            alt={"Portfolio Image"}
          />
          <div className="hidden-message hidden-overlay">
            <span>Click To Learn More!</span>
          </div>
        </div>
        <div className="card">
          <img
            className="project-image"
            src={require("../images/GuessWho.jpg")}
            alt={"Portfolio Image"}
          />
          <div className="hidden-message hidden-overlay">
            <span>Click To Learn More!</span>
          </div>
        </div>
        <div className="card">
          <img
            className="project-image"
            src={require("../images/DevDeskQueue.jpg")}
            alt={"Portfolio Image"}
          />
          <div className="hidden-message hidden-overlay">
            <span>Click To Learn More!</span>
          </div>
        </div>
      </div>
      <div className="navigation">
        <Navbar />
      </div>
    </div>
  );
};

export default Projects;
