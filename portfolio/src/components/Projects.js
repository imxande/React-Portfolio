import React, { useState } from "react";
import Navbar from "./NavBar";
import "../css/Projects.css";
import ConnectOurKids from "./ConnectOurKids";

const Projects = () => {
  // projects state
  const [toggle, setToggle] = useState(false);

  // function to handle click and renders selected project
  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    console.log(toggle);

    if (event.target.id === "connect") {
      let project = <ConnectOurKids />;
      setToggle(true);
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
            {toggle === true ? <ConnectOurKids /> : null}
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
