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
import Image1 from '../../assets/image/image 1-min.png';
import Image2 from '../../assets/image/image 2-min.png';
import Image3 from '../../assets/image/image 3-min.png';
import Image4 from '../../assets/image/image 4-min.png';
import Image5 from '../../assets/image/image 5-min.png';
import Image6 from '../../assets/image/10.png';
import Image7 from '../../assets/image/11.png';
import Image8 from '../../assets/image/12.png';
import Image9 from '../../assets/image/13.png';
import Image10 from '../../assets/image/14.png';
import Image11 from '../../assets/image/15.png';
import Image12 from '../../assets/image/16.png';
import Image13 from '../../assets/image/17.png';
import Image14 from '../../assets/image/18.png';
import Image15 from '../../assets/image/19.png';
import Image16 from '../../assets/image/20.png';
import Image17 from '../../assets/image/21.png';
import Image18 from '../../assets/image/6.png';
import Image19 from '../../assets/image/7.png';
import Image20 from '../../assets/image/8.png';
import Image21 from '../../assets/image/9.png';

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
        <ImageItem>
          <ImageCard src={Image1} alt="Image 1" />
        </ImageItem>
        <ImageItem>
          <ImageCard src={Image2} alt="Image 2" />
        </ImageItem>
        <ImageItem>
          <ImageCard src={Image3} alt="Image 3" />
        </ImageItem>
        <ImageItem>
          <ImageCard src={Image4} alt="Image 3" />
        </ImageItem>{' '}
        <ImageItem>
          <ImageCard src={Image5} alt="Image 3" />
        </ImageItem>{' '}
        <ImageItem>
          <ImageCard src={Image6} alt="Image 3" />
        </ImageItem>{' '}
        <ImageItem>
          <ImageCard src={Image7} alt="Image 3" />
        </ImageItem>{' '}
        <ImageItem>
          <ImageCard src={Image8} alt="Image 3" />
        </ImageItem>{' '}
        <ImageItem>
          <ImageCard src={Image9} alt="Image 3" />
        </ImageItem>{' '}
        <ImageItem>
          <ImageCard src={Image10} alt="Image 3" />
        </ImageItem>{' '}
        <ImageItem>
          <ImageCard src={Image11} alt="Image 3" />
        </ImageItem>{' '}
        <ImageItem>
          <ImageCard src={Image12} alt="Image 3" />
        </ImageItem>{' '}
        <ImageItem>
          <ImageCard src={Image13} alt="Image 3" />
        </ImageItem>{' '}
        <ImageItem>
          <ImageCard src={Image14} alt="Image 3" />
        </ImageItem>{' '}
        <ImageItem>
          <ImageCard src={Image15} alt="Image 3" />
        </ImageItem>{' '}
        <ImageItem>
          <ImageCard src={Image16} alt="Image 3" />
        </ImageItem>{' '}
        <ImageItem>
          <ImageCard src={Image17} alt="Image 3" />
        </ImageItem>{' '}
        <ImageItem>
          <ImageCard src={Image18} alt="Image 3" />
        </ImageItem>{' '}
        <ImageItem>
          <ImageCard src={Image19} alt="Image 3" />
        </ImageItem>
        <ImageItem>
          <ImageCard src={Image20} alt="Image 3" />
        </ImageItem>
        <ImageItem>
          <ImageCard src={Image21} alt="Image 3" />
        </ImageItem>
      </Carousel>

      <ButtonContainer>
        {prevButton}
        {nextButton}
      </ButtonContainer>
    </ArtsContainer>
  );
};

export default Arts;
