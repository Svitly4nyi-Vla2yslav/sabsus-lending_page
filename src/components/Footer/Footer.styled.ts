import styled from "styled-components";

export const FooterContainer = styled.div`
display: flex
;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;
    height: 221px;
    margin-bottom: 28px;
    flex-wrap: wrap;
    align-content: flex-start;

    &::after {
  
}
`;

export const FooterTitle = styled.h3`
font-family: var(--font-family);
font-weight: 400;
font-size: 18px;
line-height: 135%;
text-align: center;
color: var(--white);
margin-bottom: 20px;
// position: relative;
// z-index: 1;
`;

export const FooterIcon = styled.img`
width: 343px;
height: 80px;
position: absolute;
color : linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);
backdrop-filter: blur(10px);
`;

export const BackgroundIconContainer = styled.div`
  position: relative;
      bottom: 50px;
  left: 0;
      width: 100%;

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
    height: 40%;
       background: linear-gradient(184deg, #101010 -420%, rgba(16, 16, 16, 0) 100%);
    pointer-events: none;
}
  }
  
`;