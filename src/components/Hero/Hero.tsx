import React from 'react';
import {
  ContainerButton,
  ContainerExperience,
  HeroWrapper,
  IconsExperience,
  TextDescription,
  TextDevelopment,
  TextExperience,
  TitleModern,
} from './Hero.styled';
import { useTranslation } from 'react-i18next';
import Button from '../MagicButton/MagicButton';
import IconStars from '../../assets/icons/Icon-stars.svg';
import { IconsStars } from '../BurgerMenu/BurgerMenu.styled';
import Tailored from '../../assets/icons/Tailored Solutions.svg';
import Scalable from '../../assets/icons/Scalable Technologies.svg';
import Proven from '../../assets/icons/Proven Expertise.svg';

const Hero: React.FC = ({}) => {
  const { t } = useTranslation();

  return (
    <>
      <HeroWrapper>
        <TextDevelopment>Development agency</TextDevelopment>
        <TitleModern>Modern IT solutions for your business</TitleModern>
        <TextDescription>
          We develop powerful CRM systems, mobile applications, and unique IT
          products that help you grow and automate business processes.
        </TextDescription>
        <ContainerButton>
          <Button href="#">
            <IconsStars src={IconStars} alt="Stars" /> Contact Us
          </Button>
        </ContainerButton>

        <TextDevelopment>Our Expertise</TextDevelopment>
        <ContainerExperience>
          <IconsExperience src={Tailored} alt="⚙️" />{' '}
          <TextExperience>Tailored Solutions</TextExperience>
        </ContainerExperience>
        <ContainerExperience>
          <IconsExperience src={Scalable} alt="🎢" />{' '}
          <TextExperience>Scalable Technologies</TextExperience>
        </ContainerExperience>
        <ContainerExperience>
          <IconsExperience src={Proven} alt="🤯" />{' '}
          <TextExperience>Proven Expertise</TextExperience>
        </ContainerExperience>
      </HeroWrapper>
    </>
  );
};

export default Hero;
