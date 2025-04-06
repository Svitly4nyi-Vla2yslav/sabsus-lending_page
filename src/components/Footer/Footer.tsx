import React from 'react';
import { BackgroundIconContainer, FooterContainer, FooterIcon, FooterTitle } from './Footer.styled';
import { Border } from '../PartnersBanner/Partners.styled';
import FooterIcon1 from "../../assets/icons/footerIcon.svg"

const Footer: React.FC = () => {
  return (
    <FooterContainer>
        <Border/>
      <FooterTitle>© 2024 SABSUS</FooterTitle>
      <FooterTitle>Privacy Policy</FooterTitle>
      <FooterTitle>Terms of Service</FooterTitle>{' '}
      <FooterTitle>Cookie Policy</FooterTitle>
      <BackgroundIconContainer>
        <FooterIcon src={FooterIcon1} />
      </BackgroundIconContainer>
    </FooterContainer>
  );
};

export default Footer;
