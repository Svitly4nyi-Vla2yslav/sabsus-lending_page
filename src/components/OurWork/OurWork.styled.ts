import styled from "styled-components";

export const WorkWrapper = styled.div`
 display: flex;
    width: 343px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin: 80px auto;
`;

export const OurWorkText = styled.h3`
font-family: var(--font-family);
font-weight: 500;
font-size: 18px;
line-height: 135%;
background: linear-gradient(168deg, #fff 0%, #fe5b14 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
padding-bottom: 10px;
`;

export const OurWorkTitel = styled.h2`
font-family: "Mulish", sans-serif;
font-weight: 700;
font-size: 28px;
line-height: 115%;
letter-spacing: -0.04em;
color: var(--white);
padding-bottom: 20px;
`;

export const WorkCardWrapper = styled.div`
border: 1px solid var(--line);
border-radius: 16px;
width: 100%;
height: 409px;
box-shadow: 0 0 0 0 var(--white), 
0 0 0 1px rgba(244, 244, 245, 0.1),
 0 0 0 0 rgba(0, 0, 0, 0), 
 0 6px 9px 0 rgba(0, 0, 0, 0.25);
background: var(--substrate);
    z-index: 0;
    margin-bottom: 12px;
     overflow: hidden;
`;



export const WorkCardTitle = styled.h4`
font-family: var(--second-family);
font-weight: 500;
font-size: 18px;
line-height: 125%;
color: var(--white);
margin:  15px 20px;

`;

export const WorkCardText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
line-height: 137%;
color: var(--gray-500);
margin: 10px 20px;

`;

export const WorkShadowContainer = styled.div`
  position: relative;
      bottom: 125px;
  left: 0;
  width: 343px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  // margin-top: 20px;

 &::after {
      content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
  background: linear-gradient(0deg, #101010 0%, rgba(16, 16, 16, 0) 100%), linear-gradient(0deg, #101010 0%, rgba(16, 16, 16, 0) 100%), linear-gradient(0deg, #101010 0%, rgba(16, 16, 16, 0) 100%);
    pointer-events: none;
}
}
  
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
 margin-left:10px;
`;

export const IconOne = styled.img`
position: relative;
z-index: 0;
    width: 96px;
    height: 209px;
`;

export const IconContainerCard1 = styled.div`
     position: absolute;
       top: 134px;
    left: 123px;
    width: 96px;
    height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
 
`;

export const IconSecond = styled.img`
position: relative;
z-index: 0;
width: 96px;
height: auto;
`; 

export const IconContainerCard2 = styled.div`
position: absolute;
 bottom: 55px;
left: 240px;
width: 79px;
height: 184px;
display: flex;
justify-content: center;
align-items: center;
  z-index: 0;
 
`;

export const IconThierd = styled.img`
position: relative;
z-index: 0;
width: 96px;
height: auto;
`;

export const IconCreditServices = styled.div`
     position: absolute;
  top: 110px;
    left: 20px;
width: 304px;
height: 281px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
 
`;  

export const PhoneCreditServices = styled.img`
position: relative;
z-index: 0;
width: 303px;
    height: auto;
`;  
  

