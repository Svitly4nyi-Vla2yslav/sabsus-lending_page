import React, { useEffect } from 'react';
import {
  BackgroundIconContainer,
  CardContainer,
  CardContainerBig,
  CardGridDeckstop,
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


import AOS from 'aos';
import 'aos/dist/aos.css';

const Services: React.FC = () => {

  useEffect(() => {
    // Ініціалізація AOS тільки на клієнтській стороні
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 1600,
          offset: 120, // Змініть це значення (спробуйте 120, 200, -100)
          easing: 'ease-out-quad',
          once: false,
          mirror: true,
          disableMutationObserver: true,
          debounceDelay: 50,
          throttleDelay: 99,
          disable: function() {
            return window.innerWidth < 1024;
          }
        });
        
        // Оновлення AOS після ініціалізації
        AOS.refresh();
      });
    }
  }, []);


  const { t } = useTranslation();

  return (
    <Element name="service">
      <ServicesWrapper id="service">
        <TextServices  data-aos="fade-right">{t('services.sectionTitle')}</TextServices>
        <ServicesTitle  data-aos="fade-right">{t('services.mainHeading')}</ServicesTitle>
        <CardGridDeckstop>
          <CardsGrid>
            <CardContainer  data-aos="fade-right">
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
            <CardContainer  data-aos="flip-up">
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

          <CardContainerBig   data-aos="fade-left">
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
        </CardGridDeckstop>
      </ServicesWrapper>
    </Element>
  );
};

export default Services;
