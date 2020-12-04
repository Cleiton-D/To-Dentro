import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #4a86e8;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  margin-top: 16px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;

  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#4a86e8')};
  }
`;
