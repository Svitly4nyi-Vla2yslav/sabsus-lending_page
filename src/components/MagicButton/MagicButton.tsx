import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ElementSvg from "../../assets/icons/Element.svg"

const generateStarAnimation = () => keyframes`
  0% {
    transform: translate(0, 0) rotate(45deg) scale(1);
    opacity: 0.9;
  }
  100% {
    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(45deg) scale(0.7);
    opacity: 0.1;
  }
`;

const ButtonContainer = styled.a<{ $isClicked: boolean }>`
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
  transition: all 0.3s ease;
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

const Star = styled.div`
  position: absolute;
  width: 53px;
  height: 49px;
  background: url(${ElementSvg}) no-repeat center center;
  background-size: contain;
  animation: ${generateStarAnimation} 1s ease-out forwards; // Анімація зірок одразу
  pointer-events: none;
  opacity: 0.9;
`;

const ButtonText = styled.span`
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
`;

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [stars, setStars] = useState<Array<{ id: number; key: number }>>([]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsClicked(true);

    // Генерація нових зірок при кліку
    const newStars = Array.from({ length: 180 }, (_, i) => ({
      id: Date.now() + i,
      key: Date.now() + i,
    }));
    setStars(newStars);

    // Плавне прокручування до якірного посилання через 3 секунди
    setTimeout(() => {
      document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <ButtonContainer href={href} onClick={handleClick} $isClicked={isClicked}>
      <ButtonText>{children}</ButtonText>
      {stars.map(star => (
        <Star
          key={star.key}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </ButtonContainer>
  );
};

export default Button;
