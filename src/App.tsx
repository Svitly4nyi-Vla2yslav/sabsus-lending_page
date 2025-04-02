import { Global } from '@emotion/react';
import GlobalStyles, { GlobalContainer } from './App.styled';
import React from 'react';
import Header from './components/Header/Header';

import ParticlesBackground from './components/StarrySky/StarrySky';
import { GradientWrapper } from './components/StarrySky/GradientBackground';
import Hero from './components/Hero/Hero';
import About from './components/WhatWeDo/About';
import Partners from './components/PartnersBanner/Banner';
import Services from './components/OurServices/Services';
import OurWork from './components/OurWork/OurWork';
const App = () => {
  return (
    <GlobalContainer>
      <GradientWrapper />

      <ParticlesBackground />
      <GlobalStyles />
      <Header />
      <Hero />
      <About />
      <Partners/>
      <Services/>
      <OurWork/>
    </GlobalContainer>
  );
};

export default App;
