import React from 'react';
import styled from 'styled-components';
import Widget from '../widgets/Widget';
import Member from './Member';

const MembersContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  justify-items: center;
  align-items: center;

  @media (max-width: 600px) {
    grid-gap: 10px;
    transform: translateY(-50px);
  }
`;

const OurTeam = () => {
  return (
    <Widget
      title='Our Team'
      colStart={5}
      colEnd={-2}
      rowStart={1}
      rowEnd={8}
      leftRad
    >
      <MembersContainer>
        <Member posX={0} posY={0} username='July' />
        <Member posX={0} posY={-320} username='Jim' />
        <Member posX={-160} posY={0} username='Anna' />
        <Member posX={-320} posY={0} username='Jerry' />
        <Member posX={-160} posY={-160} username='Pete' />
        <Member posX={-310} posY={-320} username='Ben' />
      </MembersContainer>
    </Widget>
  );
};

export default OurTeam;
