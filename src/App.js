import React, { useRef, useState, useEffect } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import styled, { createGlobalStyle } from 'styled-components';
// import Layout from './components/Layout/Layout';
import LayerOne from './components/Layers/LayerOne';
import LayerTwo from './components/Layers/LayerTwo';
// import LayerThree from './components/Layers/LayerThree';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './themes/defaultTheme';
import darkTheme from './themes/darkTheme';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Welcome from './components/widgets/Welcome';
import Products from './components/widgets/Products';
import OurTeam from './components/widgets/OurTeam';
import Contact from './components/widgets/Contact';
import Arrow from './components/widgets/Arrow';
import AccentButton from './components/widgets/AccentButton';
import TenYears from './components/widgets/TenYears';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.bodyBg}
  }
  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root {
    min-height: 100%;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px ${({ theme }) => theme.shadowColor}; 
  }
  ::-webkit-scrollbar-thumb {
      border-radius: ${({ theme }) => theme.borderRadius};
      -webkit-box-shadow: inset 0 0 6px ${({ theme }) => theme.shadowColor};
      background-color: ${({ theme }) => theme.colors.primary}
  }

  ::selection { 
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.accent}; }
`;

const StyledLayer = styled(ParallaxLayer)`
  color: #000;
`;

const StyledContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;

const FixedHeader = styled(Header)`
  grid-column: 1 / -1;
`;

const ContentFirst = styled(StyledContent)`
  /* outline: 3px solid darkred; */
`;

const ContentSecond = styled(StyledContent)`
  /* background-color: rgba(0, 39, 105, 0.3); */
`;

// const ContentThird = styled(StyledContent)`
//   /* overflow: hidden; */
// `;

const PhaseThreeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(75px, 1fr);
  grid-gap: 10px;
  height: 100%;
`;

const useLocalTheme = (themeVar = 'light') => {
  const [themeStyle, setTheme] = useState('light');

  useEffect(() => {
    const prevTheme = localStorage.getItem('theme');
    console.log('update');

    if (prevTheme) {
      setTheme(prevTheme);
    } else {
      localStorage.setItem('theme', themeVar);
      setTheme(themeVar);
    }
  }, [themeVar]);

  const handleChangeTheme = newTheme => {
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return [themeStyle, handleChangeTheme];
};

function App() {
  const [themeStyle, setTheme] = useLocalTheme('light');
  const parallRef = useRef(null);

  return (
    <ThemeProvider theme={themeStyle === 'light' ? defaultTheme : darkTheme}>
      <Parallax pages={4} scrolling={true} horizontal={false} ref={parallRef}>
        <GlobalStyle />
        <StyledLayer offset={0} speed={2}>
          <ContentFirst>
            <LayerOne />
          </ContentFirst>
        </StyledLayer>
        <StyledLayer offset={0} speed={1.5}>
          <ContentSecond>
            <LayerTwo />
          </ContentSecond>
        </StyledLayer>
        <StyledLayer offset={0} speed={1} factor={2}>
          <StyledContent>
            <PhaseThreeContainer>
              <FixedHeader
                parallRef={parallRef}
                themeStyle={themeStyle}
                setTheme={setTheme}
              />
              <Welcome />
              <AccentButton />
              <Arrow arrowCol={4} arrowRowStart={9} arrowRowEnd={13} />
            </PhaseThreeContainer>
          </StyledContent>
        </StyledLayer>
        <StyledLayer offset={1} speed={1} factor={2}>
          <StyledContent>
            <PhaseThreeContainer>
              <Products />
              <Arrow arrowCol={8} arrowRowStart={8} arrowRowEnd={12} />
            </PhaseThreeContainer>
          </StyledContent>
        </StyledLayer>
        <StyledLayer offset={2} speed={1} factor={2}>
          <StyledContent>
            <PhaseThreeContainer>
              <OurTeam />
              <TenYears>Ten Years On Market</TenYears>
              <Arrow arrowCol={8} arrowRowStart={8} arrowRowEnd={12} />
            </PhaseThreeContainer>
          </StyledContent>
        </StyledLayer>
        <StyledLayer offset={3} speed={1} factor={1}>
          <StyledContent>
            <PhaseThreeContainer>
              <Contact />
              <Footer parallRef={parallRef} />
            </PhaseThreeContainer>
          </StyledContent>
        </StyledLayer>
      </Parallax>
    </ThemeProvider>
  );
}

export default App;

// <StyledLayer offset={0} speed={1} factor={1}>
//         <ContentThird>
//           <Layout parallRef={parallRef}>
//             <LayerThree parallRef={parallRef} />
//           </Layout>
//         </ContentThird>
//       </StyledLayer>
