import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Nav>
      <Logo>YourName</Logo>
      <NavItems>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="#about">About</Link></NavItem>
        <NavItem><Link to="#skills">Skills</Link></NavItem>
        <NavItem><Link to="#projects">Projects</Link></NavItem>
        <NavItem><Link to="#contact">Contact</Link></NavItem>
      </NavItems>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavItems = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #2ecc71;
    }
  }
`;
