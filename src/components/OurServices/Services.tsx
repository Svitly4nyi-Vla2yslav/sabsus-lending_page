import React from 'react';
import {
  BackgroundIconContainer,
  CardContainer,
  GradientKey,
  IconContainerCardCode,
  IconContainerCreditServices,
  IconCreditServices,
  KeySpan,
  KeySpanContainer,
  KeySpanText,
  KeyText,
  KeyTextIconContainer,
  KeyTitel,
  PhoneCreditServices,
  PhoneIconCode,
  PhoneIconCreditServices,
  ServicesTitle,
  ServicesWrapper,
  TextServices,
  WrapperCardKey,
} from './Services.styled';
import {
  IconContainer,
  ComputerIcon,
  ComprehensiveTitle,
  ComprehensiveText,
} from '../WhatWeDo/About.styled';
import {} from '../WhatWeDo/Card.styled';

import Comp from '../../assets/icons/services/compService.svg';
import Grafik from '../../assets/icons/services/serviceGrafik.svg';
import phone from '../../assets/icons/services/phone-01.svg';
import kredit from '../../assets/icons/services/ServiceKredit.svg';
import key from '../../assets/icons/services/key.svg';
import keyGradient from '../../assets/icons/services/key-gradient.svg';
import { Element } from 'react-scroll';

const Services: React.FC = () => {



  return (
    <Element name='service'>
      <ServicesWrapper>
        <TextServices>Our Services</TextServices>
        <ServicesTitle>
          Comprehensive IT solutions tailored to meet your business needs.
        </ServicesTitle>

        <CardContainer>
          <IconContainer>
            <ComputerIcon src={Comp} alt="🪔" />
          </IconContainer>
          <ComprehensiveTitle>Custom CRM Development</ComprehensiveTitle>
          <ComprehensiveText>
            Streamline operations with CRM systems tailored to your workflows.
          </ComprehensiveText>
          <BackgroundIconContainer>
            <IconContainerCreditServices>
              <PhoneIconCreditServices src={Grafik} alt="📱" />
            </IconContainerCreditServices>{' '}
          </BackgroundIconContainer>
        </CardContainer>
        <CardContainer>
          {' '}
          <IconContainer>
            <ComputerIcon src={phone} alt="🪔" />
          </IconContainer>
          <ComprehensiveTitle>
            Mobile Application Development
          </ComprehensiveTitle>
          <ComprehensiveText>
            Create mobile apps that deliver exceptional experiences and grow
            your business.
          </ComprehensiveText>
          <BackgroundIconContainer>
            <IconCreditServices>
              <PhoneCreditServices src={kredit} alt="📱" />
            </IconCreditServices>{' '}
          </BackgroundIconContainer>
        </CardContainer>
        <CardContainer>
          <IconContainer>
            <ComputerIcon src={key} alt="🪔" />
          </IconContainer>
          <ComprehensiveTitle>Custom IT Solutions</ComprehensiveTitle>
          <ComprehensiveText>
            Get custom IT solutions to solve challenges and boost efficiency.
          </ComprehensiveText>
          <BackgroundIconContainer>
            <IconContainerCardCode>
              <WrapperCardKey>
                <GradientKey src={keyGradient} />
              </WrapperCardKey>
            </IconContainerCardCode>
            <KeyTextIconContainer>
              <KeyTitel>Custom Solution</KeyTitel>
              <KeyText>
                Tailored software development to address unique business
                challenges and improve operational efficiency
              </KeyText>
              <KeySpanContainer>
                <KeySpan>
                  <KeySpanText>Full Development</KeySpanText>
                 
                </KeySpan>
                <KeySpan>
                  <KeySpanText>Custom Features</KeySpanText>
                 
                </KeySpan> <KeySpan>
                  <KeySpanText>Integration </KeySpanText>
                 
                </KeySpan>
              </KeySpanContainer>
            </KeyTextIconContainer>
          </BackgroundIconContainer>
        </CardContainer>
      </ServicesWrapper>
    </Element>
  );
};

export default Services;
