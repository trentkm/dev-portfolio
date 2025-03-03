import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import CommandPalette from "./CommandPallete";
// Add performance optimization for mobile
const RetroBackground = ({ settings }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <Scene>
      <Sky $isDayTime={settings.isDayTime}>
        {settings.isDayTime ? (
          <Sun />
        ) : (
          <>
            <Stars />
            <Moon />
          </>
        )}
        {settings.showNorthernLights && (
          <>
            <NorthernLights />
            <NorthernLights style={{ animationDelay: "-4s", top: "10%" }} />
          </>
        )}
        <Snow
          $intensity={settings.snowIntensity}
          $windEffect={settings.windEffect}
        >
          <SnowLayer
            $intensity={settings.snowIntensity}
            $windEffect={settings.windEffect}
            $opacity={0.9}
            style={{ animationDelay: "0s" }}
          />
          <SnowLayer
            $intensity={settings.snowIntensity}
            $windEffect={settings.windEffect}
            $opacity={0.7}
            style={{ animationDelay: "-2s" }} // Changed from -5s to -2s
          />
          <SnowLayer
            $intensity={settings.snowIntensity}
            $windEffect={settings.windEffect}
            $opacity={0.5}
            style={{ animationDelay: "-4s" }} // Changed from -10s to -4s
          />
        </Snow>

        <Mountains>
          <Mountain />
          <Mountain style={{ left: "30%", height: "180px" }} />
          <Mountain style={{ left: "60%", height: "220px" }} />
          <Mountain style={{ left: "80%", height: "160px" }} />
          <Mountain
            style={{
              left: "20%",
              height: "140px",
              zIndex: "-1",
              opacity: "0.8",
            }}
          />
          <Mountain
            style={{
              left: "50%",
              height: "190px",
              zIndex: "-1",
              opacity: "0.7",
            }}
          />
        </Mountains>
        <Fog />
      </Sky>
      <Ground $isDayTime={settings.isDayTime}>
        <SnowPile />
        <Cabin>
          <ChimneySmoke />
        </Cabin>
        <Tree style={{ left: "10%" }} />
        <Tree style={{ left: "25%" }} />
        {!isMobile && (
          <>
            <Tree style={{ left: "45%" }} />
            <Tree style={{ left: "65%" }} />
            <Tree style={{ left: "85%" }} />
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


const Sun = styled.div`
  position: absolute;
  top: 50px;
  right: 100px;
  width: 60px;
  height: 60px;
  background: #ffd700;
  border-radius: 50%;
  box-shadow: 0 0 40px #ffd700;
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
// Update the Sky styled component
const Sky = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background: ${(props) => (props.$isDayTime ? "#87CEEB" : "#0f2027")};
  transition: background 1s ease;
`;

// And update the Scene component to remove the dayNightCycle animation
const Scene = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const Stars = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    box-shadow: ${() => {
      let stars = "";
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
  background: linear-gradient(
    to right,
    transparent,
    #80ff72,
    #7ee8fa,
    transparent
  );
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
    content: "";
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
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: ${fogMove} 20s linear infinite;
`;

const Snow = styled.div.attrs((props) => ({
  $intensity: props.$intensity || 1,
  $windEffect: props.$windEffect || false,
}))`
  position: fixed;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
`;

const SnowLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: -100vh; // Start above viewport
  left: 0;
  background-image: ${({ $intensity }) => {
    let shadows = [];
    const numberOfSnowflakes = Math.floor(20 * ($intensity || 1));
    for (let i = 0; i < numberOfSnowflakes; i++) {
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100); // Keep snowflakes within layer height
      const size = Math.random() * 6 + 4;
      shadows.push(`radial-gradient(${size}px ${size}px at ${x}vw ${y}vh, 
        rgba(255, 255, 255, 1), 
        rgba(255, 255, 255, 0.8) 40%, 
        rgba(255, 255, 255, 0.2) 70%,
        transparent 100%)`);
    }
    return shadows.join(",");
  }};
  opacity: ${(props) => props.$opacity || 0.9};
  will-change: transform;
  animation: ${({ $windEffect }) => ($windEffect ? snowfallWind : snowfall)}
    ${({ $intensity }) => Math.max(3, 15 / ($intensity || 1))}s linear infinite;
`;

const snowfall = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(200vh); // Move down two viewport heights
  }
`;

const snowfallWind = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(15vw, 200vh);
  }
`;

const Ground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: ${(props) =>
    props.$isDayTime
      ? "linear-gradient(to bottom, #ffffff, #f0f0f0)"
      : "linear-gradient(to bottom, #ecf0f1, #fff)"};
  transition: background 1s ease;
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
    content: "";
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
    content: "";
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
  background: #8b4513;

  &::before {
    content: "";
    position: absolute;
    top: -40px;
    left: -10px;
    width: 0;
    height: 0;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    border-bottom: 40px solid #a0522d;
  }

  &::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 40px;
    width: 20px;
    height: 30px;
    background: #ffd700;
    box-shadow: 0 0 10px #ffd700;
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
    content: "";
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
