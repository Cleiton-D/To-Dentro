import styled from 'styled-components';

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
