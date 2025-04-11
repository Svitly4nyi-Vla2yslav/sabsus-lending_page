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

  AOS.init({
    // Основні налаштування:
    duration: 1600,             // Коротша тривалість
    offset: -320,               // Раніше спрацьовування
    easing: 'ease-out-quad',   // Оптимальна функція плавності
    once: false,                // Анімація тільки один раз
    mirror: true,             // Без повтору при скролі назад
    
    // Важливі фікси:
    disableMutationObserver: true, // Вимикає автоматичний перерахунок
    debounceDelay: 50,         // Затримка для resize подій
    throttleDelay: 99,         // Затримка для scroll подій
    
    // Адаптація:
    disable: function() {
      return window.innerWidth < 1024;
    }
  });

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
