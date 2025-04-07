import React, { useState } from 'react';
import {
  BackgroundIconContainer,
  FooterContainer,
  FooterIcon,
  FooterTitelContainer,
  FooterTitle,
} from './Footer.styled';
import { Border } from '../PartnersBanner/Partners.styled';
import FooterIcon1 from '../../assets/icons/footerIcon.svg';
import { PoliciesContent } from './PoliciesContent';

const Footer: React.FC = () => {
  const [showPolicies, setShowPolicies] = useState(false);
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  
  const handlePolicyClick = (policy: string) => {
    setActivePolicy(policy);
    setShowPolicies(true);
  };
  return (
    <>
      <FooterContainer>
        <Border />
        <FooterTitelContainer>
          <FooterTitle>© 2024 SABSUS</FooterTitle>
          <FooterTitle onClick={() => handlePolicyClick('privacy')}>
            Privacy Policy
          </FooterTitle>
          <FooterTitle onClick={() => handlePolicyClick('terms')}>
            Terms of Service
          </FooterTitle>
          <FooterTitle onClick={() => handlePolicyClick('cookie')}>
            Cookie Policy
          </FooterTitle>
        </FooterTitelContainer>
        <BackgroundIconContainer>
          <FooterIcon src={FooterIcon1} alt="footer icon" />
        </BackgroundIconContainer>
      </FooterContainer>

      {showPolicies && <PoliciesContent activePolicy={activePolicy} />}
    </>
  );
};

export default Footer;
