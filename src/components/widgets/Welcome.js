import React from 'react';
import styled from 'styled-components';
import Widget from '../widgets/Widget';

const StyledPar = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 300;
`;

const Welcome = () => {
  return (
    <Widget
      title='Welcome!'
      colStart={2}
      colEnd={9}
      rowStart={2}
      rowEnd={8}
      rightRad
    >
      <StyledPar>If you need [product], you came to the right place</StyledPar>
    </Widget>
  );
};

export default Welcome;
