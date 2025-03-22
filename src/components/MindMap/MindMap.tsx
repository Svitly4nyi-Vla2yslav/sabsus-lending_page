import React from 'react';
import { Slider } from './Slider';
import {
  CardItem,
  IconArrow,
  MindContainer,
  TextMessinaMap,
  TitleMap,
  TitleMapTablet,
} from './MindMap.styled';
import Arrow from '../../assets/icons/arrow.svg';
import { useMediaQuery } from 'react-responsive';

const MindMap: React.FC = () => {
  const Break = () => <br />;
  const isMobile = useMediaQuery({ query: '(max-width: 767px' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1439px)' });
  return (
    <MindContainer id="mind-map">
      {isMobile || <TitleMapTablet>MIND MAP</TitleMapTablet>}
      <Slider>
        <CardItem>
          <TextMessinaMap>
            All owners of APE NFTs and all future collections will receive a
            percentage of sales based on the number of NFTs they own
          </TextMessinaMap>
          <TitleMap>YAPE DROP</TitleMap>
        </CardItem>
        <CardItem>
          <TextMessinaMap>
            Launch of the 2nd YACHT Collection Releasing the first version of
            the Ape Slam Game
          </TextMessinaMap>
          <TitleMap>New Collection</TitleMap>
        </CardItem>
        <CardItem>
          <TextMessinaMap>
            Launch your own token, the proceeds of which will go to a global
            fund to LAUNCH YACHT CLUB AND PROMOTE it
          </TextMessinaMap>
          <TitleMap>Token</TitleMap>
        </CardItem>
        <CardItem style={{ background: '#dc3b5a' }}>
          <TextMessinaMap>
            <a href="https://www.linkedin.com/in/vladyslav-svitlychnyi/">
              <IconArrow src={Arrow} alt="↗️" />
            </a>
          </TextMessinaMap>
          <TitleMap>
            Learn{isMobile || <Break />}more{isMobile || <Break />}in mind map
          </TitleMap>
        </CardItem>
      </Slider>
    </MindContainer>
  );
};

export default MindMap;
