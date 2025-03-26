import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BurgerButton,
  IconsStars,
  Line,
  MenuLink,
  MenuOverlay,
  Wrapper,
} from './BurgerMenu.styled';
import MagicButton from '../MagicButton/MagicButton';
import ExplodingButton from '../MagicButton/MagicButton';
import Button from '../MagicButton/MagicButton';

// Анімації для бургер-кнопки
const topLineVariants = {
  open: { rotate: 45, y: 8 },
  closed: { rotate: 0, y: 0 },
};

const middleLineVariants = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
};

const bottomLineVariants = {
  open: { rotate: -45, y: -8 },
  closed: { rotate: 0, y: 0 },
};

// Анімація меню
const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

const links = [
  { href: '#service', label: 'Service' },
  { href: '#case', label: 'Case Studies' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact Us' },
];

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      {/* Бургер-кнопка */}
      <BurgerButton onClick={() => setIsOpen(!isOpen)}>
        <Line animate={isOpen ? 'open' : 'closed'} variants={topLineVariants} />
        <Line
          animate={isOpen ? 'open' : 'closed'}
          variants={middleLineVariants}
        />
        <Line
          animate={isOpen ? 'open' : 'closed'}
          variants={bottomLineVariants}
        />
      </BurgerButton>

      {/* Модальне меню */}
      <AnimatePresence>
        {isOpen && (
          <MenuOverlay
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, index) => (
              <MenuLink
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </MenuLink>
            ))}
            <Button href="#contact"><IconsStars/>  Get in Touch</Button>
          </MenuOverlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default BurgerMenu;
