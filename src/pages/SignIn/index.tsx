import { useCallback, FormEvent, useRef, useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  LogoContainer,
  FormContent,
  Form,
  MessageContainer,
} from './styles';

export type MessageType = 'warning' | 'error';

type Message = {
  type: MessageType;
  content: string;
};

const SignIn = (): JSX.Element => {
  const [message, setMessage] = useState<Message>();
  const [loading, setLoading] = useState(false);
  const [loginWithIdError, setLoginWithIdError] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { login, loginWithUsername } = useAuth();

  const handleSignInWithUsername = useCallback(
    (username: string) => {
      try {
        loginWithUsername(username);
      } catch {
        setMessage({
          type: 'error',
          content:
            'Não foi possível fazer login com o usuário informado, tente novamente',
        });
      }
    },
    [loginWithUsername],
  );

  const handleSignIn = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      setLoading(true);

      if (event.target instanceof HTMLFormElement && inputRef.current) {
        const { value } = inputRef.current;
        if (!value) {
          setMessage({
            type: 'warning',
            content: 'Preencha o campo abaixo com o ID do usuário.',
          });
          setLoading(false);

          return;
        }

        if (loginWithIdError) {
          handleSignInWithUsername(value);
          return;
        }

        try {
          await login(value);
        } catch {
          setMessage({
            type: 'error',
            content:
              'Não foi possível fazer login com o ID de usuário informado, informe um nome de usuário',
          });
          inputRef.current.value = '';
          setLoginWithIdError(true);
        }

        setLoading(false);
      }
    },
    [login, handleSignInWithUsername, loginWithIdError],
  );

  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <FormContent>
        <Form onSubmit={handleSignIn}>
          {message && (
            <MessageContainer type={message.type}>
              {message.content}
            </MessageContainer>
          )}
          <Input
            name="user"
            placeholder={loginWithIdError ? 'Nome do usuário' : 'ID do usuário'}
            ref={inputRef}
          />
          <Button loading={loading}>Login</Button>
        </Form>
      </FormContent>
    </Container>
  );
};

export default SignIn;
