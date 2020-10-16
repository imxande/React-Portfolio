import React from "react";
import Navbar from "./NavBar";
import "../css/Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="top-container">
        <h2>PROJECTS</h2>
        <span>MY WORK</span>
      </div>
      <div className="projects-gallery">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
      <div className="navigation">
        <Navbar />
      </div>
    </div>
  );
};

export default Projects;
