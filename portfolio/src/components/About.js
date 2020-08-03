import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="about">
      <div className="top-container">
        <h2>
          About <span>ME</span>
        </h2>
        <span>Alejandro E. Rodriguez La Rosa</span>
      </div>
      <div className="middle-container">
        <p>
          Hey, thank you for checking my about me section. So where should I
          start?, oh right, see my passion for software development started from
          my early ages. I was introduced to computers back when I was a little
          kid and since then I have always been curious about how everything
          works. I remember disassembling my first computer and showing everyone
          the extra pieces that I still had in my hands even after attempting to
          rebuild it. My computer never worked again but it fired the passion in
          me to fix problems. Today, I use my software developer skills to solve
          problems. I am always looking to enrich the user interactions with the
          software. I love writing computer programs and
          <span>Lambda School</span> has solidified and polished my programing
          skills. I thrive to keep learning new technologies, build more
          computer programs and always write much more source code.
        </p>
      </div>
      <div className="bottom-container">
        <Skills />
      </div>
    </div>
  );
};

export default About;
