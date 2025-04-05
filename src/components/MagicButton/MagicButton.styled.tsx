import styled, { keyframes, css } from 'styled-components';
import ElementSvg from '../../assets/icons/Element.svg'; // або твій новий SVG

const float = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  50% { transform: translate(3px, -3px) rotate(20deg); opacity: 0.6; }
  100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
`;

const burst = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)
      rotate(90deg) scale(0.5);
    opacity: 0;
  }
`;

const burstEpic = keyframes`
  0% {
    transform: scale(1) translate(0, 0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: scale(1.2) translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) rotate(${Math.random() * 720}deg);
    opacity: 0;
  }
`;

export const ButtonContainer = styled.a.attrs<{ $isClicked: boolean }>(({ $isClicked }) => ({
  style: {
    transform: $isClicked ? 'scale(0.98)' : 'scale(1)',
  },
}))<{ $isClicked: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  font-size: 18px;
  font-family: 'Arial', sans-serif;
  color: #fff;
  background: linear-gradient(135deg, #fe5b14 0%, #FE5B14 100%);
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.6s ease;
  box-shadow: 0 0 0 3px rgba(254, 91, 20, 0.17), 0 1px 2px 0 #fe5b14;
  z-index: 0;
  width: 80%;
  bottom: -27%;
  border: none;

  &:active {
    transition: transform 0.1s ease-out;
  }
`;

export const Star = styled.div.attrs<{ $burst?: boolean; $opacity?: number }>(
  ({ $burst, $opacity }) => ({
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: $opacity ?? 1,
    },
  })
)<{ $burst?: boolean; $opacity?: number }>`
  position: absolute;
  width: 10px;
  height: 10px;
  background: url(${ElementSvg}) no-repeat center center;
  background-size: contain;
  pointer-events: none;
  animation: ${({ $burst }) =>
    $burst
      ? css`${burstEpic} 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards`
      : css`${float} ${3 + Math.random() * 3}s ease-in-out infinite`};
`;


export const ButtonText = styled.span`
  display: flex;
  z-index: 1;
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
  justify-content: center;
`;


export const Wave = styled.span.attrs({
  style: {
    background: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.3})`,
  },
})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: waveAnimation 0.6s ease-out forwards;
  pointer-events: none;
  z-index: 0;

  @keyframes waveAnimation {
    0% {
      width: 0px;
      height: 0px;
      opacity: 0.7;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      width: 400px;
      height: 400px;
      opacity: 0;
    }
  }
`;