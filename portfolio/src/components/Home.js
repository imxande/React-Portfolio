import React from "react";
import ale_image from "../images/ale_profile.jpeg";
import NavBar from "./NavBar";
import Particle from "./Particle";
import { IconContext } from "react-icons";
import { FaFileDownload } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="hero-image">
          <span>
            <img
              src={ale_image}
              alt="Alejandro E. Rodriguez, sitting at Liberty University computer lab"
            />
          </span>
        </div>
        <div className="greeting">
          <h3>Hi friends!</h3>
          <h1>I'm Alejandro E. Rodriguez La Rosa</h1>
          <p>
            I am a Full Stack Web Developer. I live in North Carolina and I am
            willing to relocate. As a developer I create responsive, accessible
            functional websites and applications. I have always been curious
            about how everything works.
          </p>
          <a
            class="download"
            href={
              "https://drive.google.com/file/d/1kELm2dyI9xNN3Kh0eJJ1HlUH7_L8oy1v/view?usp=sharing"
            }
            download
          >
            <span>Download Resume</span>
            <IconContext.Provider value={{ className: "downloadIcon" }}>
              <FaFileDownload />
            </IconContext.Provider>
          </a>
        </div>
        <div className="navigation">
          <NavBar />
        </div>
      </div>
      <div className="particles">
        <Particle />
      </div>
    </div>
  );
};

export default Home;
