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
        <ul>
          <li>
            <img src="../images/Connect.jpg" alt="Portolio Image" />
          </li>
          <li>
            <img src="../images/PostHere.jpg" alt="Portolio Image" />
          </li>
          <li>
            <img src="../images/guesswho.jpg" alt="Portolio Image" />
          </li>
          <li>
            <img src="../images/DevDeskQueue.jpg" alt="Portolio Image" />
          </li>
        </ul>
      </div>
      <div className="navigation">
        <Navbar />
      </div>
    </div>
  );
};

export default Projects;
