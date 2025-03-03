// Navbar.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <NavContainer $scrolled={scrolled}>
      <LogoContainer>
        <LogoText>Trent Morrell</LogoText>
      </LogoContainer>

      <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </MobileMenuButton>

      <NavLinks $menuOpen={menuOpen}>
        {navItems.map((item) => (
          <NavItem key={item.name}>
            <NavLink
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          </NavItem>
        ))}
        <NavItem>
          <ResumeLink
            href="/trenton-morrell-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <DownloadIcon />
          </ResumeLink>
        </NavItem>
      </NavLinks>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease;
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  background: ${props => props.$scrolled ? 'rgba(23, 23, 23, 0.8)' : 'transparent'};
  box-shadow: ${props => props.$scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};
  border-bottom: ${props => props.$scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
`;

const LogoContainer = styled.div`
  z-index: 101;
`;

const LogoText = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin: 0;
  letter-spacing: 1px;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(23, 23, 23, 0.95);
    justify-content: center;
    align-items: center;
    gap: 3rem;
    transform: ${props => props.$menuOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    z-index: 100;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center; // Ensures vertical alignment
`;

// Updated ResumeLink with better alignment styling
const ResumeLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: rgba(99, 179, 237, 0.2);
  border: 1px solid rgba(99, 179, 237, 0.3);
  transition: all 0.2s ease;
  display: inline-flex; // Changed to inline-flex for better alignment
  align-items: center;
  gap: 5px;
  line-height: normal; // Fixes potential line-height issues
  margin: 0; // Reset margin that might be affecting alignment

  &:hover {
    background: rgba(99, 179, 237, 0.3);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem; // Slightly larger padding for mobile
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    font-weight: 700;
    background: rgba(46, 204, 113, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;

  span {
    width: 30px;
    height: 3px;
    background-color: white;
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const DownloadIcon = styled.span`
  &::after {
    content: "↓";
    font-size: 0.8rem;
  }
`;

export default Navbar;
