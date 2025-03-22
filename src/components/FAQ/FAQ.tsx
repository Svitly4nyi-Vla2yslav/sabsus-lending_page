import React, { CSSProperties } from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import {
  ContainerColection,
  ImageCollapse,
  ItemText,
  NumberTitle,
  Title,
  TitleItem,
  TitleList,
} from './FAQ.styled';
import ImageFirst from '../../assets/image/8.png';
import ImageSecond from '../../assets/image/14.png';
import ImageThird from '../../assets/image/16.png';
import ImageFourth from '../../assets/image/11.png';
import { useMediaQuery } from 'react-responsive';

const FAQ: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const panelStyle: React.CSSProperties = {
    border: 'none',
    borderRadius: '12px',
  };

  const getItems: (
    panelStyle: CSSProperties,
    isMobile: boolean
  ) => CollapseProps['items'] = (panelStyle, isMobile) => [
    {
      key: '1',
      label: (
        <TitleList>
          <NumberTitle>[ 1 ]</NumberTitle>
          <TitleItem>WHAT IS AN NFT COLLECTION?</TitleItem>
        </TitleList>
      ),
      children: (
        <>
          <ItemText>
            {' '}
            {isMobile || <ImageCollapse src={ImageFirst} alt="manky" />}
            An NFT collection is a group of unique digital assets, each
            represented by a non-fungible token, typically created around a
            specific theme or style.
          </ItemText>
        </>
      ),
      showArrow: false,
      style: panelStyle,
    },
    {
      key: '2',
      label: (
        <TitleList>
          <NumberTitle>[ 2 ]</NumberTitle>
          <TitleItem>HOW DO I PURCHASE NFTS FROM A COLLECTION?</TitleItem>
        </TitleList>
      ),
      children: (
        <>
          <ItemText>
            {isMobile || <ImageCollapse src={ImageSecond} alt="manky" />}
            To purchase nfts from a collection, you typically need to use
            cryptocurrency on a blockchain-based marketplace.
          </ItemText>
        </>
      ),
      showArrow: false,
      style: panelStyle,
    },
    {
      key: '3',
      label: (
        <TitleList>
          {' '}
          <NumberTitle>[ 3 ]</NumberTitle>
          <TitleItem>CAN I SELL OR TRADE NFTS FROM A COLLECTION?</TitleItem>
        </TitleList>
      ),
      children: (
        <ItemText>
          {isMobile || <ImageCollapse src={ImageThird} alt="manky" />}
          To purchase nfts from a collection, you typically need to use
          cryptocurrency on a blockchain-based marketplace.
        </ItemText>
      ),
      showArrow: false,
      style: panelStyle,
    },
    {
      key: '4',
      label: (
        <TitleList>
          {' '}
          <NumberTitle>[ 4 ]</NumberTitle>
          <TitleItem>WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?</TitleItem>
        </TitleList>
      ),
      children: (
        <ItemText>
          {isMobile || <ImageCollapse src={ImageFourth} alt="manky" />}
          As an NFT owner, you can own, transfer, potentially access exclusive
          content, resell, but don't automatically get copyright or intellectual
          property rights.
        </ItemText>
      ),
      showArrow: false,
      style: panelStyle,
    },
  ];

  return (
    <ContainerColection style={{ marginBottom: '60px', position: 'relative' }}>
      <Title id="faq">FAQ</Title>
      <Collapse
        accordion
        ghost
        defaultActiveKey={['1']}
        bordered={false}
        onChange={onChange}
        items={getItems(panelStyle, isMobile)}
      />
    </ContainerColection>
  );
};

export default FAQ;
