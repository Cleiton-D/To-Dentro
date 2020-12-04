import { createContext, useState, useCallback, useContext } from 'react';

type AuthContextData = {
  username?: string;
  login: (id: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type MockyResponse = {
  user: string;
};

type AuthProviderProps = {
  children: React.ReactNode;
};
const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [username, setUsername] = useState<string>();

  const login = useCallback(async (id: string) => {
    const response = await fetch(`https://run.mocky.io/v3/${id}`);
    const result = (await response.json()) as MockyResponse;

    setUsername(result.user);
  }, []);

  const logout = useCallback(() => {
    setUsername(undefined);
  }, []);

  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
