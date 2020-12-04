import { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

const Input = (props: InputProps): JSX.Element => {
  return (
    <Container>
      <input {...props} placeholder="ID do usuário" />
    </Container>
  );
};

export default Input;
