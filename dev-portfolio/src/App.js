import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import {GlobalStyles } from './styles/GlobalStyles';
import ParticleBackgroundComponent from './components/ParticleBackgroundComponent';
import RetroBackground from './components/RetroBackground';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppContainer>
      <RetroBackground/>
        <Navbar />
        <MainContent>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </MainContent>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

export default App;
