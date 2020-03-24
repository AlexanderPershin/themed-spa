import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  grid-column: 1 / -1;
  grid-row: 3 / 5;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.textColors.primary};
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.textColors.primary};
`;

const Footer = ({ parallRef }) => {
  const scrollIt = (to, duration = 1) => {
    if (parallRef) {
      parallRef.current.scrollTo(to);
    }
  };

  return (
    <FooterStyled>
      <FooterLink href='#top' onClick={() => scrollIt(0)}>
        Go Top
      </FooterLink>
    </FooterStyled>
  );
};

export default Footer;
