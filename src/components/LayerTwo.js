import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const AnimatedDiv = styled(animated.div)`
  min-height: 3500px;
  padding: 200px;
  background-size: 400% 100%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
`;

const LayerTwo = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setToggle(prev => !prev);
    }, 3000);
  }, [toggle]);

  const animProps = useSpring({
    opacity: toggle ? 0.3 : 0.35,
    backgroundPositionX: toggle ? '0%' : '350%',
    config: { mass: 5, tension: 250, friction: 15 }
  });

  return (
    <div>
      <h1>Layer Two [Gradient]</h1>
      <AnimatedDiv style={animProps} />
    </div>
  );
};

export default LayerTwo;
