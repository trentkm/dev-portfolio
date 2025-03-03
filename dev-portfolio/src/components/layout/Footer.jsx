import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Your Name. All rights reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  background: #111;
`;
