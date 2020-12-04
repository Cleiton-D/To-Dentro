import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1440px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WelcomeText = styled.span`
  font-weight: 500;
  font-size: 32px;
  color: #4a86e8;
`;

export const HelpLink = styled(Link)`
  position: fixed;
  bottom: 20px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #4e4e4e;
  background-color: #4a86e8;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#4a86e8')};
  }
`;
