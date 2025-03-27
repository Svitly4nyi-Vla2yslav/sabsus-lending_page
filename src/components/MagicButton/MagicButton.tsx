import React, { useState } from 'react';
import { ButtonContainer, ButtonText, Star } from './MagicButton.styled';


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
            bottom: `${Math.random() * 100}%`,
            right: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </ButtonContainer>
  );
};

export default Button;
