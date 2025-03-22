import React, { useEffect, useState } from 'react';
import { Container, HeaderContainer, Logo, LogoIcon } from './Header.styled';
import BurgerMenu, { BurgerMenuProps } from '../BurgerMenu/BurgerMenu';
import logo from '../../assets/icons/logo-ape.svg';
import Hero from '../Hero/Hero';

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
    <Container $isScrolled={isScrolled}>
      <HeaderContainer id="header" isopen={isopen}>
        <Logo href="#header">
          <LogoIcon src={logo} alt="Logo" />
        </Logo>
        <Hero isopen={isopen} />
        <BurgerMenu isopen={isopen} toggleMenu={toggleMenu} />
      </HeaderContainer>{' '}
    </Container>
  );
};

export default Header;
