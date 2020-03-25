import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { animated, config, useSpring } from 'react-spring';

const AccentBtn = styled(animated.button)`
  grid-column: 8 / 11;
  grid-row: 5 / 6;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 7px solid ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
  outline: none;
  background-color: transparent;
`;

const AccentButton = () => {
  const themeContext = useContext(ThemeContext);

  const [{ y, sh }, set] = useSpring(() => ({
    y: 10,
    sh: 0,
    config: config.wobbly
  }));

  const handleFreeTrial = () => {
    alert('Something cool happened!');
  };

  return (
    <AccentBtn
      style={{
        transform: y.interpolate(v => `translateY(${v}px`),
        boxShadow: sh.interpolate(
          v =>
            `0 ${v}px 10px ${v / 2}px ${
              themeContext.shadowColor
            }, inset 0 ${v}px 10px ${v / 2}px ${themeContext.shadowColor}`
        ),
        textShadow: sh.interpolate(
          v => `0 ${v}px 10px ${themeContext.shadowColor}`
        )
      }}
      onMouseEnter={() => set({ y: 0, sh: 10 })}
      onMouseLeave={() => set({ y: 10, sh: 0 })}
      onClick={handleFreeTrial}
    >
      Free trial
    </AccentBtn>
  );
};

export default AccentButton;
