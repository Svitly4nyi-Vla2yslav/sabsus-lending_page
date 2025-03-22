import styled from "styled-components";

export const ImageCollapse = styled.img`
position: absolute;
width: 148px;
height: 183px;
transform: rotate(-16deg);
object-fit: cover;
border-radius: 16px;
bottom: -20%;
    left: -63%;

@media screen and (min-width: 1440px){
width: 248px;
height: 306px;
}
    
`;

export const ContainerColection = styled.div`
:where(.css-dev-only-do-not-override-1kuana8).ant-collapse>.ant-collapse-item {
    border: none !important;

   max-width: 100%;
margin: 0px 72px;
transition-duration: 300ms;
@media screen and (min-width: 768px){
display: grid;
    justify-content: center;
    justify-items: center;
}
@media screen and (min-width: 1440px){
display: flex;
        justify-items: end;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-end;
        align-items: flex-end;
}
}
:where(.css-dev-only-do-not-override-1kuana8).ant-collapse-borderless >.ant-collapse-item:last-child,
 :where(.css-dev-only-do-not-override-1kuana8).ant-collapse-borderless >.ant-collapse-item:last-child,
  .ant-collapse-header {
    border-radius: 12px;
}


 .ant-collapse-item-active{
    border-radius: 12px;
    background: #1e1e1e;
    padding: 8px 8px;
 }

 .a-DMjG :where(.css-dev-only-do-not-override-1kuana8).ant-collapse>.ant-collapse-item {
   
    border-radius: 12px;
}

:where(.css-1kuana8).ant-collapse-ghost {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bikQaF .ant-collapse-item-active {
    border-radius: 12px;
    background: rgb(30, 30, 30);
    padding: 8px;
    width: 65%;


&:active{
    border-radius: 12px;
    background: #1e1e1e;  
}

:where(.css-1kuana8).ant-collapse-borderless >.ant-collapse-item:last-child {
    border-radius: 12px;
    margin-bottom: 60px;
}

:where(.css-1kuana8).ant-collapse-borderless >.ant-collapse-item:last-child, :where(.css-1kuana8).ant-collapse-borderless >.ant-collapse-item:last-child .ant-collapse-header {
    border-radius: 12px;
}

&:active{
    border-radius: 12px;
    background: #1e1e1e;  
}
margin-bottom: 60px;

:where(.css-dev-only-do-not-override-1kuana8).ant-collapse>.ant-collapse-item >.ant-collapse-header {
   
    padding: 12px 10px !important;
}
`;

export const TitleList = styled.ul`
width: 100%;
display: flex;
@media screen and (min-width: 768px){

}

`;

export const Title = styled.h2`
font-family: 'Right Grotesk';
font-weight: 900;
font-size: 44px;
line-height: 0.90909;
text-transform: uppercase;
color: #fff;
text-align: center;
padding-top: 60px;
padding-bottom: 24px;
@media screen and (min-width: 768px){
font-weight: 900;
font-size: 80px;
line-height: 100%;
}

@media screen and (min-width: 1440px){
font-size: 160px;
padding-bottom: 80px;
padding-top: 120px;
}
`;

export const TitleItem = styled.li`
font-family: 'Right Grotesk';
font-weight: 900;
font-size: 20px; 
line-height: 1;
text-transform: uppercase;
color: #fff;
// text-align: ;
width: 160px;

&:hover,
&:active{
    color: #dc3b5a;
    background: #1e1e1e;
    border-radius: 12px;
}

@media screen and (min-width: 1440px){
font-size: 64px;
width: 700px;
}
`;



export const ItemText = styled.p`
font-family: 'Messina Sans Mono';
font-weight: 400;
font-size: 12px;
line-height: 1.16667;
text-transform: uppercase;
color: #fff;
background: #1e1e1e;
width: 100%;
padding: 8px 6px;
padding-top: 10px
border-radius: 12px;

@media screen and (min-width: 768px){
    position: relative;
    text-align: left;
    margin-left: 38%;
    width: 65%;
}

@media screen and (min-width: 1440px){
font-size: 16px;
line-height: 119%;
width: 56%;
}
`;

export const NumberTitle = styled.span`
font-family: "Biro Script Plus";
font-weight: 400;
font-size: 12px; 
line-height: 1.66667;
color: #dc3b5a;
padding: 8px 10px 8px 0;

&:hover,
&:active{
    color: #fff;

}

@media screen and (min-width: 1440px){
font-size: 24px;
line-height: 167%;
}
`;



export const NumberTitleText = styled.span`

`;
