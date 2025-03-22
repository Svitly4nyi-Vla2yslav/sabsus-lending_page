import styled from "styled-components";

export const ArtsContainer = styled.div`
:where(.css-dev-only-do-not-override-1kuana8).ant-btn-default {
    background: none;
    border-color: transparent;
    color: #ffffff;
    padding: 24px;
}

:where(.css-dev-only-do-not-override-1kuana8).ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    border-color: transparent;
    background: transparent;
    color: #dc3b5a;
}

:where(.css-1kuana8).ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    color: #dc3b5a;
    border-color: transparent;
    background: none;
}
 
:where(.css-1kuana8).ant-btn-default:not(:disabled):not(.ant-btn-disabled):active {
    color: #dc3b5a;
    border-color: transparent;
    background: none;
}

:where(.css-1kuana8).ant-btn-default {
    background: none;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.88);
    box-shadow: 0 0px 0 rgba(0, 0, 0, 0.00);
}
margin-bottom: 60px;

@media screen and (min-width: 768px){
    :where(.css-dev-only-do-not-override-1kuana8).ant-carousel {
        margin-right: 10%;
    }
    }
@media screen and (min-width: 1024px){
        :where(.css-dev-only-do-not-override-1kuana8).ant-carousel {
           
            margin-left: -14%;
        }
        }
@media screen and (min-width: 1440px){
        :where(.css-dev-only-do-not-override-1kuana8).ant-carousel {
           
            margin-left: -12%;
        }

        margin-top: 120px;
        margin-bottom: 120px;
        }

`;

export const TitleText = styled.h3`
font-family: "Right Grotesk";
font-weight: 900;
font-size: 44px; 
line-height: 0.90909;
text-transform: uppercase;
color: #fff;
text-align: center;
padding-bottom: 24px;

@media screen and (min-width: 768px){
font-size: 80px;
}

@media screen and (min-width: 1440px){
font-size: 160px;
padding-bottom: 80px;

}
`;

export const ButtonText = styled.p`
font-family: "Biro Script Plus";
font-weight: 400;
font-size: 24px;
line-height: 1.25;
color: #fff;

&:active,
&:focus,
&:hover{
    color: #dc3b5a
}

@media screen and (min-width: 768px){

}
`;



export const ImageItem = styled.div`
@media screen and (min-width: 1024px){

    }
`;

export const ImageCard = styled.img`

border-radius: 12px;
width: 216px;
height: 256px;
object-fit: cover;

@media screen and (min-width: 1440px){
width: 274px;
height: 320px;
border-radius: 24px;
}
`;

export const ButtonContainer = styled.div`
display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
 @media screen and (min-width: 768px){

}

`;


