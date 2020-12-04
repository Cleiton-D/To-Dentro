import styled, { css } from 'styled-components';

import { MessageType } from '.';

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1440px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  margin-bottom: 80px;
`;

export const FormContent = styled.section`
  width: 600px;
  background: #ebebeb;
  border: 1px solid #72a0e3;
  border-radius: 20px;
  padding: 80px 50px;
`;

export const Form = styled.form`
  flex: 1;

  button {
    margin-top: 40px;
  }
`;

type MessageContainerProps = {
  type: MessageType;
};

const messageContainerModifiers = {
  error: () => css`
    background-color: #e85f5f;
    border: 1px solid #c53030;
  `,
  warning: () => css`
    background-color: #f5d18f;
    border: 1px solid #d0a52f;
  `,
};

export const MessageContainer = styled.div<MessageContainerProps>`
  ${({ type }) => css`
    padding: 15px 10px;
    margin-bottom: 15px;
    border-radius: 4px;
    color: #222;

    ${type && messageContainerModifiers[type]}
  `}
`;
