import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;

  color: #666;
  border: 1px solid #72a0e3;

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #333;
    padding: 0 15px;

    &::placeholder {
      color: #666;
    }
  }
`;
