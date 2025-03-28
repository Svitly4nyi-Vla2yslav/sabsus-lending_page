import { useState } from 'react';
// import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BurgerButton,
  IconsStars,
  Line,
  MenuLink,
  MenuOverlay,
  Wrapper,
} from './BurgerMenu.styled';
import Button from '../MagicButton/MagicButton';
import IconStars from '../../assets/icons/Icon-stars.svg';
import { useTranslation } from 'react-i18next';

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

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(); // Отримуємо функцію перекладу

  const links = [
    { href: '#service', label: t('menu.services') }, // Використовуємо переклад
    { href: '#case', label: t('menu.caseStudies') },
    { href: '#faq', label: t('menu.faq') },
    { href: '#contact', label: t('menu.contact') },
  ];
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
            <Button href="#">
              <IconsStars src={IconStars} alt="Stars" /> {t('buttons.getInTouch')} 
            </Button>
          </MenuOverlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default BurgerMenu;
