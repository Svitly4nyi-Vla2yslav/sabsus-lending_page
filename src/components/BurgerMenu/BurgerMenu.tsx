import React from 'react';

import {
  BurgerMenuButton,
  ButtonMenu,
  ContainerMenu,
  ContainerNetworks,
  MenuItem,
  TextButton,
  Wrapper,
} from './BurgerMenu.styled';


export interface BurgerMenuProps {
  isopen?: boolean;
  toggleMenu?: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isopen, toggleMenu }) => {
  return (
    <Wrapper>
      {/* <BurgerMenuButton onClick={toggleMenu}>
        <TextButton> {isopen ? 'CLOSE' : 'MENU'}</TextButton>
      </BurgerMenuButton> */}
      <ContainerMenu isopen={false}    //   isopen={isopen}
      >
        {/* <ButtonMenu>
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
        </ButtonMenu> */}
      </ContainerMenu>
      <ContainerNetworks>
      
      </ContainerNetworks>
    </Wrapper>
  );
};

export default BurgerMenu;
