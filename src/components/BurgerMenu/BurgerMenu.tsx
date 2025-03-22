import React from 'react';

import {
  BurgerMenuButton,
  ButtonMenu,
  ContainerMenu,
  ContainerNetworks,
  Image,
  Link,
  MenuItem,
  TextButton,
  Wrapper,
} from './BurgerMenu.styled';
import discord from '../../assets/icons/discord_logo.svg';
import ship from '../../assets/icons/ship.svg';
import x from '../../assets/icons/X.svg';

export interface BurgerMenuProps {
  isopen?: boolean;
  toggleMenu?: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isopen, toggleMenu }) => {
  return (
    <Wrapper>
      <BurgerMenuButton onClick={toggleMenu}>
        <TextButton> {isopen ? 'CLOSE' : 'MENU'}</TextButton>
      </BurgerMenuButton>
      <ContainerMenu isopen={isopen}>
        <ButtonMenu>
          <MenuItem>
            <a href="#about" target="_self">
              ABOUT
            </a>{' '}
          </MenuItem>
        </ButtonMenu>
        <ButtonMenu>
          <MenuItem>
            <a href="#mind-map" target="_self">
              MIND-MAP
            </a>{' '}
          </MenuItem>
        </ButtonMenu>
        <ButtonMenu>
          <MenuItem>
            <a href="#faq" target="_self">
              FAQ
            </a>{' '}
          </MenuItem>
        </ButtonMenu>
        <ButtonMenu>
          <MenuItem>
            <a href="#arts" target="_self">
              ARTS
            </a>{' '}
          </MenuItem>
        </ButtonMenu>
        <ButtonMenu>
          <MenuItem>
            <a href="#mint" target="_self">
              MINT
            </a>{' '}
          </MenuItem>
        </ButtonMenu>
      </ContainerMenu>
      <ContainerNetworks>
        <Link href="#" isopen={isopen}>
          <Image src={discord} alt="📱" />
        </Link>
        <Link href="#" isopen={isopen}>
          <Image src={ship} alt="🚢" />
        </Link>
        <Link href="#" isopen={isopen}>
          <Image src={x} alt="✖️" />
        </Link>
      </ContainerNetworks>
    </Wrapper>
  );
};

export default BurgerMenu;
