import { FiPower } from 'react-icons/fi';

import Logo from '../Logo';

import { Container, Content, Link, LogoutButton, LogoutText } from './styles';

const Header = (): JSX.Element => (
  <Container>
    <Content>
      <Link to="/home">
        <Logo />
      </Link>
      <LogoutButton>
        <FiPower size={20} />
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </Content>
  </Container>
);

export default Header;
