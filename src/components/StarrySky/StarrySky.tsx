import { useCallback } from "react";
import Particles from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import React from "react";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    autoPlay: true,
    background: {
      color: {
        value: '#fff',
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      events: {
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
    },
    particles: {
      color: {
        value: '#fff',
      },
      move: {
        enable: false,
      },
      number: {
        density: {
          enable: true,
          area: 1920,
        },
        value: 200,
      },
      opacity: {
        value: {
          min: 0.1,
          max: 1,
        },
        animation: {
          enable: true,
          speed: 0.25,
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: 1,
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
    />
  );
};

export default ParticlesBackground;
