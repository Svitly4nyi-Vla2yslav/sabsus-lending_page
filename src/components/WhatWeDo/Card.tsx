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
  BigCard,
  CardSmollContainer,
  CardText,
  CardTitel,
  CardZipContainer,
  EngineIcons,
  IconContainerCard,
  IconContainerCard1,
  IconContainerCard2,
  IconContainerCardCode,
  IconContainerCredit,
  PhoneIcon,
  PhoneIcon1,
  PhoneIcon2,
  PhoneIconCode,
  PhoneIconCredit,
  SmollCard,
} from './Card.styled';

import BackgroundImage from '../../assets/icons/about/rainbow.svg';
import Phone1 from '../../assets/icons/about/phone1.svg';
import Phone2 from '../../assets/icons/about/phone2.svg';
import Phone3 from '../../assets/icons/about/phone3.svg';
import Code from '../../assets/icons/about/codeIcon.svg';
import BigCode from '../../assets/icons/about/CodeWarning.svg';
import Lamp from '../../assets/icons/about/IconLicht.svg';
import Credit from '../../assets/icons/about/creditCard.svg';
import Zip from '../../assets/icons/about/Zip.svg';
import Engine from '../../assets/icons/about/engineCard.svg';
import SmollLamp from '../../assets/icons/about/smollLamp.svg';

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
          <ComputerIcon src={Lamp} alt="🪔" />
        </IconContainer>
        <ComprehensiveTitle>Exceptional UX/UI Design</ComprehensiveTitle>
        <ComprehensiveText>
          Create designs that enhance experience and drive engagement.
        </ComprehensiveText>
        <BackgroundIconContainer>
          <IconContainerCredit>
            <PhoneIconCredit src={Credit} alt="📱" />
          </IconContainerCredit>{' '}
        </BackgroundIconContainer>
      </ComprehensiveContainer>
      <ComprehensiveContainer>
        <IconContainer>
          <ComputerIcon src={Zip} alt="🪔" />
        </IconContainer>
        <ComprehensiveTitle>Ready-to-Launch Packages</ComprehensiveTitle>
        <ComprehensiveText>
          Select from flexible packages designed to meet your business goals.
        </ComprehensiveText>
        <BackgroundIconContainer>
          <CardZipContainer>
            <CardSmollContainer>
              <SmollCard>
                {' '}
                <EngineIcons src={Engine} />{' '}
                <CardTitel>Standard CRM Package</CardTitel>
                <CardText>
                  Includes 10 screens with essential CRM features to streamline
                  operations.
                </CardText>
              </SmollCard>
              <SmollCard>
                <EngineIcons src={SmollLamp} />
                <CardTitel>Customizable IT Suite</CardTitel>
                <CardText>
                  IT solutions tailored to your needs, from backend to frontend.
                </CardText>
              </SmollCard>
            </CardSmollContainer>
            <BigCard>
              <EngineIcons src={SmollLamp} />
              <CardTitel>Full Development Package</CardTitel>
              <CardText>
                Package covering server setup, database integration, and UI/UX
                design.
              </CardText>
            </BigCard>
          </CardZipContainer>
        </BackgroundIconContainer>
      </ComprehensiveContainer>
    </>
  );
};

export default Card;
