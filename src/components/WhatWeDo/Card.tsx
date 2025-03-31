import React from 'react';
import {
  ComprehensiveContainer,
  ComprehensiveText,
  ComprehensiveTitle,
  ComputerIcon,
  IconContainer,
} from './About.styled';
import Icon from '../../assets/icons/about/cardIcon.svg';
import {
  BackgroundIcon,
  BackgroundIconContainer,
  IconContainerCard,
  IconContainerCard1,
  IconContainerCard2,
  IconContainerCardCode,
  PhoneIcon,
  PhoneIcon1,
  PhoneIcon2,
  PhoneIconCode,
} from './Card.styled';

import BackgroundImage from '../../assets/icons/about/rainbow.svg';
import Phone1 from '../../assets/icons/about/phone1.svg';
import Phone2 from '../../assets/icons/about/phone2.svg';
import Phone3 from '../../assets/icons/about/phone3.svg';
import Code from '../../assets/icons/about/codeIcon.svg';
import BigCode from "../../assets/icons/about/CodeWarning.svg"
import Lamp from "../../assets/icons/about/IconLicht.svg"
 
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
      <ComprehensiveContainer>
        <IconContainer>
          <ComputerIcon src={Code} alt="♨️" />
        </IconContainer>
        <ComprehensiveTitle>Custom IT Solutions</ComprehensiveTitle>
        <ComprehensiveText>
          Transform your ideas into reality with our IT solutions tailored to
          your challenges.
        </ComprehensiveText>
        <BackgroundIconContainer>
          <IconContainerCardCode>
            <PhoneIconCode src={BigCode} alt="📱" />
          </IconContainerCardCode>{' '}
        </BackgroundIconContainer>
      </ComprehensiveContainer>
      <ComprehensiveContainer>
        <IconContainer>
          <ComputerIcon src={Lamp}  alt='🪔' />
        </IconContainer>
        <ComprehensiveTitle>Exceptional UX/UI Design</ComprehensiveTitle>
        <ComprehensiveText>
        Create designs that enhance experience and drive engagement.
        </ComprehensiveText>
      </ComprehensiveContainer>
      <ComprehensiveContainer></ComprehensiveContainer>
    </>
  );
};

export default Card;
