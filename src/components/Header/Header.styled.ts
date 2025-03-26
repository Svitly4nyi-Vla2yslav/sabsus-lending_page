import styled from '@emotion/styled';

export const HeaderContainer = styled.div<{ isopen: boolean }>`

`;

export const Logo = styled.a`

width: 152px;
height: 54px;
`;

export const LogoIcon = styled.img`
z-index: 7;
position: fixed;
  width: 152px;
height: 54px;
    @media screen and (min-width: 1244px){
       width: 152px;
height: 54px;
    }
   
`;

export const ContainerBar = styled.div`
display: flex;
    justify-content: space-between;

`;

