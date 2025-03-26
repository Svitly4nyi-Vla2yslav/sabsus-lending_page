import React, { useEffect, useState } from 'react';
import { ContainerBar, HeaderContainer, Logo, LogoIcon } from './Header.styled';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import LogoSabsus from '../../assets/icons/logo-sabsus.svg';

import Hero from '../Hero/Hero';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export interface ContainerProps {
  $isScrolled: boolean;
}

const Header: React.FC = () => {
  const [isopen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isopen);
  };

  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderContainer id="header" isopen={isopen}>
        <ContainerBar>
          <Logo href="#header">
            <LogoIcon src={LogoSabsus} alt="logo-sabsus" />
          </Logo>
          <LanguageSwitcher /><BurgerMenu />
        </ContainerBar>
        <Hero />
        
      </HeaderContainer>{' '}
    </>
  );
};

export default Header;
