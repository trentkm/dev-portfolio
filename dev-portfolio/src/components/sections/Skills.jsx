// Skills.jsx
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [displayedSkills, setDisplayedSkills] = useState([]);
  
  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "cloud", label: "AWS & Cloud" },
    { id: "languages", label: "Languages" }
  ];
  
const allSkills = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    level: 95,
    icon: "⚛️",
    description:
      "Expert with 4+ years experience building scalable applications, hooks, context API, and state management",
  },
  {
    name: "Micro Frontends",
    category: "frontend",
    level: 85,
    icon: "🧩",
    description:
      "Architecture design, module federation, and scalable frontend systems",
  },
  {
    name: "Redux",
    category: "frontend",
    level: 85,
    icon: "🔄",
    description:
      "Advanced state management, middleware, selectors, and Redux Toolkit",
  },
  {
    name: "CSS/SCSS",
    category: "frontend",
    level: 88,
    icon: "🎨",
    description:
      "Responsive design, animations, CSS-in-JS, styled-components, and complex layouts",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    level: 85,
    icon: "🟩",
    description:
      "Server-side JavaScript for APIs, microservices, and data processing",
  },
  {
    name: "API Development",
    category: "backend",
    level: 90,
    icon: "🔌",
    description:
      "RESTful API design, versioning, authentication, and performance optimization",
  },
  {
    name: "GraphQL",
    category: "backend",
    level: 80,
    icon: "📊",
    description:
      "Schema design, resolvers, and efficient data fetching patterns",
  },
  {
    name: "SQL/NoSQL",
    category: "backend",
    level: 85,
    icon: "🗃️",
    description:
      "Complex queries, database design, and performance optimization with both SQL and NoSQL databases",
  },
  {
    name: "Docker",
    category: "backend",
    level: 80,
    icon: "🐳",
    description:
      "Containerization for deployment, Docker Compose, and container orchestration",
  },

  // AWS & Cloud
  {
    name: "AWS CDK",
    category: "cloud",
    level: 90,
    icon: "🏗️",
    description:
      "Infrastructure as code with AWS Cloud Development Kit for automated deployments",
  },
  {
    name: "AWS Lambda",
    category: "cloud",
    level: 90,
    icon: "λ",
    description:
      "Serverless functions for event-driven processing and microservices architecture",
  },
  {
    name: "DynamoDB",
    category: "cloud",
    level: 85,
    icon: "📋",
    description:
      "NoSQL database design, single-table patterns, and efficient querying strategies",
  },
  {
    name: "ECS/Fargate",
    category: "cloud",
    level: 90,
    icon: "🚢",
    description:
      "Container orchestration, task definitions, and scalable service deployments",
  },
  {
    name: "SNS/SQS",
    category: "cloud",
    level: 85,
    icon: "📨",
    description:
      "Event-driven architectures with reliable message processing and pub/sub patterns",
  },

  // Languages
  {
    name: "JavaScript",
    category: "languages",
    level: 95,
    icon: "🟨",
    description:
      "ES6+, async/await, DOM manipulation, advanced functional programming concepts, and browser APIs",
  },
  {
    name: "TypeScript",
    category: "languages",
    level: 90,
    icon: "🔷",
    description:
      "Static typing, interfaces, generics, type guards, and integration with React and Node",
  },
  {
    name: "Java",
    category: "languages",
    level: 80,
    icon: "☕",
    description:
      "Enterprise application development, multithreading, and Java EE technologies",
  },
  {
    name: "Scala",
    category: "languages",
    level: 75,
    icon: "🧮",
    description:
      "Functional programming with Scala for scalable backend services",
  },
  {
    name: "Kotlin",
    category: "languages",
    level: 75,
    icon: "🧪",
    description: "Modern JVM language for concise and expressive code",
  },
  {
    name: "Python",
    category: "languages",
    level: 75,
    icon: "🐍",
    description:
      "Scripting, data processing, and backend development with Python",
  },
];
  
  // Update displayed skills when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setDisplayedSkills(allSkills);
    } else {
      const filtered = allSkills.filter(skill => skill.category === activeCategory);
      setDisplayedSkills(filtered);
    }
  }, [activeCategory]);
  
  // Set initial skills on component mount
  useEffect(() => {
    setDisplayedSkills(allSkills);
  }, []);

  return (
    <SkillsSection id="skills">
      <ContentContainer>
        <SectionTitle>My Skills</SectionTitle>
        <SkillsIntro>
          With over 4 years of industry experience at Amazon and CoStar Group, I've developed expertise in full-stack development with a focus on React.js and AWS microservices.
        </SkillsIntro>
        
        <CategoryTabs>
          {categories.map(category => (
            <CategoryTab
              key={category.id}
              $isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </CategoryTab>
          ))}
        </CategoryTabs>
        
        <SkillsContainer>
          {displayedSkills.map((skill, index) => (
            <SkillCard key={`\${skill.name}-\${index}`}>
              <SkillHeader>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillName>{skill.name}</SkillName>
                <SkillLevel>{skill.level}%</SkillLevel>
              </SkillHeader>
              
              <SkillBar>
                <SkillProgress style={{width: `\${skill.level}%`}} />
              </SkillBar>
              
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </SkillsContainer>
      </ContentContainer>
    </SkillsSection>
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
const SkillsSection = styled.section`
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
    content: '';
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

const SkillsIntro = styled.p`
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

const CategoryTabs = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 25px;
  }
`;

const CategoryTab = styled.button`
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid \${props => props.\$isActive ? '#63b3ed' : 'rgba(99, 179, 237, 0.2)'};
  background: \${props => props.\$isActive ? 'rgba(99, 179, 237, 0.2)' : 'rgba(17, 25, 40, 0.7)'};
  color: \${props => props.\$isActive ? '#63b3ed' : 'rgba(255, 255, 255, 0.8)'};
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  font-size: 0.9rem;
  
  &:hover {
    border-color: #63b3ed;
    transform: translateY(-2px);
  }
  
  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.8rem;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  padding: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 179, 237, 0.2);
  transition: all 0.3s ease;
  animation: \${fadeIn} 0.5s ease-out forwards;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: rgba(99, 179, 237, 0.4);
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const SkillIcon = styled.div`
  font-size: 1.8rem;
  margin-right: 15px;
  background: rgba(99, 179, 237, 0.1);
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 36px;
    height: 36px;
  }
`;

const SkillName = styled.h4`
  color: white;
  font-size: 1.1rem;
  margin: 0;
  flex-grow: 1;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillLevel = styled.span`
  color: #63b3ed;
  font-size: 0.9rem;
  font-weight: bold;
`;

const SkillBar = styled.div`
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    height: 6px;
    margin-bottom: 12px;
  }
`;

const SkillProgress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #4299e1 0%, #63b3ed 100%);
  border-radius: 4px;
  transition: width 1s ease-out;
`;

const SkillDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export default Skills;