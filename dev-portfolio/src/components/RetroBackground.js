import React from 'react';
import styled, { keyframes } from 'styled-components';
// Add performance optimization for mobile
const RetroBackground = () => {
  const isMobile = window.innerWidth <= 768;
  
  return (
    <Scene>
      <Sky>
        <Stars />
        <Moon />
        {/* Reduce number of effects on mobile */}
        {!isMobile && <NorthernLights />}
        <NorthernLights style={{ animationDelay: '-4s', top: '10%' }} />
        <Snow />
        {!isMobile && (
          <>
            <Snow style={{ animationDelay: '-2s' }} />
            <Snow style={{ animationDelay: '-4s' }} />
          </>
        )}
        <Fog />
        <Mountains>
          <Mountain />
          <Mountain style={{ left: '30%', height: '180px' }} />
          <Mountain style={{ left: '60%', height: '220px' }} />
          {!isMobile && (
            <>
              <Mountain style={{ left: '80%', height: '160px' }} />
              <Mountain style={{ left: '20%', height: '140px', zIndex: '-1', opacity: '0.8' }} />
            </>
          )}
        </Mountains>
      </Sky>
      <Ground>
        <SnowPile />
        <Cabin />
        <Tree style={{ left: '10%' }} />
        <Tree style={{ left: '25%' }} />
        {!isMobile && (
          <>
            <Tree style={{ left: '45%' }} />
            <Tree style={{ left: '65%' }} />
            <Tree style={{ left: '85%' }} />
          </>
        )}
      </Ground>
    </Scene>
  );
};


// Animations
const dayNightCycle = keyframes`
  0%, 100% { background: #0f2027; }
  50% { background: #3498db; }
`;

const snowfall = keyframes`
  0% {
    transform: translateY(-100%) translateX(-50%);
  }
  100% {
    transform: translateY(100vh) translateX(50%);
  }
`;

const northernLights = keyframes`
  0% { transform: translateX(-100%) rotate(20deg); opacity: 0; }
  50% { opacity: 0.3; }
  100% { transform: translateX(100%) rotate(20deg); opacity: 0; }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

const fogMove = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const glisten = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
`;

const chimneySmoke = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 0.8; }
  100% { transform: translateY(-20px) scale(1.5); opacity: 0; }
`;

// Styled Components
const Scene = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  animation: ${dayNightCycle} 60s linear infinite;
`;

const Sky = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background: transparent;
`;

const Stars = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    box-shadow: ${() => {
      let stars = '';
      for (let i = 0; i < 100; i++) {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 50);
        stars += `${x}vw ${y}vh 0 0 #fff,`;
      }
      return stars.slice(0, -1);
    }};
    animation: ${twinkle} 3s ease-in-out infinite;
  }
    
`;

const Moon = styled.div`
  position: absolute;
  top: 50px;
  right: 100px;
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 20px #fff;
`;

const NorthernLights = styled.div`
  position: absolute;
  top: 0;
  width: 200%;
  height: 40%;
  background: linear-gradient(to right, transparent, #80ff72, #7ee8fa, transparent);
  transform: rotate(20deg);
  animation: ${northernLights} 8s ease-in-out infinite;
  opacity: 0.3;
`;

const Mountains = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60%;
`;

const Mountain = styled.div`
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 0;
  height: 200px;
  border-left: 125px solid transparent;
  border-right: 125px solid transparent;
  border-bottom: 200px solid #2c3e50;

  &::after {
    content: '';
    position: absolute;
    top: 50px;
    left: -100px;
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 150px solid #ecf0f1;
    z-index: 1;
  }
`;

const Fog = styled.div`
  position: absolute;
  bottom: 30%;
  width: 100%;
  height: 50px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: ${fogMove} 20s linear infinite;
`;

const Snow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    box-shadow: ${() => {
      let shadows = '';
      for (let i = 0; i < 50; i++) {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        shadows += `${x}vw ${y}vh #fff,`;
      }
      return shadows.slice(0, -1);
    }};
    animation: ${snowfall} 10s linear infinite;
  }
`;

const Ground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: #fff;
  background: linear-gradient(to bottom, #ecf0f1, #fff);
`;

const SnowPile = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  border-radius: 50% 50% 0 0;
  animation: ${glisten} 3s ease-in-out infinite;
`;

const Tree = styled.div`
  position: absolute;
  bottom: 0;
  width: 20px;
  height: 60px;
  background: #4a2810;

  &::before {
    content: '';
    position: absolute;
    bottom: 50px;
    left: -25px;
    width: 0;
    height: 0;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    border-bottom: 60px solid #006400;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 80px;
    left: -20px;
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 50px solid #008000;
  }
`;

const Cabin = styled.div`
  position: absolute;
  bottom: 0;
  left: 40%;
  width: 100px;
  height: 80px;
  background: #8B4513;
  
  &::before {
    content: '';
    position: absolute;
    top: -40px;
    left: -10px;
    width: 0;
    height: 0;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    border-bottom: 40px solid #A0522D;
  }

  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 40px;
    width: 20px;
    height: 30px;
    background: #FFD700;
    box-shadow: 0 0 10px #FFD700;
  }
`;

const ChimneySmoke = styled.div`
  position: absolute;
  top: -50px;
  right: 20px;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: ${chimneySmoke} 2s ease-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 5px;
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    animation: ${chimneySmoke} 2s ease-out infinite;
    animation-delay: -1s;
  }
`;

export default RetroBackground;
