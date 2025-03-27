import styled, { keyframes } from 'styled-components';
import ElementSvg from "../../assets/icons/Element.svg"

export const generateStarAnimation = () => keyframes`
  0% {
    transform: translate(0, 0) rotate(45deg) scale(1);
    opacity: 0.9;
  }
  100% {
    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(45deg) scale(0.7);
    opacity: 0.1;
  }
`;

export const ButtonContainer = styled.a<{ $isClicked: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  font-size: 18px;
  font-family: 'Arial', sans-serif;
  color: #fff;
  background: linear-gradient(135deg, rgb(222, 118, 26) 0%, #FE5B14 100%);
  border: 2px solid rgb(247, 159, 26);
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.6s ease;
  box-shadow: 0 4px 15px rgb(203, 101, 24);
  z-index: 0;
  width: 80%;
  bottom: -27%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgb(255, 87, 3);
  }

  &:active {
    transform: scale(0.95) translateY(0);
    background: linear-gradient(135deg, rgb(255, 138, 5) 0%, #FE5B14 100%);
  }
`;

export const Star = styled.div`
  position: absolute;
  width: 53px;
  height: 49px;
  background: url(${ElementSvg}) no-repeat center center;
  background-size: contain;
  animation: ${generateStarAnimation} 4s ease-out forwards; // Анімація зірок одразу
  pointer-events: none;
  opacity: 1.9;
`;

export const ButtonText = styled.span`
    display: flex;
    z-index: 1;
    width: 100%;
    text-align: center;
    letter-spacing: 1px;
    justify-content: center;
`;