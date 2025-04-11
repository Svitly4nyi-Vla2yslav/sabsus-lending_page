import React, { useEffect } from 'react';
import {
  ContactUsText,
  ContactUsTitle,
  ContactUsWrapper,
} from './ContactUs.styled';
import ContactForm from './ContactForm';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import AOS from 'aos';
import 'aos/dist/aos.css';


const ContactUs: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1800, // Скоротили тривалість анімації
      offset: -320, // Анімація почнеться раніше (за 120px до появи елемента)
      easing: 'ease-in-out', // Плавність анімації
      once: false, // Анімація тільки один раз
      mirror: true // Вимкнули повторну анімацію при скролі назад
    });
  }, []);

  return (
    <Element name="contact">
      <ContactUsWrapper id="contact">
        <ContactUsText data-aos="zoom-in-up">{t('contactUs.sectionTitle')}</ContactUsText>
        <ContactUsTitle data-aos="zoom-in-up">{t('contactUs.mainHeading')}</ContactUsTitle>
        <ContactForm/>
      </ContactUsWrapper>
    </Element>
  );
};

export default ContactUs;
