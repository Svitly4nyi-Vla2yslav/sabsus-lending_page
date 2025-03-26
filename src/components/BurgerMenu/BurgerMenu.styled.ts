import { motion } from "framer-motion";
import styled from "styled-components";

// Styled Components
export const Wrapper = styled.div`
  position: relative;
`;

export const BurgerButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
`;

export const Line = styled(motion.div)`
  width: 30px;
  height: 4px;
  background: white;
  border-radius: 2px;
   z-index: 10;
`;

export const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;

export const MenuLink = styled(motion.a)`
  color: white;
  font-size: 24px;
  margin: 12px 0;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #fe5b14;
  }
`;

export const IconsStars =  styled.img`

`;
