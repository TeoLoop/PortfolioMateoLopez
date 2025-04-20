// src/components/ParticlesBackground.jsx
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
          zIndex: -1,
        },
        background: {
          color: {
            value: "#0d0d0d",
          },
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: { min: 1, max: 4 },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: "bounce",
          },
        },
      }}
    />
  );
};
