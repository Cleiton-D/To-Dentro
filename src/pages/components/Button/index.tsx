import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  loading?: boolean;
};

const Button = ({ children, loading, ...rest }: ButtonProps): JSX.Element => (
  <Container {...rest}>{loading ? 'Carregando...' : children}</Container>
);

export default Button;
