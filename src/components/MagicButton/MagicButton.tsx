import React, { useEffect, useState } from 'react';
import { ButtonContainer, ButtonText, Star, Wave } from './MagicButton.styled';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  const [burstStars, setBurstStars] = useState<Array<{ id: number }>>([]);
  const [floatingStars, setFloatingStars] = useState<
    Array<{ id: number; opacity: number }>
  >([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const stars = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      opacity: Math.random() < 0.4 ? Math.random() * 0.9 + 0.1 : 1,
    }));
    setFloatingStars(stars);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();
    setIsClicked(true);

    const newStars = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
    }));
    setBurstStars(newStars);

    setTimeout(() => {
      setBurstStars([]);
      setIsClicked(false);
    }, 800);
  };

  return (
    <ButtonContainer as="button" onClick={handleClick} $isClicked={isClicked}>
      {isClicked && <Wave key={Date.now()} />}
      <ButtonText>{children}</ButtonText>

      {floatingStars.map(star => (
        <Star key={`float-${star.id}`} $opacity={star.opacity} $burst={false} />
      ))}

      {burstStars.map(star => (
        <Star key={`burst-${star.id}`} $burst={true} />
      ))}
    </ButtonContainer>
  );
};

export default Button;
