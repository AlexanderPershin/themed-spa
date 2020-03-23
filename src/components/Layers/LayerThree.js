import React from 'react';
import styled from 'styled-components';
import Welcome from '../widgets/Welcome';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(75px, auto);
  grid-gap: 10px;
`;

const LayerThree = props => {
  const handleScroll = to => {
    const { parallRef } = props;

    if (parallRef) {
      parallRef.current.scrollTo(to);
    }
  };

  return (
    <div>
      <StyledContainer>
        <Welcome />
      </StyledContainer>
    </div>
  );
};

export default LayerThree;
