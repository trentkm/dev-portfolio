import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const Hero = () => {
    const [text, setText] = useState('');
    const fullText = `const developer = {
    name: "Trenton Morrell",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "AWS"]
};`;

    useEffect(() => {
        let currentIndex = 0;
        const timer = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(timer);
            }
        }, 50);

        return () => clearInterval(timer);
    }, []);

    return (
        <HeroSection>
            <Terminal>
                <TerminalHeader>
                    <TerminalDot style={{background: '#ff5f56'}}/>
                    <TerminalDot style={{background: '#ffbd2e'}}/>
                    <TerminalDot style={{background: '#27c93f'}}/>
                </TerminalHeader>
                <TerminalBody>
                    <CodeText>{text}</CodeText>
                    <Cursor>_</Cursor>
                </TerminalBody>
            </Terminal>
        </HeroSection>
    );
};

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1; // Lower z-index
`;

const Terminal = styled.div`
  background: #1d1d1d;
  border-radius: 10px;
  box-shadow: 0 20px 68px rgba(0, 0, 0, 0.55);
  width: 600px;
  overflow: hidden;
  position: relative;
  z-index: 2; // Explicitly set lower z-index
`;

const TerminalHeader = styled.div`
    background: #2d2d2d;
    padding: 10px;
    display: flex;
    gap: 8px;
`;

const TerminalDot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
`;

const TerminalBody = styled.div`
    padding: 20px;
    font-family: 'Fira Code', monospace;
    color: #fff;
`;

const CodeText = styled.pre`
    margin: 0;
    color: #2ecc71;
`;

const Cursor = styled.span`
    animation: blink 1s step-end infinite;
    
    @keyframes blink {
        from, to { opacity: 1; }
        50% { opacity: 0; }
    }
`;
