import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './hooks/auth';

import Routes from './routes';
import GlobalStyles from './styles/global';

const App = (): JSX.Element => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
