import React from 'react';
import {
  ComprehensiveContainer,
  ComprehensiveText,
  ComprehensiveTitle,
  ComputerIcon,
  IconContainer,
  ShadowContainer,
} from './About.styled';
import Icon from '../../assets/icons/about/cardIcon.svg';
import {
  BackgroundIcon,
  BackgroundIconContainer,
  IconContainerCard,
  IconContainerCard1,
  IconContainerCard2,
  PhoneIcon,
  PhoneIcon1,
  PhoneIcon2,
} from './Card.styled';

import BackgroundImage from '../../assets/icons/about/rainbow.svg';
import Phone1 from '../../assets/icons/about/phone1.svg';
import Phone2 from '../../assets/icons/about/phone2.svg';
import Phone3 from '../../assets/icons/about/phone3.svg';

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
        <>
          <BackgroundIconContainer>
            <BackgroundIcon src={BackgroundImage} alt="Background Icon" />
            <IconContainerCard>
              <PhoneIcon src={Phone1} alt="📱" />
            </IconContainerCard>
            <IconContainerCard1>
              <PhoneIcon1 src={Phone2} alt="📱" />
            </IconContainerCard1>
            <IconContainerCard2>
              <PhoneIcon2 src={Phone3} alt="📱" />
            </IconContainerCard2>
          </BackgroundIconContainer>
        </>
      </ComprehensiveContainer>
      <ComprehensiveContainer></ComprehensiveContainer>
      <ComprehensiveContainer></ComprehensiveContainer>
      <ComprehensiveContainer></ComprehensiveContainer>
    </>
  );
};

export default Card;
