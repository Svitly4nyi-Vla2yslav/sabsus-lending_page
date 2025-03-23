import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { gsap } from "gsap";
import styled from "styled-components";
import React from "react";

// Styled components
const SkyContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: black;
  overflow: hidden;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: linear-gradient(to bottom, #6b0f1a, transparent);
  animation: pulse 5s infinite alternate;
  
  @keyframes pulse {
    0% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.4;
    }
  }
`;

const ShootingStar = styled.div`
  position: absolute;
  top: -50px;
  width: 2px;
  height: 100px;
  background: linear-gradient(to bottom, white, transparent);
  opacity: 0;
  transform: rotate(-45deg);
`;

export default function StarrySky() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    // Анімація зорепаду GSAP
    gsap.to(".shooting-star", {
      x: "100vw",
      y: "100vh",
      duration: 1.5,
      repeat: -1,
      repeatDelay: Math.random() * 5 + 3, // Зорепад з випадковим інтервалом
      ease: "power2.out",
      opacity: 1,
      stagger: {
        each: 2,
        repeat: -1,
      },
    });
  }, []);

  return (
    <SkyContainer>
      <GradientOverlay />

      {/* Частинки - зірки */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 150 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.8 },
            size: { value: 2 },
            move: {
              enable: true,
              speed: 0.1,
              direction: "none",
              random: true,
              straight: false,
            },
          },
        }}
      />

      {/* Анімація зорепаду */}
      {[...Array(3)].map((_, i) => (
        <ShootingStar key={i} className="shooting-star" />
      ))}
    </SkyContainer>
  );
}
