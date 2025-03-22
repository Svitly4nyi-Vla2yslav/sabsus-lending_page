import styled from '@emotion/styled';
import { ContainerProps } from './Header';

export const HeaderContainer = styled.div<{ isopen: boolean }>`
transition-duration: 300ms;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
   padding: 9px;
   background-color: ${({ isopen }) => (isopen ? '#000000' : '#dc3b5a')}; 
    margin: 7px;
    border-radius: 12px;
    height: 542px;

    @media screen and (min-width: 768px){
        height: 421px;
    }
    @media screen and (min-width: 1244px){
        height: 720px;
   background-color: #dc3b5a; 
      
    }

`;

export const Container = styled.div<ContainerProps>`
transition-duration: 150ms;
background-color: ${({ $isScrolled }) =>
        $isScrolled ? "transparent" : "transparent"};

@media screen and (min-width: 1244px){
}
`;

export const Logo = styled.a`
width: 48px;
height: 32px;
`
export const LogoIcon = styled.img`
position: fixed;
    width: 48px;
    height: 32px;
    @media screen and (min-width: 1244px){
        width: 72px;
        height: 50px;  
    }
   
`;


