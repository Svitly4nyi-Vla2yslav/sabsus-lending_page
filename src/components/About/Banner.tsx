import React from 'react';
import text from './text.json';
import {
  BanerWraper,
  MarqueeContainer,
  MarqueeText,
  MarqueeTextItem,
} from './About.styled';

const Banner: React.FC = () => {
  const { slogans } = text;
  return (
    <>
      {' '}
      <MarqueeContainer>
        {slogans.map((slogan, index) => (
          <MarqueeTextItem key={index}>
            <MarqueeText>{slogan}</MarqueeText>
          </MarqueeTextItem>
        ))}
      </MarqueeContainer>
    </>
  );
};

export default Banner;
