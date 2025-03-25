import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import React from "react";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig: ISourceOptions = {
    autoPlay: true,
    background: { color: { value: "#000" } },
    fullScreen: { enable: true, zIndex: 0 },
    particles: {
      color: { value: "#fff" },
      move: {
        enable: true,
        speed: { min: 0.3, max: 0.7 },
        direction: "none",
        outModes: {
          default: "bounce",
          bottom: "destroy",
          top: "none"
        }
      },
      number: {
        value: 80,
        density: { enable: true, width: 1920, height: 1080 }
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: { enable: true, speed: 3 }
      },
      size: { value: { min: 0.5, max: 3 } },
      shape: { type: "circle" }
    },
    detectRetina: true
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />;
};

export default ParticlesBackground;