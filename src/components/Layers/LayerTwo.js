import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';

import cubes from '../../img/cubes.png';

// Change houdini properties
const grad = keyframes`
  from {
    --color_1: darkblue;
    --color_2: darkviolet;
  }

  to {
    --color_1: darkviolet;
    --color_2: darkblue;
  }
`;

// Add animated gradient to div
const AnimatedDiv = styled(animated.div)`
  min-height: 7500px;
  padding: 200px;
  background-repeat: repeat;
  --color_1: ${({ theme }) => theme.colors.primary};
  --color_2: ${({ theme }) => theme.colors.secondary};
  background: url(${cubes}),
    linear-gradient(90deg, var(--color_1), var(--color_2));
  animation-duration: 3s;
  animation-name: ${grad};
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
`;

const LayerTwo = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setToggle(prev => !prev);
    }, 3000);
  }, [toggle]);

  const animProps = useSpring({
    opacity: toggle ? 0.6 : 0.6,
    config: { mass: 5, tension: 250, friction: 15 }
  });

  return (
    <div>
      <AnimatedDiv style={animProps} />
    </div>
  );
};

export default LayerTwo;
