import { StyledIcon } from './Icon.styled';
import  sprite from '../../assets/icons/headerSprite.svg';

import React from 'react';

interface IconProps {
  name: string;
  iconWidth: {
    mobile: string;
    tablet: string;
  };
  iconHeight?: {
    mobile: string;
    tablet: string;
  };
  fill?: string;
  stroke?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  iconWidth,
  iconHeight,
  fill,
  stroke,
  onClick,
}) => {
  return (
    <StyledIcon
      iconWidth={iconWidth}
      iconHeight={iconHeight}
      fill={fill}
      stroke={stroke}
      onClick={onClick}
    >
      <use xlinkHref={`${sprite}#icon-${name}`}></use>
    </StyledIcon>
  );
};

export default Icon;