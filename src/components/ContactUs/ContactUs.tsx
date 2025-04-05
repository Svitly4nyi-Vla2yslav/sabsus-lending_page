import React from 'react';
import {
  ContactUsText,
  ContactUsTitle,
  ContactUsWrapper,
} from './ContactUs.styled';
import ContactForm from './ContactForm';
import { Element } from 'react-scroll';

const ContactUs: React.FC = () => {
  return (
    <Element name="contact">
      <ContactUsWrapper id='contact'>
        <ContactUsText>Contact US</ContactUsText>
        <ContactUsTitle>Let’s Start Building Your Next Big Idea</ContactUsTitle>
        <ContactForm/>
      </ContactUsWrapper>
    </Element>
  );
};

export default ContactUs;
