import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';

const HeaderStyled = styled.header`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.textColors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  grid-template-rows: 1fr;
`;

const HeaderMenu = styled.div`
  grid-column: 6 / 12;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const HeaderLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.textColors.primary};
  &:hover {
    text-decoration: underline;
  }
`;

const ThemeBtn = styled.label`
  grid-column: 2 / 4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  cursor: pointer;
  & > span {
    margin-right: 20px;
  }
`;

const Header = ({ parallRef, themeStyle, setTheme }) => {
  const themeContext = useContext(ThemeContext);

  // const [themeStyle, setTheme] = useState('light');

  const handleTheme = () => {
    themeStyle === 'light' ? setTheme('dark') : setTheme('light');
    return;
  };

  const scrollIt = (to, duration = 1) => {
    if (parallRef) {
      parallRef.current.scrollTo(to);
    }
  };

  return (
    <HeaderStyled>
      <ThemeBtn>
        <span>Theme</span>
        <Switch
          onChange={handleTheme}
          checked={themeStyle === 'light'}
          handleDiameter={25}
          offColor={themeContext.colors.secondary}
          onColor={themeContext.colors.secondary}
          offHandleColor={themeContext.colors.primary}
          onHandleColor={themeContext.colors.primary}
          uncheckedIcon={
            <Brightness2Icon
              style={{
                color: themeContext.textColors.primary,
                height: '100%',
                width: '100%',
                padding: '5px'
              }}
            />
          }
          checkedIcon={
            <WbSunnyIcon
              style={{
                color: themeContext.colors.accent,
                height: '100%',
                width: '100%',
                padding: '5px'
              }}
            />
          }
          height={35}
          width={70}
        />
      </ThemeBtn>
      <HeaderMenu>
        <HeaderLink href='#welcome' onClick={() => scrollIt(0)}>
          Welcome
        </HeaderLink>
        <HeaderLink href='#products' onClick={() => scrollIt(1)}>
          Products
        </HeaderLink>
        <HeaderLink href='#team' onClick={() => scrollIt(2)}>
          Our team
        </HeaderLink>
        <HeaderLink href='#contact' onClick={() => scrollIt(3)}>
          Get in touch
        </HeaderLink>
      </HeaderMenu>
    </HeaderStyled>
  );
};

export default Header;
