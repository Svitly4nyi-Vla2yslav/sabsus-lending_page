import React, { useState } from 'react';
import {
  SliderContainer,
  SliderWrapper,
  SlideCard,
  PrevButton,
  NextButton,
  ButtonContainer,
} from './MindMap.styled';

export interface SliderProps {
  children: React.ReactNode[];
}

export const Slider: React.FC<SliderProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < children.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <SliderContainer>
      <SliderWrapper
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {children.map((child, index) => (
          <SlideCard key={index}>{child}</SlideCard>
        ))}
      </SliderWrapper>
      <ButtonContainer>
        <PrevButton onClick={prevSlide}>Prev</PrevButton>
        <NextButton onClick={nextSlide}>Next</NextButton>
      </ButtonContainer>
    </SliderContainer>
  );
};
