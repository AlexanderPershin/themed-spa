import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
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

const ProductInner = styled(animated.div)`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 200px;
  margin: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10000px;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-width: 7px;
  border-style: dotted;
`;

const StyledText = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
`;

const Product = ({ children }) => {
  const themeContext = useContext(ThemeContext);

  const [{ y, sh }, set] = useSpring(() => ({
    y: 10,
    sh: 0,
    config: config.molasses
  }));

  return (
    <StyledProduct
      style={{
        transform: y.interpolate(v => `translateY(${v}px`),
        boxShadow: sh.interpolate(
          v => `0 ${v}px 10px ${v / 2}px ${themeContext.shadowColor}`
        )
      }}
      onMouseEnter={() => set({ y: 0, sh: 10 })}
      onMouseLeave={() => set({ y: 10, sh: 0 })}
    >
      <ProductInner
        style={{
          transform: y.interpolate(v => `rotate(${v * 100}deg)`),
          border: y.interpolate(
            v =>
              `${v * 1.2 + 5}px ${v > 8 ? 'solid' : 'dotted'} ${
                themeContext.colors.accent
              }`
          )
        }}
      >
        <StyledText
          style={{
            transform: y.interpolate(v => `rotate(-${v * 100}deg)`),
            fontWeight: y.interpolate(v => (v > 5 ? '100' : '700'))
          }}
        >
          {children}
        </StyledText>
      </ProductInner>
    </StyledProduct>
  );
};

export default Product;
