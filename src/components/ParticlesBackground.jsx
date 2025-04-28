import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import '../styles/ParticlesBackground.css';

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // Carga solo lo necesario
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#0f0f0f",
        },
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#00df9a",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: { min: 1, max: 5 },
          },
          move: {
            enable: true,
            speed: 1.5,
            outModes: {
              default: "bounce",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
