import React from 'react';
import {
  AboutTitle,
  AboutWrapper,
  ComprehensiveContainer,
  ComprehensiveText,
  ComprehensiveTitle,
  ComputerIcon,
  ContainerTabl,
  Div,
  DollarIcon,
  DollarSpan,
  GrafikIcon,
  GrafikWrapp,
  IconContainer,
  PriseText,
  TextAboutUs,
  TotalDepositContainer,
  TotalDepositText,
} from './About.styled';
import Comp from '../../assets/icons/about/compIcon.svg';
import { PriseContainer } from './About.styled';
import $ from '../../assets/icons/about/$-icon.svg';
import Graf from '../../assets/icons/about/depositGrafik.svg';

const About: React.FC = () => {
  return (
    <>
      <AboutWrapper>
        <TextAboutUs>What We Do</TextAboutUs>
        <AboutTitle>
          We create IT solutions, from CRM to custom apps, to streamline your
          business
        </AboutTitle>
        <ComprehensiveContainer>
          <IconContainer>
            {' '}
            <ComputerIcon src={Comp} alt="🖥️" />
          </IconContainer>
          <ComprehensiveTitle>Comprehensive CRM Systems</ComprehensiveTitle>
          <ComprehensiveText>
            Develop robust CRM systems tailored to your business needs. Automate
            workflows and deliver a seamless customer experience.
          </ComprehensiveText>
          <ContainerTabl>
            <TotalDepositContainer>
              <Div>
              <PriseContainer>
                <TotalDepositText>Total Deposit</TotalDepositText>
                <PriseText>$1200.00</PriseText>
              </PriseContainer>{' '}
              <DollarSpan>
                {' '}
                <DollarIcon src={$} alt="💲" />
              </DollarSpan></Div>
              <GrafikWrapp>
                <GrafikIcon src={Graf} />
              </GrafikWrapp>
            </TotalDepositContainer>
          </ContainerTabl>
        </ComprehensiveContainer>
      </AboutWrapper>
    </>
  );
};

export default About;
