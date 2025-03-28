import styled from "styled-components";

export const HeroWrapper = styled.div`
 position: absolute;
 top: 100px;
    display: flex;
    width: 343px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin: 0 1vh ;
   
`;

export const TextDevelopment = styled.h3`
font-family: var(--font-family);
font-weight: 500;
font-size: 16px;
padding-bottom: 8px;
padding-top: 32px;

background: linear-gradient(180deg, #eaeaea 0%, rgba(234, 234, 234, 0) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const TitleModern = styled.h1`
font-family: "MulishBold";
font-weight: 700;
font-size: 36px;
padding-bottom: 24px;
line-height: 105%;
background: linear-gradient(134deg, #fff 0%, #fe5b14 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
    filter: blur(0.1px);

 text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.51), 
               0px 0px 12px rgba(255, 178, 150, 0.06);
`;


export const TextDescription = styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 18px;
line-height: 135%;
color: var(--white);
padding-bottom: 24px;

`;

export const IconsExperience = styled.img`
width: 20px;
margin: 4px;
`;
export const ContainerExperience = styled.div`
display: flex;
`;

export const TextExperience = styled.p`
font-family: 'Roboto Flex';
font-weight: 400;
font-size: 15px;
line-height: 187%;
color: #f2f2f2;
`;

export const ContainerButton = styled.div`
padding: 0 auto;
padding-bottom: 24px;
width: 166px;
height: 44px;

`;
