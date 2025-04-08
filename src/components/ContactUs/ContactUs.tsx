import React from 'react';
import {
  ContactUsText,
  ContactUsTitle,
  ContactUsWrapper,
} from './ContactUs.styled';
import ContactForm from './ContactForm';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const ContactUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Element name="contact">
      <ContactUsWrapper id="contact">
        <ContactUsText>{t('contactUs.sectionTitle')}</ContactUsText>
        <ContactUsTitle>{t('contactUs.mainHeading')}</ContactUsTitle>
        <ContactForm />
      </ContactUsWrapper>
    </Element>
  );
};

export default ContactUs;
