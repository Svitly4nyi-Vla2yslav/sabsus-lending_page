import { css } from '@emotion/react';
import { createGlobalStyle } from "styled-components";
import MulishBold from "./assets/fonts/Mulish-Bold.ttf"
import MulishMedium from "./assets/fonts/Mulish-Medium.ttf"
import PoppinsMedium from "./assets/fonts/Poppins-Medium.ttf"
import PoppinsRegular from "./assets/fonts/Poppins-Regular.ttf"
import Helvetica from "./assets/fonts/Helvetica.ttf"
import Inter from "./assets/fonts/Inter_18pt-Regular.ttf"
import Roboto from "./assets/fonts/RobotoFlex-VariableFont_GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf"
//! src: url(${Roboto}) format('truetype');
import styled from 'styled-components';

export const GlobalContainer = styled.div`
  position: relative;
  z-index: 1;
  
  #tsparticles {
    position: fixed;
      z-index: 0 !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

const GlobalStyles = createGlobalStyle`


:root {
	--white: #fff;
	--substrate: #0e0e0e;
	--line: #212121;
	--black-500: #0a0a0a;
	--black-400: #141414;
	--black-350: rgba(0, 0, 0, 0.35);
	--black-350: #1e1e1e;
	--black-500: rgba(24, 24, 27, 0.5);
	--orange-500: #fe5b14;
	--gray-500: rgba(161, 161, 170, 0.8);
	--white-0.2: rgba(255, 255, 255, 0);
	--blue-200: rgba(212, 228, 254, 0.2);
	--red-50: rgba(255, 94, 94, 0.05);
	--red-500: #f00;
	--gray-800: rgba(132, 132, 139, 0.8);
  // ! fonts 
    --font-family: "Roboto Flex", sans-serif;
  --second-family: "Mulish", sans-serif;
  --third-family: "Helvetica", sans-serif;
  --font3: "Poppins", sans-serif;
  --font4: "Inter", sans-serif;
}
@font-face {
  font-family: 'Roboto Flex';
  // src: url(${Roboto}) format('truetype');
}

@font-face {
  font-family: 'MulishBold';
  src: url(${MulishBold}) format('truetype');
}
  @font-face {
  font-family: 'MulishMedium';
  src: url(${MulishMedium}) format('truetype');
}

@font-face {
  font-family: 'Helvetica';
  src: url(${Helvetica}) format('truetype');
}

@font-face {
  font-family: 'PoppinsMedium';
  src: url(${PoppinsMedium}) format('truetype');
}
  @font-face {
  font-family: 'PoppinsRegular';
  src: url(${PoppinsRegular}) format('truetype');
}

@font-face {
  font-family: 'Inter';
  src: url(${Inter}) format('truetype');
}

@keyframes move {
  from {
    tranform: translateX(0%);
  }

  to {
    transform: translateX(-100%);
  }
}
  
  body {
    font-family: 'Roboto Flex', sans-serif;
    background-color: black;
    color: #efedee;
  transition-duration: 300ms;
   overflow: hidden;
  }

  button {
    cursor: pointer;
    transition-duration: 300ms;
  }
  button:focus,
  button:hover {
    // background-color: lightgray; 
    // box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.6); 
  }

  a {
    cursor: pointer;
    transition-duration: 300ms;
    text-decoration: none;
    color: #FFFFFF;
  }
 

  img {
    cursor: pointer;
    transition-duration: 300ms;
  }



  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
 {
  font-family: 'Roboto Flex';
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  html {
    // overflow-x: hidden;
    scroll-behavior: smooth;
   
    }
 
`;


export default GlobalStyles;