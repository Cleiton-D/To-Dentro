import { InputHTMLAttributes, Ref, forwardRef } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

const Input = (props: InputProps, ref: Ref<HTMLInputElement>): JSX.Element => {
  return (
    <Container>
      <input {...props} ref={ref} />
    </Container>
  );
};

export default forwardRef(Input);
