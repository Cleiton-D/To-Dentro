import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1440px;
  height: 100%;

  position: relative;
  top: 110px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #4a86e8;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  color: #333;
  text-align: justify;

  & + p {
    margin-top: 10px;
  }
`;
