import { Global } from '@emotion/react';
import GlobalStyles, { GlobalContainer } from './App.styled';
import React from 'react';
import Header from './components/Header/Header';
// import About from './components/About/About';
// import MindMap from './components/MindMap/MindMap';
// import FAQ from './components/FAQ/FAQ';
// import Arts from './components/Arts/Arts';
// import ContactUs from './components/ContactUs/ContactUs';
// import Footer from './components/Footer/Footer';
import ParticlesBackground from './components/StarrySky/StarrySky';
import { GradientWrapper } from './components/StarrySky/GradientBackground';
// import { GlobalContainer } from './App.styled';
const App = () => {
  return (
    <GlobalContainer>
      <GradientWrapper/>
      {' '}
      <ParticlesBackground />
      <GlobalStyles />
      <Header />
      {/* <About />
      <MindMap />
      <FAQ />
      <Arts />
      <ContactUs />
      <Footer /> */}
    </GlobalContainer>
  );
};

export default App;
