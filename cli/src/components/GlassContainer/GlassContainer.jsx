import React from 'react';
import styled from 'styled-components';
import Glass from './Glass';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GlassContainer = ({ children }) => {
  return (
    <Wrapper>
      <Glass>{children}</Glass>
    </Wrapper>
  );
};

export default GlassContainer;
