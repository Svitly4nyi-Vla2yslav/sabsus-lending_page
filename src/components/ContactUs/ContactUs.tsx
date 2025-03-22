import React from 'react';
import {
  ContactContainer,
  ContactText,
  IconX,
  TitleContact,
} from './ContactUs.styled';
import { ContactForm } from './ContactForm';
import xIcon from '../../assets/icons/add-sharpX.svg';

const ContactUs: React.FC = () => {
  return (
    <ContactContainer>
      <TitleContact>Are you in?</TitleContact>
      <IconX src={xIcon} alt="❌" />
      <ContactText>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </ContactText>
      <ContactForm />
    </ContactContainer>
  );
};

export default ContactUs;
