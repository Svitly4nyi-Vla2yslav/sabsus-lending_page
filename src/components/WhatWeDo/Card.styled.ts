import styled from "styled-components";

export const BackgroundIconContainer = styled.div`
  position: relative;
      bottom: 125px;
  left: 0;
  width: 343px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

 &::after {
      content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 46%;
    background: linear-gradient(0deg, #101010 40%, rgba(16, 16, 16, 0) 100%);
    pointer-events: none;
}
  }
  
`;


export const BackgroundIcon = styled.img`
z-index: 0;

`;

export const IconContainerCard = styled.div`
     position: absolute;
    bottom: 64px;
    left: 13px;
  width: 79px;
  height: 184px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
 
`;

export const PhoneIcon = styled.img`
position: relative;
z-index: 0;
 width: 79px;
  height: 184px;
`;

export const IconContainerCard1 = styled.div`
     position: absolute;
    bottom: 53px;
    left: 108px;
  width: 122px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
 
`;

export const PhoneIcon1 = styled.img`
position: relative;
z-index: 0;
 width: 122px;
  height: 250px;
`; 

export const IconContainerCard2 = styled.div`
        position: absolute;
    bottom: 64px;
    left: 248px;
 width: 79px;
  height: 184px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
 
`;

export const PhoneIcon2 = styled.img`
position: relative;
z-index: 0;
width: 79px;
height: 184px;
`;

export const IconContainerCardCode = styled.div`
     position: absolute;
    bottom: 63px;
    left: 8px;
 width: 343px;
height: 232px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
 
`;

export const PhoneIconCode = styled.img`
position: relative;
z-index: 0;
width: 320px;
height: 291px;
opacity: 0.7;
`; 

export const IconContainerCredit = styled.div`
     position: absolute;
  bottom: 40px;
    left: 20px;
width: 304px;
height: 281px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
 
`;

export const PhoneIconCredit = styled.img`
position: relative;
z-index: 0;
width: 337px;
height: 281px;
`; 

export const CardZipContainer = styled.div`
width: 343px;
height: 232px;
margin-top: 30px;
// padding: 20px 20px 5px 20px;
`;

export const CardSmollContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
gap: 3px;

padding: 20px 20px 5px 20px;
`;

export const SmollCard = styled.div`
border-radius: 19px;
// padding: 12px;
width: 149px;
height: 105px;

box-shadow: 0 0 18px -5px rgba(0, 0, 0, 0.5), inset 0 1px 2px 0 #525154;
background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);
`;

export const EngineIcons = styled.img`
width: 18px;
height: 18px;
margin: 12px;
`;

export const BigCard = styled.div`
border-radius: 19px;
padding-top: 1px;
width: 303px;
height: 106px;
margin: 0 auto;

box-shadow: 0 0 18px -5px rgba(0, 0, 0, 0.5), inset 0 1px 2px 0 #525154;
background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);
`;

export const CardTitel = styled.h5`
font-family: var(--second-family);
font-weight: 500;
font-size: 9px;
line-height: 120%;
color: var(--white);
margin: 5px 12px;
`;

export const CardText = styled.p`
font-family: var(--font4);
font-weight: 400;
font-size: 9px;
line-height: 125%;
color: var(--gray-500);
margin: 5px 12px;
`;


