import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled, { ThemeProvider } from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(75px, auto);
  grid-gap: 10px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Content = styled.main`
  grid-column: 1 / -1;
`;

const FooterStyled = styled(Footer)`
  grid-column: 1 / -1;
`;

const Layout = ({ children, parallRef }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Header parallRef={parallRef} />
        <Content>{children}</Content>
        <FooterStyled />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
