import React, { useState } from "react";
import Navbar from "./NavBar";
import "../css/Projects.css";
import ConnectOurKids from "./ConnectOurKids";
import PostHere from "./PostHere";
import useModal from "../helpers/useModal";

const Projects = () => {
  const { isShowing1, isShowing2, toggle1, toggle2 } = useModal();
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
          <div
            className="hidden-message hidden-overlay"
            id="connect"
            onClick={toggle1}
          >
            <span>Click To Learn More!</span>
            <ConnectOurKids isShowing1={isShowing1} hide={toggle1} />
          </div>
        </div>
        <div className="card">
          <img
            className="project-image"
            src={require("../images/PostHere.jpg")}
            alt={"Portfolio Image"}
          />
          <div
            className="hidden-message hidden-overlay"
            id="post-here"
            onClick={toggle2}
          >
            <span>Click To Learn More!</span>
            <PostHere isShowing2={isShowing2} hide={toggle2} />
          </div>
        </div>
        <div className="card">
          <img
            className="project-image"
            src={require("../images/GuessWho.jpg")}
            alt={"Portfolio Image"}
          />
          <div className="hidden-message hidden-overlay" id="guess-who">
            <span>Click To Learn More!</span>
          </div>
        </div>
        <div className="card">
          <img
            className="project-image"
            src={require("../images/DevDeskQueue.jpg")}
            alt={"Portfolio Image"}
          />
          <div className="hidden-message hidden-overlay" id="dev-desk-queue">
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
