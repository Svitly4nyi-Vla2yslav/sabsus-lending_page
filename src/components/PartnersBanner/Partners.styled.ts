import styled from "styled-components";

export const SwiperContainer = styled.div`
  width: 100vw;
  height: 1%;
  background-color: rgba(0, 0, 0, 0.83); /* півпрозорий фон */
  backdrop-filter: blur(1px); /* ефект blur */
  margin: 40px 0;
  padding: 0px 0px;

  .swiper-wrapper {
    display: flex;
    transition-timing-function: linear !important;
  }
`;



export const ImageContainer = styled.div`
height : 29px;
width: auto;
padding: 0 auto;
margin: 0 auto;
`;

export const Image = styled.img`
height: 29px;
width: auto;
object-fit: contain; 
`;
