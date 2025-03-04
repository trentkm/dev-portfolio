// About.jsx - Fixed version to ensure Facts section appears
import React from "react";
import styled, { keyframes } from "styled-components";

export const About = () => {
  return (
    <AboutSection id="about">
      <ContentContainer>
        <SectionTitle>About Me</SectionTitle>

        <AboutContent>
          <ImageContainer>
            <ProfileImage src="/images/profile.png" alt="Trenton Morrell" />
          </ImageContainer>

          <TextContent>
            <AboutText>
              Hello! I'm Trenton, a Software Engineer II at Amazon with over 4
              years of experience building industry-grade applications. I
              specialize in creating scalable and maintainable software
              solutions using React.js and AWS Microservices.
            </AboutText>

            <AboutText>
              At Amazon, I've led successful projects like Gift Cards for Amazon
              Video Channels and Amazon Music Unlimited, and engineered payment
              tracking systems that eliminated third-party dependencies.
              Previously at CoStar Group, I enhanced legacy report generation
              systems and contributed to micro frontend architecture migration.
            </AboutText>

            <AboutText>
              I'm passionate about clean code, thoughtful architecture, and
              creating software that makes a meaningful impact. When I'm not
              coding, you'll find me exploring new technologies, playing soccer,
              or enjoying outdoor activities in Dallas.
            </AboutText>

            <StatsContainer>
              <StatItem>
                <StatNumber>4+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>8+</StatNumber>
                <StatLabel>Major Projects</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>15+</StatNumber>
                <StatLabel>Technologies</StatLabel>
              </StatItem>
            </StatsContainer>
          </TextContent>
        </AboutContent>

        <FactsSectionNoAnimation>
          <FactsTitle>Professional Highlights</FactsTitle>
          <FactsGrid>
            <FactCard>
              <FactIcon>🎓</FactIcon>
              <FactText>
                B.S. in Computer Science from Virginia Polytechnic Institute,
                graduated Cum Laude
              </FactText>
            </FactCard>
            <FactCard>
              <FactIcon>💼</FactIcon>
              <FactText>
                Software Engineer II at Amazon, previously at CoStar Group and
                Northrop Grumman
              </FactText>
            </FactCard>
            <FactCard>
              <FactIcon>🚀</FactIcon>
              <FactText>
                Led product launches with significant revenue contributions
                across multiple business units
              </FactText>
            </FactCard>
            <FactCard>
              <FactIcon>💻</FactIcon>
              <FactText>
                Domain expert in React.js and AWS Microservices architecture
              </FactText>
            </FactCard>
          </FactsGrid>
        </FactsSectionNoAnimation>
      </ContentContainer>
    </AboutSection>
  );
};

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// Styled Components
const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  position: relative;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  z-index: 10;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: #63b3ed;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 50px;
  animation: ${fadeIn} 0.6s ease-out forwards;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 350px;
  height: 350px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(99, 179, 237, 0.3);
  animation: ${float} 6s ease-in-out infinite;
  
  @media (max-width: 992px) {
    width: 280px;
    height: 280px;
    margin: 0 auto;
    flex: none;
  }
  
  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContent = styled.div`
  flex: 1;
`;

const AboutText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 15px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;

  @media (max-width: 768px) {
    gap: 20px;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    justify-content: space-between;
  }
`;

const StatItem = styled.div`
  text-align: center;
  flex: 1;
  padding: 15px;
  background: rgba(17, 25, 40, 0.7);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 179, 237, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    min-width: 100px;
    padding: 10px;
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #63b3ed;
  margin-bottom: 5px;

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

// Removed animation from this section to ensure it appears
const FactsSectionNoAnimation = styled.div`
  margin-top: 60px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const FactsTitle = styled.h3`
  font-size: 1.8rem;
  color: white;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const FactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FactCard = styled.div`
  display: flex;
  align-items: center;
  background: rgba(17, 25, 40, 0.7);
  border-radius: 10px;
  padding: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 179, 237, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: rgba(99, 179, 237, 0.4);
  }
`;

const FactIcon = styled.div`
  font-size: 2rem;
  margin-right: 15px;

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

const FactText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.4;
  margin: 0;
`;

export default About;
