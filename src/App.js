import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import styled, { createGlobalStyle } from 'styled-components';
import Layout from './components/Layout/Layout';
import LayerOne from './components/Layers/LayerOne';
import LayerTwo from './components/Layers/LayerTwo';
import LayerThree from './components/Layers/LayerThree';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root {
    min-height: 100%;
  }
`;

const StyledLayer = styled(ParallaxLayer)`
  color: #000;
`;

const StyledContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;

const ContentFirst = styled(StyledContent)`
  /* outline: 3px solid darkred; */
`;

const ContentSecond = styled(StyledContent)`
  /* background-color: rgba(0, 39, 105, 0.3); */
`;

const ContentThird = styled(StyledContent)`
  overflow: hidden;
`;

function App() {
  const parallRef = useRef(null);
  console.log('App -> parallRef', parallRef);

  return (
    <Parallax pages={8} scrolling={true} horizontal={false} ref={parallRef}>
      <GlobalStyle />
      <StyledLayer offset={0.25} speed={2} factor={5}>
        <ContentFirst>
          <LayerOne />
        </ContentFirst>
      </StyledLayer>
      <StyledLayer offset={0} speed={1.5} factor={5}>
        <ContentSecond>
          <LayerTwo />
        </ContentSecond>
      </StyledLayer>
      <StyledLayer offset={0} speed={1} factor={8}>
        <ContentThird>
          <Layout parallRef={parallRef}>
            <LayerThree parallRef={parallRef} />
          </Layout>
        </ContentThird>
      </StyledLayer>
    </Parallax>
  );
}

export default App;
