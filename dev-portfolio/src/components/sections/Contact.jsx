import React from 'react';
import styled from 'styled-components';

export const Contact = () => {
  return (
    <Section id="contact">
      <Content>
        <h1>Welcome to My Portfolio</h1>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
`;
