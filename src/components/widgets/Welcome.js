import React from 'react';
import styled from 'styled-components';

const StyledWelcome = styled.div`
  grid-column: 2 / 9;
  grid-row: 1 / 7;
  border: 20px solid ${({ theme }) => theme.colors.primary};
  border-bottom-right-radius: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.h1`
  font-size: 75px;
  font-weight: 100;
`;

const Welcome = () => {
  return (
    <StyledWelcome>
      <StyledHeading>Welcome</StyledHeading>
    </StyledWelcome>
  );
};

export default Welcome;
