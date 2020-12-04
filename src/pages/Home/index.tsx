import { FiHelpCircle } from 'react-icons/fi';

import Header from '../../components/Header';

import { Container, WelcomeText, AbouLink } from './styles';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container>
        <WelcomeText>Bem vindo</WelcomeText>
        <AbouLink to="/help">
          <FiHelpCircle color="#fff" size={24} />
        </AbouLink>
      </Container>
    </>
  );
};

export default Home;
