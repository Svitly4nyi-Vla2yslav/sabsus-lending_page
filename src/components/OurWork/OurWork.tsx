import React from 'react';
import {
  OurWorkText,
  OurWorkTitel,
  WorkCardWrapper,
  WorkWrapper,
} from './OurWork.styled';

const OurWork: React.FC = () => {
  return (
    <>
      <WorkWrapper>
        <OurWorkText>Our Work</OurWorkText>
        <OurWorkTitel>
          Discover our projects showcasing expertise in custom IT solutions.
        </OurWorkTitel>
        <WorkCardWrapper>
            
        </WorkCardWrapper>
        <WorkCardWrapper></WorkCardWrapper>
        <WorkCardWrapper></WorkCardWrapper>
        <WorkCardWrapper></WorkCardWrapper>
      </WorkWrapper>
    </>
  );
};

export default OurWork;
