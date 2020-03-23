import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import Welcome from '../widgets/Welcome';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(75px, auto);
  grid-gap: 10px;
`;

const AccentBtn = styled(animated.button)`
  grid-column: 8 / 11;
  grid-row: 4 / 5;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 7px solid ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
  outline: none;
  background-color: transparent;
`;

const LayerThree = props => {
  const themeContext = useContext(ThemeContext);

  const [{ y, sh }, set] = useSpring(() => ({
    y: 10,
    sh: 0,
    config: config.wobbly
  }));

  const handleScroll = to => {
    const { parallRef } = props;

    if (parallRef) {
      parallRef.current.scrollTo(to);
    }
  };

  const handleFreeTrial = () => {
    alert('Something cool happened!');
  };

  return (
    <div>
      <StyledContainer>
        <Welcome />
        <AccentBtn
          style={{
            transform: y.interpolate(v => `translateY(${v}px`),
            boxShadow: sh.interpolate(
              v =>
                `0 ${v}px 10px ${v /
                  2}px rgba(0,0,0,0.5), inset 0 ${v}px 10px ${v /
                  2}px rgba(0,0,0,0.5)`
            ),
            textShadow: sh.interpolate(v => `0 ${v}px 10px rgba(0,0,0,0.5)`)
          }}
          onMouseEnter={() => set({ y: 0, sh: 10 })}
          onMouseLeave={() => set({ y: 10, sh: 0 })}
          onClick={handleFreeTrial}
        >
          Free trial
        </AccentBtn>
      </StyledContainer>
    </div>
  );
};

export default LayerThree;
