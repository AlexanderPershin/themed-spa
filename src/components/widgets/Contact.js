import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import Widget from '../widgets/Widget';

const EmailInput = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.textColors.primary};
  background-color: transparent;
  padding: ${({ theme }) => theme.fontSizes.sm};
  border: none;
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  margin-bottom: ${({ theme }) => theme.fontSizes.lg};
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

const MsgArea = styled.textarea`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.textColors.primary};
  background-color: transparent;
  padding: ${({ theme }) => theme.fontSizes.sm};
  border: none;
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  margin-bottom: ${({ theme }) => theme.fontSizes.lg};
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

const SendBtn = styled(animated.button)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.accent};
  padding: 0 ${({ theme }) => theme.fontSizes.sm};
  background-color: transparent;
  border: 5px solid ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const Contact = () => {
  const handleContact = () => {
    alert('Sending message... Just kidding :)');
  };

  return (
    <Widget
      title='Get In Touch'
      colStart={2}
      colEnd={-2}
      rowStart={1}
      rowEnd={8}
    >
      <EmailInput type='email' placeholder='myemail@gmail.com' />
      <MsgArea
        name='msg'
        id='msg'
        cols='20'
        rows='10'
        placeholder='Your message'
      ></MsgArea>
      <SendBtn onClick={handleContact}>Send</SendBtn>
    </Widget>
  );
};

export default Contact;
