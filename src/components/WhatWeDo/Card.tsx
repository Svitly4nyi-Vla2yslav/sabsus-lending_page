import React from 'react';
import {
  ComprehensiveContainer,
  ComprehensiveText,
  ComprehensiveTitle,
  ComputerIcon,
  IconContainer,
} from './About.styled';
import Icon from '../../assets/icons/about/cardIcon.svg';
import { BackgroundIcon, BackgroundIconContainer } from './Card.styled';

import BackgroundImage from '../../assets/icons/about/rainbow.svg';

const Card: React.FC = () => {
  return (
    <>
      <ComprehensiveContainer>
        <IconContainer>
          <ComputerIcon src={Icon} alt="🦄" />
        </IconContainer>
        <ComprehensiveTitle>Standard Applications</ComprehensiveTitle>
        <ComprehensiveText>
          Create intuitive, industry-standard applications to streamline your
          business operations.
        </ComprehensiveText>
        <BackgroundIconContainer>
          <BackgroundIcon src={BackgroundImage} alt="Background Icon" />
        </BackgroundIconContainer>
      </ComprehensiveContainer>
      <ComprehensiveContainer></ComprehensiveContainer>
      <ComprehensiveContainer></ComprehensiveContainer>
      <ComprehensiveContainer></ComprehensiveContainer>
    </>
  );
};

export default Card;
