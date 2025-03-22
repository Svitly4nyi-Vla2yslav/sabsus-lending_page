import styled from "styled-components";

export const FooterContainer = styled.div`
width: 216px;
margin: 44px auto 16px auto;
@media screen and (min-width: 768px){
width: 100%;
}

@media screen and (min-width: 1440px){
margin-bottom: 24px;
}

`;

export const FooterTitle = styled.h3`
font-weight: 400;
font-size: 12px;

// line-height: 14px; 
line-height: 1.16667;
text-transform: uppercase;
text-align: center;
color: #fff;

@media screen and (min-width: 1440px){
font-size: 16px;
line-height: 119%;
}
`;