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
              value: "#00fff7",
            },
          },
          detectRetina: true,
          fpsLimit: 80,
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                mode: "trail",
                enable: true,
              },
            },
            modes: {
              trail: {
                delay: 0.005,
                quantity: 20,
                particles: {
                  color: {
                    value: "#ff0000",
                    animation: {
                      enable: true,
                      speed: 400,
                      sync: true,
                    },
                  },
                  collisions: {
                    enable: false,
                  },
                  links: {
                    enable: false,
                  },
                  move: {
                    outMode: "destroy",
                    speed: 5,
                  },
                  size: {
                    value: 5,
                    animation: {
                      enable: true,
                      speed: 5,
                      minimumValue: 1,
                      sync: true,
                      startValue: "min",
                      destroy: "max",
                    },
                  },
                },
              },
            },
            resize: true,
          },
          particles: {
            color: {
              animation: {
                enable: true,
                sync: false,
                speed: 80,
              },
              value: "#ff0000",
            },
            links: {
              color: "random",
              enable: true,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
            },
            number: {
              density: {
                enable: true,
              },
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.3,
                speed: 0.5,
              },
              value: 0.8,
              random: {
                enable: true,
                minimumValue: 0.3,
              },
            },
            size: {
              animation: {
                enable: true,
                minimumValue: 1,
                speed: 3,
              },
              value: 3,
              random: {
                enable: true,
                minimumValue: 1,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Particle;
