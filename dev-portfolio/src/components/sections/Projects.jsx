// Projects.jsx - Updated version without images

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "aws", label: "AWS" },
    { id: "payment", label: "Payments" },
    { id: "frontend", label: "Frontend" },
  ];

  const projects = [
    {
      id: 1,
      title: "Amazon Video Channels Gift Cards",
      description:
        "Led the successful launch of Gift Cards for Amazon Video Channels (US), implementing a message-based rule matching service to automate accounting processes.",
      emoji: "🎬",
      company: "Amazon",
      tags: ["aws", "payment"],
      skills: ["AWS", "SNS/SQS", "DynamoDB", "Microservices"],
      highlight: "Annual revenue of $650,000 USD from sign-ups",
    },
    {
      id: 2,
      title: "Amazon Music Unlimited Gift Cards",
      description:
        "Executed the launch of Gift Cards for Amazon Music Unlimited in Mexico with automation of accounting through a scalable message-based system.",
      emoji: "🎵",
      company: "Amazon",
      tags: ["aws", "payment"],
      skills: ["AWS", "Lambda", "DynamoDB", "Internationalization"],
      highlight: "Generated $450,000 USD annual revenue",
    },
    {
      id: 3,
      title: "Brazil Installment Payments Tracker",
      description:
        "Engineered an ECS/Fargate service to track installment payments in Brazil, processing bank remittance files with data persistence in DynamoDB.",
      emoji: "💳",
      company: "Amazon",
      tags: ["aws", "payment"],
      skills: ["ECS/Fargate", "DynamoDB", "Microservices"],
      highlight: "Eliminated third-party reliance, saving significant expenses",
    },
    {
      id: 4,
      title: "Pix Payment Integration for Brazil",
      description:
        "Designed and implemented a scalable UI using Scala for Brazil's Pix payment method, enabling seamless integration with mobile banking apps via QR codes.",
      emoji: "📱",
      company: "Amazon",
      tags: ["aws", "payment", "frontend"],
      skills: ["Scala", "UI Design", "QR Code Integration", "Mobile Banking"],
      highlight: "Reduced development time and enhanced UX",
    },
    {
      id: 5,
      title: "Chargeback Tracking System",
      description:
        "Designed and implemented a system to track customer chargebacks for installment payments in Brazil, leveraging SNS/SQS/Lambda for processing with DynamoDB storage.",
      emoji: "📊",
      company: "Amazon",
      tags: ["aws", "payment"],
      skills: ["AWS", "SNS/SQS", "Lambda", "DynamoDB"],
      highlight: "Improved financial reconciliation and reporting",
    },
    {
      id: 6,
      title: "Properties Reports Generator",
      description:
        "Enhanced legacy Properties Reports by implementing a React-based report generation library, resulting in increased daily report generation capacity.",
      emoji: "📄",
      company: "CoStar Group",
      tags: ["frontend"],
      skills: ["React.js", "Data Visualization", "Report Generation"],
      highlight: "20% capacity increase (500 to 600 reports daily)",
    },
    {
      id: 7,
      title: "CoStar Suite Micro Frontend Migration",
      description:
        "Contributed significantly to migrating the CoStar Suite code base to a micro frontend architecture, enhancing code scalability for faster development pace.",
      emoji: "🧩",
      company: "CoStar Group",
      tags: ["frontend"],
      skills: ["Micro Frontends", "React.js", "Architecture Design"],
      highlight: "25% faster development pace",
    },
    {
      id: 8,
      title: "STS Integration for Hospitality Analytics",
      description:
        "Implemented over twenty features for STS integration into CoStar Suite using React.js, providing advanced analytics capabilities in the Hospitality Real Estate sector.",
      emoji: "🏨",
      company: "CoStar Group",
      tags: ["frontend"],
      skills: ["React.js", "Data Integration", "Analytics Dashboard"],
      highlight: "Enhanced analytics for Hospitality clients",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <ProjectsSection id="projects">
      <ContentContainer>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectsIntro>
          Throughout my career at Amazon and CoStar Group, I've led and
          contributed to several impactful projects that demonstrate my
          expertise in full-stack development and cloud solutions.
        </ProjectsIntro>

        <FilterContainer>
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              isActive={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectHeader>
                <ProjectEmoji>{project.emoji}</ProjectEmoji>
                <CompanyBadge>{project.company}</CompanyBadge>
              </ProjectHeader>

              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                {project.highlight && (
                  <HighlightContainer>
                    <HighlightIcon>🏆</HighlightIcon>
                    <HighlightText>{project.highlight}</HighlightText>
                  </HighlightContainer>
                )}

                <SkillsContainer>
                  {project.skills.map((skill, index) => (
                    <SkillTag key={`${project.id}-skill-${index}`}>
                      {skill}
                    </SkillTag>
                  ))}
                </SkillsContainer>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <DisclaimerText>
          Note: Project descriptions have been generalized to respect
          confidentiality. For more detailed discussions about my work, please
          contact me directly.
        </DisclaimerText>
      </ContentContainer>
    </ProjectsSection>
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

// Styled Components
const ProjectsSection = styled.section`
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
  margin-bottom: 20px;
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
    margin-bottom: 15px;
  }
`;

const ProjectsIntro = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 25px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    margin-bottom: 25px;
  }
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  background: ${props => props.isActive ? 'rgba(99, 179, 237, 0.2)' : 'rgba(17, 25, 40, 0.7)'};
  border: 1px solid ${props => props.isActive ? 'rgba(99, 179, 237, 0.6)' : 'rgba(99, 179, 237, 0.2)'};
  color: ${props => props.isActive ? '#63b3ed' : 'rgba(255, 255, 255, 0.8)'};
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    border-color: rgba(99, 179, 237, 0.6);
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const ProjectCard = styled.div`
  background: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 179, 237, 0.2);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-fill-mode: both;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: rgba(99, 179, 237, 0.4);
  }
`;

const ProjectHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
`;

const ProjectEmoji = styled.div`
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CompanyBadge = styled.div`
  display: inline-block;
  background: ${props => props.children === "Amazon" ? "rgba(255, 153, 0, 0.2)" : "rgba(66, 153, 225, 0.2)"};
  color: ${props => props.children === "Amazon" ? "#FF9900" : "#4299E1"};
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${props => props.children === "Amazon" ? "rgba(255, 153, 0, 0.3)" : "rgba(66, 153, 225, 0.3)"};
`;

const ProjectContent = styled.div`
  padding: 0 20px 20px 20px;
`;

const ProjectTitle = styled.h3`
  color: white;
  font-size: 1.3rem;
  margin: 0 0 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const HighlightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  background: rgba(99, 179, 237, 0.1);
  border-radius: 8px;
  padding: 10px;
  border-left: 3px solid #63b3ed;
`;

const HighlightIcon = styled.span`
  font-size: 1.2rem;
  margin-right: 10px;
`;

const HighlightText = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 500;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
`;

const SkillTag = styled.span`
  background: rgba(99, 179, 237, 0.1);
  color: #63b3ed;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(99, 179, 237, 0.2);
`;

const DisclaimerText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  margin-top: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 30px;
  }
`;

export default Projects;
