import React from 'react';
import styled from 'styled-components';

const ArrowConnect = styled.div`
  grid-column: ${({ arrowCol }) => arrowCol} / ${({ arrowCol }) => arrowCol + 1};
  grid-row: ${({ arrowRowStart }) => arrowRowStart} /
    ${({ arrowRowEnd }) => arrowRowEnd};
  background-color: ${({ theme }) => theme.colors.primary};
  clip-path: polygon(
    40% 0%,
    60% 0%,
    60% 70%,
    100% 70%,
    50% 100%,
    0% 70%,
    40% 70%,
    40% 0%
  );
  transform: translateY(10px);
`;

const ArrowTail = styled.div`
  grid-column: ${({ arrowCol }) => arrowCol} / ${({ arrowCol }) => arrowCol + 1};
  grid-row: ${({ arrowRowStart }) => arrowRowStart} /
    ${({ arrowRowStart }) => arrowRowStart + 1};
  display: inline-block;
  height: 21px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  clip-path: polygon(40% 0%, 60% 0%, 60% 100%, 40% 100%);
  transform: translateY(-10px);
  z-index: 1000;
`;

const Arrow = ({ arrowCol, arrowRowStart, arrowRowEnd }) => {
  return (
    <>
      <ArrowConnect
        arrowCol={arrowCol}
        arrowRowStart={arrowRowStart}
        arrowRowEnd={arrowRowEnd}
      />
      <ArrowTail
        arrowCol={arrowCol}
        arrowRowStart={arrowRowStart}
        arrowRowEnd={arrowRowEnd}
      />
    </>
  );
};

export default Arrow;
