import React from 'react';
import { Carousel, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { CarouselRef } from 'antd/lib/carousel';
import {
  ArtsContainer,
  ButtonContainer,
  ButtonText,
  ImageCard,
  ImageItem,
  TitleText,
} from './Arts.styled';


const Arts: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDekstop = useMediaQuery({ minWidth:1440})

  let slidesToShow = 4;

  if (isMobile) {
    slidesToShow = 1;
  } else if (isTablet) {
    slidesToShow = 2;
  } else if (isDekstop) {
    slidesToShow = 4;
  }

  const carouselRef = React.useRef<CarouselRef>(null);
  const prevButton = (
    <Button onClick={() => carouselRef.current?.prev()}>
      <ButtonText>Prev</ButtonText>
    </Button>
  );
  const nextButton = (
    <Button onClick={() => carouselRef.current?.next()}>
      <ButtonText>Next</ButtonText>
    </Button>
  );

  return (
    <ArtsContainer id="arts">
      <TitleText>COLLECTION</TitleText>
      <Carousel
        ref={carouselRef}
        slidesToShow={slidesToShow}
        draggable
        dots={false}
        infinite={false}
        style={{ marginLeft: '22%', background: "none", borderColor: "transparent" }}
      >
       
      </Carousel>

      <ButtonContainer>
        {prevButton}
        {nextButton}
      </ButtonContainer>
    </ArtsContainer>
  );
};

export default Arts;
