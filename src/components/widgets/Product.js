import React from 'react';
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';

const StyledProduct = styled(animated.div)`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 200px;
  height: 200px;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.textColors.primary};
  user-select: none;
`;

const Product = ({ children }) => {
  const [{ y, sh }, set] = useSpring(() => ({
    y: 10,
    sh: 0,
    config: config.wobbly
  }));

  return (
    <StyledProduct
      style={{
        transform: y.interpolate(v => `translateY(${v}px`),
        boxShadow: sh.interpolate(
          v => `0 ${v}px 10px ${v / 2}px rgba(0,0,0,0.5)`
        )
      }}
      onMouseEnter={() => set({ y: 0, sh: 10 })}
      onMouseLeave={() => set({ y: 10, sh: 0 })}
    >
      {children}
    </StyledProduct>
  );
};

export default Product;
