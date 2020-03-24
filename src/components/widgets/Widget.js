import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  grid-column: ${({ colStart }) => colStart} / ${({ colEnd }) => colEnd};
  grid-row: ${({ rowStart }) => rowStart} / ${({ rowEnd }) => rowEnd};
  border: 20px solid ${({ theme }) => theme.colors.primary};
  border-bottom-right-radius: ${({ rightRad }) => (rightRad ? '150px' : '0px')};
  border-bottom-left-radius: ${({ leftRad }) => (leftRad ? '150px' : '0px')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  color: ${({ theme }) => theme.textColors.secondary};
`;

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 100;
  margin-bottom: 80px;
  background-color: ${({ theme }) => theme.textColors.primary};
  opacity: 0.5;
  padding: 0 20px;
`;

const Widget = ({
  children,
  title,
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  leftRad = false,
  rightRad = false
}) => {
  return (
    <StyledContainer
      colStart={colStart}
      colEnd={colEnd}
      rowStart={rowStart}
      rowEnd={rowEnd}
      leftRad={leftRad}
      rightRad={rightRad}
    >
      <StyledHeading>{title}</StyledHeading>
      {children}
    </StyledContainer>
  );
};

export default Widget;
