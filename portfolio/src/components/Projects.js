import React, { useState } from "react";
import Navbar from "./NavBar";
import "../css/Projects.css";
import ConnectOurKids from "./ConnectOurKids";
import PostHere from "./PostHere";

const Projects = () => {
  // projects state
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  // function to handle click and renders selected project
  const handleClick = (event) => {
    event.preventDefault();
    // console.log(event.target.id);
    // console.log(toggle1);
    // console.log(toggle2);
    // console.log(toggle3);
    // console.log(toggle4);

    if (event.target.id === "connect") {
      setToggle1(!toggle1);
    } else if (event.target.id === "post-here") {
      setToggle2(!toggle2);
    } else if (event.target.id === "guess-who") {
      setToggle3(!toggle3);
    } else if (event.target.id === "dev-desk-queue") {
      setToggle4(!toggle4);
    }
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
          <div
            className="hidden-message hidden-overlay"
            id="connect"
            onClick={handleClick}
          >
            <span>Click To Learn More!</span>
            {toggle1 === true ? <ConnectOurKids /> : null}
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
            onClick={handleClick}
          >
            <span>Click To Learn More!</span>
            {toggle2 === true ? <PostHere /> : null}
          </div>
        </div>
        <div className="card">
          <img
            className="project-image"
            src={require("../images/GuessWho.jpg")}
            alt={"Portfolio Image"}
          />
          <div
            className="hidden-message hidden-overlay"
            id="guess-who"
            onClick={handleClick}
          >
            <span>Click To Learn More!</span>
          </div>
        </div>
        <div className="card">
          <img
            className="project-image"
            src={require("../images/DevDeskQueue.jpg")}
            alt={"Portfolio Image"}
          />
          <div
            className="hidden-message hidden-overlay"
            id="dev-desk-queue"
            onClick={handleClick}
          >
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
