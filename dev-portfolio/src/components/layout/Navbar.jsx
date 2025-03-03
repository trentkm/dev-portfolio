// Navbar.jsx - Complete rewrite of mobile menu behavior
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

  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      <NavContainer scrolled={scrolled}>
        <LogoContainer>
          <LogoText>Trent Morrell</LogoText>
        </LogoContainer>

        <MobileMenuButton
          onClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>

        {/* Desktop Navigation */}
        <DesktopNav>
          {navItems.map((item) => (
            <NavItem key={item.name}>
              <NavLink
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
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
        </DesktopNav>
      </NavContainer>

      {/* Completely separate mobile menu overlay */}
      <MobileMenuOverlay isOpen={menuOpen}>
        <MobileNavItems>
          {navItems.map((item) => (
            <MobileNavItem key={item.name}>
              <MobileNavLink
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </MobileNavLink>
            </MobileNavItem>
          ))}
          <MobileNavItem>
            <MobileResumeLink
              href="/trenton-morrell-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <DownloadIcon />
            </MobileResumeLink>
          </MobileNavItem>
        </MobileNavItems>
      </MobileMenuOverlay>
    </>
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
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  background: ${props => props.scrolled ? 'rgba(23, 23, 23, 0.8)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};
  border-bottom: ${props => props.scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
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

// Desktop-only navigation
const DesktopNav = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
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
`;

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
  display: inline-flex;
  align-items: center;
  gap: 5px;
  line-height: normal;
  margin: 0;

  &:hover {
    background: rgba(99, 179, 237, 0.3);
    transform: translateY(-2px);
  }
`;

// Mobile Menu Button
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
    transform-origin: left;
    
    &:nth-child(1) {
      transform: ${props => props.menuOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.menuOpen ? '0' : '1'};
      transform: ${props => props.menuOpen ? 'translateX(-10px)' : 'translateX(0)'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.menuOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Completely separate mobile overlay menu
const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(23, 23, 23, 0.95);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const MobileNavItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
`;

const MobileNavItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MobileNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1rem 2rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  cursor: pointer;
  text-align: center;
  width: 100%;
  max-width: 200px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    font-weight: 700;
    background: rgba(46, 204, 113, 0.2);
  }
`;

const MobileResumeLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1rem 2rem;
  border-radius: 4px;
  background: rgba(99, 179, 237, 0.2);
  border: 1px solid rgba(99, 179, 237, 0.3);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  max-width: 200px;

  &:hover {
    background: rgba(99, 179, 237, 0.3);
  }
`;

const DownloadIcon = styled.span`
  &::after {
    content: "↓";
    font-size: 0.8rem;
  }
`;

export default Navbar;
