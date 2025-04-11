import { css } from '@emotion/react';
import 'modern-normalize/modern-normalize.css';
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
  // position: relative;
  z-index: 1;
  
  #tsparticles {
    // position: fixed;
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
    --toastify-color-success: #FE5B14;
  --toastify-color-error: #ff4d4f;
  --toastify-font-family: var(--font-family);
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

  * {
    // margin: 0;
    // padding: 0;
    // box-sizing: border-box;
    // --v1: calc(max(9vw, 11vh));
    scrollbar-width: none;
     word-wrap: break-word;
  }
    html, body {
  height: -webkit-fill-available;
  font-smoothing: antialiased;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

body::-webkit-scrollbar {
  display: none;
}
  
  body {
    font-family: 'Roboto Flex', sans-serif;
    background-color: black;
    color: #efedee;
  transition-duration: 300ms;

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
   cursor: default
    transition-duration: 300ms;
  }

.Toastify__toast-container {
  z-index: 999999 !important;
  position: fixed !important;
}

.Toastify__toast {
  pointer-events: auto !important;
  max-width: 400px;
  margin: 0 auto;
}

#toast-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10000;
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
    z-index: 0;
  }

    input, textarea, select {
    cursor: text; // 👈 логічно для полів вводу
  }

    label {
    cursor: pointer; // 👈 якщо прив’язаний до input[type="checkbox"] або radio
  }

  svg:hover,
  .icon:hover {
    cursor: pointer; // 👈 коли користувач наводить на SVG-іконки
  }

  [disabled] {
    cursor: not-allowed; // 👈 якщо елемент неактивний
  }

  .draggable {
    cursor: grab; // 👈 наприклад, для перетягування
  }

  .draggable:active {
    cursor: grabbing;
  }

// ! AOS Fixes */
// [data-aos] {
//   /* Фікс для мобільних */
//   @media (max-width: 767px) {
//     transform: none !important;
//     opacity: 1 !important;
//     transition: none !important;
//   }
  
//   /* Скидання стилів після анімації */
//   &.aos-animate {
//     transform: none !important;
//     animation-fill-mode: forwards;
//   }
// }
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
  cursor: default
  }

  html {
    // overflow-x: hidden;
    scroll-behavior: smooth;
   
    }

`;


export default GlobalStyles;