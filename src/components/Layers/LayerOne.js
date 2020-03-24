import React from 'react';
import styled from 'styled-components';
import officeOne from '../../img/office.jpg';
import officeTwo from '../../img/office-2.jpg';
import officeThree from '../../img/office-3.jpg';

import vid4 from '../../img/vid4.mp4';

const StyledDiv = styled.div`
  width: 100%;
  clip-path: polygon(100% 5%, 100% 80%, 0% 95%, 0% 20%);
  background-size: cover;
  min-height: 700px;
  &:not(:last-child) {
    /* Gap between divs */
    margin-bottom: 450px;
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
      <SecondDiv>
        <video autoPlay muted loop id='myVideo'>
          <source src={vid4} type='video/mp4' />
        </video>
      </SecondDiv>
      <ThirdDiv />
    </div>
  );
};

export default LayerOne;
