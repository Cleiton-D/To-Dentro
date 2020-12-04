import { FiHelpCircle } from 'react-icons/fi';

import Header from '../../components/Header';

import { useAuth } from '../../hooks/auth';

import { Container, WelcomeText, HelpLink } from './styles';

const Home = (): JSX.Element => {
  const { username } = useAuth();

  return (
    <>
      <Header />
      <Container>
        <WelcomeText>Bem vindo {username}</WelcomeText>
        <HelpLink to="/help">
          <FiHelpCircle color="#fff" size={24} />
        </HelpLink>
      </Container>
    </>
  );
};

export default Home;
