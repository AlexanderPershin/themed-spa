import React from 'react';
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';
import membersSprite from '../../img/users.png';

const StyledMember = styled(animated.div)`
  min-height: 150px;
  min-width: 150px;
  border: 10px solid ${({ theme }) => theme.colors.secondary};
  background: url(${membersSprite});
  background-position: ${({ positx }) => positx}px ${({ posity }) => posity}px;
  background-repeat: no-repeat;
  background-size: 350% 350%;
  border-radius: 1000px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => theme.textColors.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    opacity: 0.3;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    &::before {
      opacity: 0.2;
    }
  }
`;

const Member = ({ posX = 0, posY = 0, username = 'Jim', children }) => {
  const [{ y, sh }, set] = useSpring(() => ({
    y: 10,
    sh: 0,
    config: config.wobbly
  }));

  return (
    <StyledMember
      positx={posX}
      posity={posY}
      style={{
        transform: y.interpolate(v => `translateY(${v}px`),
        boxShadow: sh.interpolate(
          v => `0 ${v}px 10px ${v / 2}px rgba(0,0,0,0.5)`
        ),
        color: sh.interpolate(v => `rgba(255,255,255,${v / 10})`)
      }}
      onMouseEnter={() => set({ y: 0, sh: 10 })}
      onMouseLeave={() => set({ y: 10, sh: 0 })}
    >
      {username}
    </StyledMember>
  );
};

export default Member;
