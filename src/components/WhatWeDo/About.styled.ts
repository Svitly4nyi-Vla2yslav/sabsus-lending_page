import styled from "styled-components";
import Icon from '../Icon/Icon';

export const AboutWrapper = styled.div`
 display: flex;
    width: 343px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin: 0 1vh ;
`;

export const TextAboutUs = styled.h3`
font-family: var(--font-family);
font-weight: 500;
font-size: 18px;
line-height: 135%;
background: linear-gradient(168deg, #fff 0%, #fe5b14 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const AboutTitle = styled.h2`
font-family: "Mulish", sans-serif;
font-weight: 700;
font-size: 28px;
line-height: 115%;
letter-spacing: -0.04em;
color: var(--white);
`;

export const ComprehensiveContainer = styled.div`
border: 1px solid var(--line);
border-radius: 16px;
width: 343px;
height: 397px;
box-shadow: 0 0 0 0 var(--white), 
0 0 0 1px rgba(244, 244, 245, 0.1),
 0 0 0 0 rgba(0, 0, 0, 0), 
 0 6px 9px 0 rgba(0, 0, 0, 0.25);
background: var(--substrate), url("path_to_image");
`;

export const IconContainer = styled.div`
border: 1px solid #303038;
border-radius: 12px;
width: 64px;
height: 64px;
box-shadow: 0 0 18px -5px rgba(0, 0, 0, 0.5),
 inset 0 1px 2px 0 #525154;
background: var(--black-400);
`;

export const ComprehensiveTitle = styled.h4`
font-family: var(--second-family);
font-weight: 500;
font-size: 18px;
line-height: 125%;
color: var(--white);
`;

export const ComprehensiveText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 17px;
line-height: 137%;
color: var(--gray-500);
`;

// ! TotalDepositContainer
export const TotalDepositContainer = styled.div`
border: 0.25px solid #444;
border-radius: 3px;
width: 70px;
height: 31px;
box-shadow: 0 0 0 0 var(--white), 0 0 0 0px rgba(244, 244, 245, 0.1), 0 0 0 0 rgba(0, 0, 0, 0), 0 3px 4px 0 rgba(0, 0, 0, 0.25);
background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);
`;

export const TotalDepositText = styled.p`
font-family: var(--font-family);
font-weight: 200;
font-size: 3px;
line-height: 150%;
color: var(--white);
`;

export const PriseText = styled.p`
font-family: var(--font-family);
font-weight: 200;
font-size: 5px;
line-height: 135%;
color: var(--white);
`;

export const DollarSpan = styled.button`
border-radius: 2px;
width: 9px;
height: 9px;
background: linear-gradient(90deg, #ed1816 0%, #f84215 63.35%, #fe5b14 100%);
`;

export const DollarIcon = styled.img`
width: 2px;
height: 4px;
`;

export const GrafikIcon = styled.img`
stroke-width: 0.50px;
stroke: #ff5e5e;
`;



// ! AllProjectsTitle 

export const AllProjectsTitle = styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 3px;
line-height: 150%;
color: var(--white);
`;

export const AllProjectsText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 3px;
line-height: 150%;
color: var(--gray-500);
`;

export const AllProjectsSpann = styled.span`
width: 2px;
height: 2px;
background: linear-gradient(90deg, #ed1816 0%, #f84215 63.35%, #fe5b14 100%);

`;

export const ProzentIcon = styled.img`
width: 21px;
height: 21px;
`;

// ! Expenses

export const GrafikIconRed = styled.img`
stroke-width: 0.50px;
stroke: #ff5e5e;
`;
// ! projects overview 

export const ProjectsOverviewContainer = styled.div`
border: 0.25px solid #444;
border-radius: 3px;
width: 198px;
height: 110px;

box-shadow: 0 0 0 0 var(--white), 0 0 0 0px rgba(244, 244, 245, 0.1), 0 0 0 0 rgba(0, 0, 0, 0), 0 3px 4px 0 rgba(0, 0, 0, 0.25);
background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);
`;

export const ProjectsOverviewText = styled.p`
font-family: var(--font-family);
font-weight: 300;
font-size: 3px;
line-height: 150%;
color: var(--white);
`;

export const ProjectsOverviewSpanRed = styled.span`
border-radius: 1px;
padding: 1px 3px 1px 3px;
width: 16px;
height: 7px;

box-shadow: 0 0 5px 0 rgba(13, 153, 255, 0.2), inset 0 0px 1px 0 #525154, 0 0 7px -2px rgba(0, 0, 0, 0.5);
background: linear-gradient(90deg, #ed1816 0%, #f84215 63.35%, #fe5b14 100%);
`;


export const ProjectsOverviewSpan = styled.span`
border-radius: 1px;
padding: 1px 3px 1px 3px;
width: 16px;
height: 7px;

box-shadow: inset 0 0px 1px 0 #525154, 0 0 7px -2px rgba(0, 0, 0, 0.5);
background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);`;

// ! My To Do Items 

export const MyToDoItemsContainer = styled.div`
border: 0.25px solid #444;
border-radius: 3px;
width: 96px;
height: 110px;

box-shadow: 0 0 0 0 var(--white), 0 0 0 0px rgba(244, 244, 245, 0.1), 0 0 0 0 rgba(0, 0, 0, 0), 0 3px 4px 0 rgba(0, 0, 0, 0.25);
background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);
`;



