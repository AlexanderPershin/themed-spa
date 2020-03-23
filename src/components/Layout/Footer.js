import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  grid-column: 1 / -1;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.textColors.primary};
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.textColors.primary};
`;

const Footer = () => {
  return (
    <FooterStyled>
      <FooterLink href='#top'>Go Top</FooterLink>
    </FooterStyled>
  );
};

export default Footer;
