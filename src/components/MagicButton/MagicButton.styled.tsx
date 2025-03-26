import styled from "styled-components";

export const ButtonWrapper = styled.button`
  position: relative;
  width: 200px;
  height: 50px;
  overflow: hidden;
  /* ...інші стилі */
`;

export const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  
  canvas {
    position: absolute !important;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`;