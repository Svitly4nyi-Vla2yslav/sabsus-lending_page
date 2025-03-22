import styled from "styled-components";
import { BurgerMenuProps } from "../BurgerMenu/BurgerMenu";

export const HeroContainer = styled.div<{ isopen: boolean }>`
display: ${({ isopen }) => (isopen ? 'none' : 'flex')};
    flex-direction: column;
    align-items: center;
    margin-top: 36px;
    margin-right: 8px

    @media screen and (min-width: 768px){
      margin-top: 54px;
      margin-right: 16px
    }

    @media screen and (min-width: 1244px){
    display: flex;
    }
`;

export const TextBuroScript = styled.p`
font-family: 'Biro Script Plus';
font-weight: 400;
font-size: 16px;
line-height: 1.6875;
color: #1e1e1e;

@media screen and (min-width: 768px){

  font-size: 20px;
  bottom: -14px;
  left: -180px;
  position: relative;

  span {
    position: relative;
    left: -25px;
    bottom: -53px;
  }
}

@media screen and (min-width: 1244px){
  font-size: 24px;
line-height: 167%;
}

@media screen and (min-width: 1440px){
  span {
    position: relative;
    left: -308px;
  }
  left: -213px;
}
`;

export const TextGroteskTitle = styled.h1`
font-family: 'Right Grotesk';
font-weight: 900;
font-size: 44px;

// line-height: 44px; 
line-height: 1;
letter-spacing: 0.01em;
color: #1e1e1e;

@media screen and (min-width: 768px){
  font-weight: 900;
  font-size: 92px;
  line-height: 100%;
  letter-spacing: 0.01em;
  color: #1e1e1e;
  display: flex;
  margin-top: 81px;
  justify-content: space-between;
  flex-direction: row;
  /* flex-wrap: nowrap; */
  gap: 164px;
  margin-left: 34px;
}
@media screen and (min-width: 1244px){
  font-size: 188px;
  gap: 368px;
  margin-left: 0px;
}
`;

export const TextGrotesk = styled.p`
font-family: 'Right Grotesk';
font-weight: 900;
font-size: 16px;
line-height: 1.1875;
color: #fff;

@media screen and (min-width: 768px){
  span{
    color: #1e1e1e;
  }
  
}

@media screen and (min-width: 1440px){
  font-weight: 900;
font-size: 28px;
line-height: 121%;
color: #1e1e1e;
width: 100%;
}
`;

export const HeroImage = styled.img`
width: 216px;
height: 284px;

@media screen and (min-width: 768px) {
position: absolute;
bottom: 352px;
width: 283px;
height: 386px;
margin-right: auto;
 margin-left: auto;
  }
  @media screen and (min-width: 1244px){
width: 511px;
height: 675px;
bottom: 30%;
  }
@media screen and (min-width: 1440px){
  top: 53px;
}  
`;

export const ButtonMeetApes = styled.button`
border-radius: 8px;
padding: 10px 70px 12px 70px;
width: 216px;
height: 41px;
backdrop-filter: blur(12px);
background: rgba(30, 30, 30, 0.2);
border: none;


@media screen and (min-width: 768px){
  border-radius: 12px;
padding: 10px 61px 12px 61px;
width: 190px;
height: 41px;
position: relative;
        bottom: -65px;
        left: 219px;

}

@media screen and (min-width: 1440px){
width: 337px;
height: 70px;
left: 451px;
top: 128px;
}

&:active,
&:hover,
&:focus{
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.6); 
  border: 1px solid lightgray;    
  background: lightgray;
}
`;

export const TextMessina = styled.p`
font-family: 'Messina Sans Mono';
font-weight: 400;
font-size: 12px;
width: 216px;

line-height: 1.16667;
text-transform: uppercase;
text-align: center;
color: #1e1e1e;

@media screen and (min-width: 768px){
position: relative;
line-height: 117%;
text-transform: uppercase;
text-align: justify;
width: 190px;
left: 221px;
bottom: 43px;
text-indent: 30%;
}

@media screen and (min-width: 1440px){
  font-size: 16px;
  line-height: 119%;
  text-transform: uppercase;
  width: 337px;
  left: 451px;
bottom: 33px;
}
`;
