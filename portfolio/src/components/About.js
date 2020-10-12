import React from "react";
import Skills from "./Skills";
import NavBar from "./NavBar";
import "../css/About.css";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <div className="top-container">
        <h2>ABOUT ME</h2>
        <span>ALEJANDRO</span>
      </div>
      <div className="middle-container">
        <div className="left-container">
          <p>
            Hey, thank you for checking my about me section. So where should I
            start?, oh right, see my passion for software development started
            from my early ages. I was introduced to computers back when I was a
            little kid and since then I have always been curious about how
            everything works. I remember disassembling my first computer and
            showing everyone the extra pieces that I still had in my hands even
            after attempting to rebuild it. My computer never worked again but
            it fired the passion in me to fix problems. Today, I use my software
            developer skills to solve problems. I am always looking to enrich
            the user interactions with the software. I love writing computer
            programs and
            <span> Lambda School</span> has solidified and polished my
            programing skills. I thrive to keep learning new technologies, build
            more computer programs and always write much more source code.
          </p>
        </div>
        <div className="right-container">
          <div className="left-side">
            <ul>
              <li>
                <span>First Name:</span>
                <span> Alejandro</span>
              </li>
              <li>
                <span>Middle Name:</span>
                <span> Emilio</span>
              </li>
              <li>
                <span>Last Name:</span>
                <span> Rodriguez La Rosa</span>
              </li>
              <li>
                <span>Email:</span>
                <span> alerodriguezlarosa@gmail.com</span>
              </li>
              <li>
                <span>Address:</span>
                <span> Lynchburg, VA</span>
              </li>
              <li>
                <span>Languages:</span>
                <span> English, Spanish</span>
              </li>
            </ul>
          </div>
          <div className="right-side">
            <ul>
              <li>
                <IconContext.Provider
                  value={{ className: "aboutIcon linkedin" }}
                >
                  <FaLinkedin />
                </IconContext.Provider>
                <a href="https://www.linkedin.com/in/alejandro-e-rodriguez/">
                  LinkedIn
                </a>
              </li>
              <li>
                <IconContext.Provider value={{ className: "aboutIcon github" }}>
                  <FaGithub />
                </IconContext.Provider>
                <a href="https://github.com/imxande">Github</a>
              </li>
              <li>
                <IconContext.Provider
                  value={{ className: "aboutIcon twitter" }}
                >
                  <FaTwitter />
                </IconContext.Provider>
                <a href="https://twitter.com/ale_rodriguez91">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom-container">
        <h2>MY SKILLS</h2>
        <Skills />
      </div>
      <div className="navigation">
        <NavBar />
      </div>
    </div>
  );
};

export default About;
