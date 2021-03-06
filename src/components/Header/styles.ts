import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #f2f5fc;
  display: flex;
  align-items: center;

  box-shadow: 2px 0px 5px #9197a7;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1440px;

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
`;

export const LogoutButton = styled.button`
  border: 0;
  background: none;
  outline: 0;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: #555;
  }
`;

export const LogoutText = styled.span`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 500;
`;
