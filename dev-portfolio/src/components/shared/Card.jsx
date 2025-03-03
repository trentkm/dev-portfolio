// components/shared/Card.js
import React from "react";
import styled from "styled-components";

const Card = ({ title, description, image, tags, links, children }) => {
  return (
    <CardContainer>
      {image && (
        <ImageContainer>
          <CardImage src={image} alt={title} />
        </ImageContainer>
      )}
      <CardContent>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
        {tags && (
          <TagContainer>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagContainer>
        )}
        {links && (
          <LinkContainer>
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon && <LinkIcon>{link.icon}</LinkIcon>}
                {link.text}
              </Link>
            ))}
          </LinkContainer>
        )}
        {children}
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background: rgba(17, 25, 40, 0.95);
  backdrop-filter: blur(16px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(66, 153, 225, 0.2); // Softer blue border on hover
  }
`;

const Tag = styled.span`
  background: rgba(66, 153, 225, 0.15); // Changed from green to blue
  color: #63b3ed; // Lighter blue for better readability
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  border: 1px solid rgba(66, 153, 225, 0.25);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #63b3ed; // Changed from green to blue
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: rgba(66, 153, 225, 0.1);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(66, 153, 225, 0.2);
    transform: translateY(-2px);
  }
`;


const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardTitle = styled.h3`
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;


const LinkContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;


const LinkIcon = styled.span`
  font-size: 1.1em;
`;

export default Card;
