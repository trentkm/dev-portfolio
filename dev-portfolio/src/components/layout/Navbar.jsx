import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav isScrolled={isScrolled}>
      <NavContainer>
        <Logo href="/">
          <LogoText>Trent Morrell</LogoText>
          <LogoDot>.</LogoDot>
        </Logo>

        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon isOpen={isOpen}>
            <span></span>
            <span></span>
            <span></span>
          </MenuIcon>
        </MenuButton>

        <NavItems isOpen={isOpen}>
          <NavItem>
            <NavLink href="#home" onClick={() => setIsOpen(false)}>
              Home
              <LinkOverlay />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about" onClick={() => setIsOpen(false)}>
              About
              <LinkOverlay />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projects" onClick={() => setIsOpen(false)}>
              Projects
              <LinkOverlay />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>
              Contact
              <LinkOverlay />
            </NavLink>
          </NavItem>
          <ResumeButton href="/resume.pdf" target="_blank">
            Resume
          </ResumeButton>
        </NavItems>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${props => props.isScrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const LogoText = styled.span`
  background: linear-gradient(45deg, #2ecc71, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LogoDot = styled.span`
  color: #2ecc71;
  margin-left: 2px;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #fff;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: ${props => props.isOpen ? '10px' : '0px'};
      transform: ${props => props.isOpen ? 'rotate(135deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      top: 10px;
      opacity: ${props => props.isOpen ? '0' : '1'};
    }

    &:nth-child(3) {
      top: ${props => props.isOpen ? '10px' : '20px'};
      transform: ${props => props.isOpen ? 'rotate(-135deg)' : 'rotate(0)'};
    }
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 75%;
    max-width: 300px;
    flex-direction: column;
    justify-content: center;
    background: rgba(10, 25, 47, 0.95);
    backdrop-filter: blur(10px);
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    padding: 2rem;
    box-shadow: -10px 0px 30px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: #2ecc71;
  }
`;

const LinkOverlay = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #2ecc71;
  transition: width 0.3s ease;

  ${NavLink}:hover & {
    width: 100%;
  }
`;

const ResumeButton = styled.a`
  padding: 0.75rem 1.5rem;
  border: 2px solid #2ecc71;
  border-radius: 4px;
  color: #2ecc71;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  background: transparent;

  &:hover {
    background: rgba(46, 204, 113, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export default Navbar;
