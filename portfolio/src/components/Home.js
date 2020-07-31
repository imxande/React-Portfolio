import React from "react";
import ale_image from "../images/ale_profile.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="image">
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
          I am a Full Stack Web Developer. I live in North Carolina. As a
          developer I create responsive, accessible functional websites and
          applications. I am curious about how everything works. Always willing
          to relocate.
        </p>
      </div>
    </div>
  );
};

export default Home;
