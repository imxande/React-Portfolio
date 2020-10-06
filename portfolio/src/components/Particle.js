import React from "react";
import Particles from "react-tsparticles";

const Particle = () => {
  return (
    <div>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 50,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "bubble",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              bubble: {
                opacity: 0.8,
                size: 10,
                color: {
                  value: "#ff0000",
                },
              },
            },
          },
          particles: {
            color: {
              value: "#000",
            },
            links: {
              color: {
                value: "#000",
              },
              enable: true,
              opacity: 0.5,
            },
            move: {
              enable: true,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 2,
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Particle;
