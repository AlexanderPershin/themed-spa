import React from 'react';
import styled from 'styled-components';
import officeOne from '../img/office.jpg';
import officeTwo from '../img/office-2.jpg';
import officeThree from '../img/office-3.jpg';

const StyledDiv = styled.div`
  width: 100%;
  clip-path: polygon(100% 5%, 100% 80%, 0% 95%, 0% 20%);
  background-size: cover;
  min-height: 700px;
  &:not(:last-child) {
    /* Gap between divs */
    margin-bottom: 150px;
  }
`;

const FirstDiv = styled(StyledDiv)`
  background-image: url(${officeOne});
`;
const SecondDiv = styled(StyledDiv)`
  background-image: url(${officeTwo});
`;
const ThirdDiv = styled(StyledDiv)`
  background-image: url(${officeThree});
`;

const LayerOne = () => {
  return (
    <div>
      <FirstDiv />
      <SecondDiv />
      <ThirdDiv />
    </div>
  );
};

export default LayerOne;
