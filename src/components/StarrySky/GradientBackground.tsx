import styled from "styled-components";

export const GradientWrapper = styled.div`
  position: absolute;
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #fe5b14 0%, rgba(0, 0, 0, 0) 70%);
  border-radius: 50%;
  z-index: 1;
  filter: blur(80px);
`;

export const GradientBackground = () => {
  return <GradientWrapper />;
};

