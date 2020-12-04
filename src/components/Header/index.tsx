import { FiPower } from 'react-icons/fi';

import Logo from '../Logo';

import { useAuth } from '../../hooks/auth';

import { Container, Content, Link, LogoutButton, LogoutText } from './styles';

const Header = (): JSX.Element => {
  const { logout } = useAuth();

  return (
    <Container>
      <Content>
        <Link to="/home">
          <Logo />
        </Link>
        <LogoutButton onClick={logout}>
          <FiPower size={20} />
          <LogoutText>Sair</LogoutText>
        </LogoutButton>
      </Content>
    </Container>
  );
};

export default Header;
