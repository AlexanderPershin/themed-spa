import React, { useContext } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import styled, { ThemeContext } from 'styled-components';
import { animated, config, useSpring } from 'react-spring';
import moment from 'moment';

const FooterStyled = styled.footer`
  grid-column: 1 / -1;
  grid-row: 8 / 10;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.textColors.primary};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(75px, 1fr);
  grid-gap: 10px;
`;

const FooterLink = styled(animated.a)`
  text-decoration: none;
  color: ${({ theme }) => theme.textColors.primary};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  grid-column: 9 / 11;
`;

const FooterCopyright = styled.div`
  grid-column: 2 / 8;
  color: ${({ theme }) => theme.textColors.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Footer = ({ parallRef }) => {
  const themeContext = useContext(ThemeContext);

  const [{ y }, set] = useSpring(() => ({
    y: 0,
    config: config.wobbly
  }));

  const scrollIt = (to, duration = 1) => {
    if (parallRef) {
      parallRef.current.scrollTo(to);
    }
  };

  return (
    <FooterStyled>
      <FooterCopyright>
        &copy; All rights reserved {moment().format('YYYY')}
      </FooterCopyright>
      <FooterLink
        style={{
          transform: y.interpolate(v => `translateY(${v}px)`),
          textShadow: y.interpolate(
            v => `0 ${-v}px 10px ${themeContext.shadowColor}`
          )
        }}
        href='#top'
        onClick={() => scrollIt(0)}
        onMouseOver={() => set({ y: -10 })}
        onMouseLeave={() => set({ y: 0 })}
      >
        Go Top <ArrowUpwardIcon fontSize='large' />
      </FooterLink>
    </FooterStyled>
  );
};

export default Footer;
