import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

import { Container, LogoContainer, FormContent, Form } from './styles';

const SignIn = (): JSX.Element => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <FormContent>
        <Form>
          <Input name="id" />
          <Button>Login</Button>
        </Form>
      </FormContent>
    </Container>
  );
};

export default SignIn;
