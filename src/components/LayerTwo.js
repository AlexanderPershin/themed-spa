import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
// import boPlay from '../img/bo-play.png';
import cubes from '../img/cubes.png';

const AnimatedDiv = styled(animated.div)`
  min-height: 3500px;
  padding: 200px;
  background-repeat: repeat;
  background: url(${cubes}),
    linear-gradient(
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
    opacity: toggle ? 0.5 : 0.6,
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
