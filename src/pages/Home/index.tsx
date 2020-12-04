import Header from '../../components/Header';

import { Container, WelcomeText } from './styles';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container>
        <WelcomeText>Bem vindo</WelcomeText>
      </Container>
    </>
  );
};

export default Home;
