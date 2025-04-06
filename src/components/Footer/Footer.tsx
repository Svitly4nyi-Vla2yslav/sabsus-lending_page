import React from 'react';
import {
  BackgroundIconContainer,
  FooterContainer,
  FooterIcon,
  FooterTitelContainer,
  FooterTitle,
} from './Footer.styled';
import { Border } from '../PartnersBanner/Partners.styled';
import FooterIcon1 from '../../assets/icons/footerIcon.svg';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Border />
      <FooterTitelContainer>
        <FooterTitle>© 2024 SABSUS</FooterTitle>
        <FooterTitle>Privacy Policy</FooterTitle>
        <FooterTitle>Terms of Service</FooterTitle>{' '}
        <FooterTitle>Cookie Policy</FooterTitle>
      </FooterTitelContainer>
      <BackgroundIconContainer>
        <FooterIcon src={FooterIcon1} alt="footer icon" />
      </BackgroundIconContainer>
    </FooterContainer>
  );
};

export default Footer;
