import React from 'react';
import styled from 'styled-components';

const TenYearsStyled = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 8;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  writing-mode: vertical-rl;
  text-orientation: sideways;
  transform: rotate(-180deg);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => theme.colors.accent};
  @media (max-width: 880px) {
    grid-row: 2 / 8;
    grid-column: 1 / 3;
    transform: rotate(-180deg) translateX(20px);
  }
  @media (max-width: 600px) {
    grid-row: 2 / 8;
    transform: rotate(-180deg) translateX(20px);
  }
`;

const TenYears = ({ children }) => {
  return <TenYearsStyled>{children}</TenYearsStyled>;
};

export default TenYears;
