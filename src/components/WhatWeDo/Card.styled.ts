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
    background: linear-gradient(0deg, #101010 54%, rgba(16, 16, 16, 0) 100%);
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
