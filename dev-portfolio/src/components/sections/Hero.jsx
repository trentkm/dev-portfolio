import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

export const Hero = () => {
  // Detect if mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Modified code for mobile - shorter text
  const fullTextDesktop = `const developer = {
  name: "Trent Morrell",
  role: "Software Engineer II at Amazon",
  expertise: ["React.js", "AWS Microservices", "Full Stack"],
  location: "Dallas, TX",
  strengths: ["Scalable Architecture", "Clean Code", "Problem Solving"],
  experience: "4+ years in industry-grade applications"
};`;

  const fullTextMobile = `const developer = {
  name: "Trent Morrell",
  role: "SDE II at Amazon",
  expertise: [
    "React.js", 
    "AWS", 
    "Full Stack"
  ],
  location: "Dallas, TX"
};`;

  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  useEffect(() => {
    const fullText = isMobile ? fullTextMobile : fullTextDesktop;
    let currentIndex = 0;
    setText(""); // Reset text when switching between mobile/desktop

    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
        setIsTypingComplete(true);
        setTimeout(() => {
          setShowAdditionalInfo(true);
        }, 800);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [isMobile]);

  const handleScrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleScrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <HeroSection id="hero">
      <ContentWrapper>
        <Terminal>
          <TerminalHeader>
            <TerminalDot style={{ background: "#ff5f56" }} />
            <TerminalDot style={{ background: "#ffbd2e" }} />
            <TerminalDot style={{ background: "#27c93f" }} />
            <TerminalTitle>trent@portfolio ~ </TerminalTitle>
          </TerminalHeader>
          <TerminalBody>
            <CodeText isMobile={isMobile}>{text}</CodeText>
            {!isTypingComplete && <Cursor>_</Cursor>}

            {isTypingComplete && (
              <>
                <CommandLine>
                  <span>trent@portfolio ~ </span>
                  <Command>node index.js</Command>
                </CommandLine>

                {showAdditionalInfo && (
                  <OutputContainer>
                    <OutputText>
                      Hello! I'm a Software Engineer with expertise in building
                      scalable applications using React.js and AWS
                      Microservices. Currently working at Amazon, I create
                      robust solutions that deliver meaningful business impact.
                    </OutputText>
                    <ButtonContainer>
                      <TerminalButton onClick={handleScrollToProjects}>
                        View Projects
                      </TerminalButton>
                      <TerminalButton onClick={handleScrollToContact}>
                        Contact Me
                      </TerminalButton>
                    </ButtonContainer>
                  </OutputContainer>
                )}
                <Cursor>_</Cursor>
              </>
            )}
          </TerminalBody>
        </Terminal>

        <SocialLinks>
          <SocialIcon
            href="https://github.com/trentkm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </SocialIcon>
          <SocialIcon
            href="https://linkedin.com/in/trenton-morrell/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </SocialIcon>
        </SocialLinks>
      </ContentWrapper>

      {/* Only show scroll indicator on desktop */}
      {!isMobile && (
        <ScrollIndicator>
          <MouseIcon />
          <ScrollText>Scroll Down</ScrollText>
        </ScrollIndicator>
      )}
    </HeroSection>
  );
};

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

// Styled Components
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Terminal = styled.div`
  background: rgba(17, 25, 40, 0.95);
  border-radius: 12px;
  box-shadow: 0 20px 68px rgba(0, 0, 0, 0.55);
  width: 700px;
  overflow: hidden;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(16px);
  border: 1px solid rgba(66, 153, 225, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.65);
    border: 1px solid rgba(66, 153, 225, 0.3);
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 20px;
  }
`;

const TerminalHeader = styled.div`
  background: rgba(45, 55, 72, 0.95);
  padding: 12px;
  display: flex;
  gap: 8px;
  align-items: center;
  border-bottom: 1px solid rgba(66, 153, 225, 0.2);
`;

const TerminalTitle = styled.div`
  margin-left: 8px;
  font-family: "Fira Code", monospace;
  font-size: 14px;
  color: #a0aec0;
  flex-grow: 1;
  text-align: center;
`;

const TerminalDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const TerminalBody = styled.div`
  padding: 25px;
  font-family: "Fira Code", monospace;
  color: #fff;
  background: linear-gradient(
    145deg,
    rgba(17, 25, 40, 0.95) 0%,
    rgba(20, 30, 48, 0.95) 100%
  );
  min-height: 300px;
`;

const CodeText = styled.pre`
  margin: 0;
  color: #63b3ed;
  text-shadow: 0 0 10px rgba(99, 179, 237, 0.3);
  font-size: 1rem;
  line-height: 1.5;
  white-space: \${props => props.isMobile ? 'pre-wrap' : 'pre'}; /* Fixed text overflow */
  word-break: \${props => props.isMobile ? 'break-word' : 'normal'};

  // Syntax highlighting
  .keyword {
    color: #4299e1;
  }
  .string {
    color: #68d391;
  }
  .number {
    color: #f6ad55;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem; /* Slightly smaller for better fit */
  }
`;

const Cursor = styled.span`
  color: #63b3ed;
  animation: blink 1s step-end infinite;
  text-shadow: 0 0 10px rgba(99, 179, 237, 0.3);

  @keyframes blink {
    from,
    to {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

const CommandLine = styled.div`
  margin-top: 20px;
  font-family: "Fira Code", monospace;
  color: #a0aec0;

  span {
    color: #68d391;
  }
`;

const Command = styled.span`
  color: white;
  margin-left: 5px;
  animation: \${fadeIn} 0.5s ease forwards;
`;

const OutputContainer = styled.div`
  margin-top: 20px;
  animation: \${fadeIn} 0.6s ease forwards;
`;

const OutputText = styled.p`
  color: #e2e8f0;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 15px;

  @media (max-width: 580px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TerminalButton = styled.button`
  background: rgba(66, 153, 225, 0.2);
  color: #63b3ed;
  border: 1px solid rgba(66, 153, 225, 0.5);
  border-radius: 4px;
  padding: 8px 16px;
  font-family: "Fira Code", monospace;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(66, 153, 225, 0.3);
    border-color: rgba(66, 153, 225, 0.7);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  animation: \${fadeIn} 0.8s ease forwards;
  animation-delay: 0.5s;
  opacity: 0;
`;

const SocialIcon = styled.a`
  color: #a0aec0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background: rgba(45, 55, 72, 0.7);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(45, 55, 72, 0.5);

  &:hover {
    color: #63b3ed;
    background: rgba(45, 55, 72, 0.9);
    transform: translateY(-3px);
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.3);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: \${fadeIn} 1s ease forwards;
  animation-delay: 1.5s;
  opacity: 0;
`;

const MouseIcon = styled.div`
  width: 26px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    width: 4px;
    height: 8px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: \${bounce} 2s infinite;
  }
`;

const ScrollText = styled.div`
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  letter-spacing: 1px;
`;

export default Hero;
