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
    <HeroWrapper>
      <TextDevelopment>{t('hero.developmentAgency')}</TextDevelopment>
      <TitleModern>{t('hero.title')}</TitleModern>
      <TextDescription>{t('hero.description')}</TextDescription>

      <ContainerButton>
        <Button href="#">
          <IconsStars src={IconStars} alt="Stars" />
          {t('buttons.contact')}
        </Button>
      </ContainerButton>

      <TextDevelopment>{t('hero.expertiseTitle')}</TextDevelopment>

      <ContainerExperience>
        <IconsExperience src={Tailored} alt="⚙️" />
        <TextExperience>{t('expertise.tailored')}</TextExperience>
      </ContainerExperience>

      <ContainerExperience>
        <IconsExperience src={Scalable} alt="🎢" />
        <TextExperience>{t('expertise.scalable')}</TextExperience>
      </ContainerExperience>

      <ContainerExperience>
        <IconsExperience src={Proven} alt="🤯" />
        <TextExperience>{t('expertise.proven')}</TextExperience>
      </ContainerExperience>
    </HeroWrapper>
  );
};

export default Hero;
