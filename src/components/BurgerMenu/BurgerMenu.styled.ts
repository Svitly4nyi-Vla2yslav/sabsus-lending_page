import styled from '@emotion/styled';
import { BurgerMenuProps } from './BurgerMenu';

export const ContainerMenu = styled.ul< { isopen: boolean } >`
  display: ${({ isopen }) => (isopen ? 'flex' : 'none')};
  position: absolute;
  top: 35%;
  left: 0;
  list-style: none;
  padding: 0;
  width: 100%;
  text-align: center;
  text-color: white;
  flex-direction: column;
  align-items: center;

   @media screen and (min-width: 768px){
   top: 12%;
   }

  @media screen and (min-width: 1440px){
    justify-content: center;
    backdrop-filter: blur(12px);
    background: rgba(30, 30, 30, 0.1);
    position: absolute;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-start;
    max-width: 33%;
    top: 40px;
    height: 80px;
    border-radius: 12px;
    left: 58.6%;



&:hover,
&:focus{
  // box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.6); 
  // border: 1px solid lightgray;    
  color: lightgray;
}
  }
`;

export const Link = styled.a< { isopen: boolean } >`
display: flex;
font-size: 11px;
width: 48px;
height: 48px;
cursor: pointer;
border-radius: 12px;
border: none;
border-radius: 8px;
padding: 1px;
backdrop-filter: blur(12px);
background: ${({ isopen }) => (isopen ? "#ffffff" : "rgba(30, 30, 30, 0.3)")};
text-align: center;
flex-direction: column;
justify-content: center;
align-items: center;
 
&:active,
&:hover,
&:focus{
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.6); 
  border: 1px solid lightgray;    
  background: lightgray;
}

@media screen and (min-width: 1440px){
  border-radius: 12px;
width: 80px;
height: 80px;
backdrop-filter: blur(12px);
background: rgba(30, 30, 30, 0.3);
}
`;

export const Image = styled.img`
width: 16px;
backround-color: transparent;


&:focus,
&:hover {
 backround-color: lightgray; 
}
`;

export const ButtonMenu = styled.button`
    background-color: transparent;
    display: flex;
    width: 125px;
    flex-direction: column;
    align-items: center;
    border: none;
  @media screen and (min-width: 1244px){
font-weight: 600;
font-size: 16px;
line-height: 119%;
color: #1e1e1e;
}

`;

export const TextButton = styled.p`
@media screen and (min-width: 1244px){
font-weight: 600;
font-size: 16px;
line-height: 119%;
color: #1e1e1e;
}

`

export const ContainerNetworks = styled.div`
display: flex;
flex-direction: column;
align-content: flex-end;
 flex-wrap: wrap;
 gap : 10px;
 margin-top: 10px;

@media screen and (min-width: 1440px){
 margin-top: 16px;
 gap : 16px;

 
} 
`;

export const MenuItem = styled.li`
color: white;
padding: 10px 0;
background-color: transparent;

@media screen and (min-width: 1244px){
a {
font-weight: 600;
font-size: 16px;
line-height: 119%;
text-transform: uppercase;
color: #1e1e1e;

&:active,
&:hover,
&:focus{
  // box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.6); 
  // border: 1px solid lightgray;    
  color: lightgray;
}
}
}
`;

export const BurgerMenuButton = styled.button`
font-size: 11px;
width: 48px;
height: 48px;
cursor: pointer;
border-radius: 12px;
border: none;
border-radius: 8px;
padding: 1px;
backdrop-filter: blur(12px);
background: rgba(30, 30, 30, 0.3);

&:hover,
&:focus{
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.6); 
  border: 1px solid lightgray;    
  background: lightgray;
}

@media screen and (min-width: 1244px){
  width: 80px;
height: 80px;
}
`;



export const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-content: flex-end;

@media screen and (min-width: 1244px){

margin-right: 24px;
margin-top: 24px;

}

`;