import styled from "styled-components";


export const MindContainer = styled.div`
margin: 80px auto auto auto;
@media screen and (min-width: 1440px){

}
`

export const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
align-items: center;
 flex-direction: column;

    @media screen and (min-width: 768px){
      overflow: visible;

}
`;

export const TitleMapTablet = styled.h3`
font-family: 'Right Grotesk';
font-weight: 900;
font-size: 80px;
line-height: 100%;
text-transform: uppercase;
color: #fff;
text-align: center;
`;

export const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  margin: 24px -187% 24px 10%;
//   margin-left: 19%;
@media screen and (min-width: 768px){
  margin: 40px auto 24px auto;
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
    align-items: center;
    justify-content: center;
}

`;

export const SlideCard = styled.div`
  flex: 0 0 100%; 
  max-width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  @media screen and (min-width: 768px){
flex: none;
padding : 0;

  }
  
`;

export const SliderButton = styled.button`
//   position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  z-index: 1;

  &:focus,
  &:hover{
      color: #dc3b5a;
  }
  @media screen and (min-width: 768px){
display: none;
  }

`;

export const PrevButton = styled(SliderButton)`
  left: 10px;
  font-family: "Biro Script Plus";
font-weight: 400;
font-size: 24px;
line-height: 1;
color: #fff;
@media screen and (min-width: 768px){

}
`;

export const NextButton = styled(SliderButton)`
right: 10px;
font-family: "Biro Script Plus";
font-weight: 400;
font-size: 24px;
line-height: 1;
color: #fff;


`;

export const CardItem = styled.div`
border-radius: 12px;
padding: 24px 12px;
width: 216px;
height: 242px;
background: #1e1e1e;
display: flex;
flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: stretch;
@media screen and (min-width: 768px){
  width: 284px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  flex-wrap: nowrap;
  justify-content: space-between;
}

@media screen and (min-width: 1440px){
border-radius: 24px;
padding: 24px;
width: 560px;
height: 480px;
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
}
`;

export const ButtonContainer = styled.div`
display: flex;
gap: 48px;

@media screen and (min-width: 768px){

}
`;

export const TextMessinaMap = styled.p`
font-family: 'Messina Sans Mono';
font-weight: 400;
font-size: 12px;
line-height: 1.16667;
text-transform: uppercase;
color: #fff;

@media screen and (min-width: 768px){
width: 128px;
display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;
}

@media screen and (min-width: 1440px){
font-weight: 400;
font-size: 24px;
line-height: 121%;
width: 256px;
}
`;

export const TitleMap = styled.h3`
font-family: 'Right Grotesk';
font-weight: 900;
font-size: 32px;
line-height: 1;
text-transform: uppercase;
color: #fff;
padding-top: 78px;

@media screen and (min-width: 768px){
padding: 0;
display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 77%;
}

@media screen and (min-width: 1440px){
font-weight: 900;
font-size: 64px;
line-height: 100%;
padding-right: 0%;
        width: 512px;
}
`;

export const IconArrow = styled.img`
height: 24px;
width: 24px;

@media screen and (min-width: 1440px){

}
`;