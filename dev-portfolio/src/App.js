import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import  Navbar  from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import {GlobalStyles } from './styles/GlobalStyles';
import RetroBackground from './components/background/RetroBackground';
import CommandPalette from './components/background/CommandPallete';

function App() {
  const [settings, setSettings] = useState({
    snowIntensity: 1,
    showNorthernLights: true,
    isDayTime: false,
    windEffect: false,
    brightness: 50,
  });

  const handleCommand = (commandId) => {
    switch (commandId) {
      case "snow": 
        setSettings((prev) => {
          const newIntensity = Math.min(prev.snowIntensity + 1.0, 4);
          console.log("New snow intensity:", newIntensity); // Debug log
          return {
            ...prev,
            snowIntensity: newIntensity,
          };
        });
        break;
      case "decreaseSnow":
        setSettings((prev) => ({
          ...prev,
          snowIntensity: Math.max(prev.snowIntensity - 1.0, 0.5),
        }));
        break;
      case "lights":
        setSettings((prev) => ({
          ...prev,
          showNorthernLights: !prev.showNorthernLights,
        }));
        break;
      case "daynight":
        setSettings((prev) => ({
          ...prev,
          isDayTime: !prev.isDayTime,
        }));
        break;
      case "wind":
        setSettings((prev) => ({
          ...prev,
          windEffect: !prev.windEffect,
        }));
        break;
    }
  };


  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppContainer>
        <CommandPalette onCommand={handleCommand} settings={settings} />
        <RetroBackground settings={settings} />
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
