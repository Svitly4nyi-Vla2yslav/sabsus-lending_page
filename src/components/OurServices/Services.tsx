import React from 'react';
import {
  BackgroundIconContainer,
  CardContainer,
  CardContainerBig,
  CardsGrid,
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
import Comp from '../../assets/icons/services/compService.svg';
import Grafik from '../../assets/icons/services/serviceGrafik.svg';
import phone from '../../assets/icons/services/phone-01.svg';
import kredit from '../../assets/icons/services/ServiceKredit.svg';
import key from '../../assets/icons/services/key.svg';
import keyGradient from '../../assets/icons/services/key-gradient.svg';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Element name="service">
      <ServicesWrapper>
        <TextServices>{t('services.sectionTitle')}</TextServices>
        <ServicesTitle>{t('services.mainHeading')}</ServicesTitle>
        <CardsGrid>
          <CardContainer>
            <IconContainer>
              <ComputerIcon src={Comp} alt="🪔" />
            </IconContainer>
            <ComprehensiveTitle>
              {t('services.cards.crm.title')}
            </ComprehensiveTitle>
            <ComprehensiveText>
              {t('services.cards.crm.description')}
            </ComprehensiveText>
            <BackgroundIconContainer>
              <IconContainerCreditServices>
                <PhoneIconCreditServices src={Grafik} alt="📱" />
              </IconContainerCreditServices>
            </BackgroundIconContainer>
          </CardContainer>
          <CardContainer>
            <IconContainer>
              <ComputerIcon src={phone} alt="🪔" />
            </IconContainer>
            <ComprehensiveTitle>
              {t('services.cards.mobile.title')}
            </ComprehensiveTitle>
            <ComprehensiveText>
              {t('services.cards.mobile.description')}
            </ComprehensiveText>
            <BackgroundIconContainer>
              <IconCreditServices>
                <PhoneCreditServices src={kredit} alt="📱" />
              </IconCreditServices>
            </BackgroundIconContainer>
          </CardContainer>{' '}
        </CardsGrid>

        <CardContainerBig>
          <IconContainer>
            <ComputerIcon src={key} alt="🪔" />
          </IconContainer>
          <ComprehensiveTitle>
            {t('services.cards.it.title')}
          </ComprehensiveTitle>
          <ComprehensiveText>
            {t('services.cards.it.description')}
          </ComprehensiveText>
          <BackgroundIconContainer>
            <IconContainerCardCode>
              <WrapperCardKey>
                <GradientKey src={keyGradient} />
              </WrapperCardKey>
            </IconContainerCardCode>
            <KeyTextIconContainer>
              <KeyTitel>{t('services.cards.it.customSolution')}</KeyTitel>
              <KeyText>{t('services.cards.it.customDescription')}</KeyText>
              <KeySpanContainer>
                <KeySpan>
                  <KeySpanText>
                    {t('services.cards.it.features.fullDevelopment')}
                  </KeySpanText>
                </KeySpan>
                <KeySpan>
                  <KeySpanText>
                    {t('services.cards.it.features.customFeatures')}
                  </KeySpanText>
                </KeySpan>
                <KeySpan>
                  <KeySpanText>
                    {t('services.cards.it.features.integration')}
                  </KeySpanText>
                </KeySpan>
              </KeySpanContainer>
            </KeyTextIconContainer>
          </BackgroundIconContainer>
        </CardContainerBig>
      </ServicesWrapper>
    </Element>
  );
};

export default Services;
