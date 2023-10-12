import { createContext, useContext } from 'react';
import { User } from '../../types';
import { useAuthReducer } from './auth-reducer';

interface AuthContextProps {
  isAuthorized: boolean;
  user: User | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthProviderProps {
  children?: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { state, dispatch } = useAuthReducer();

  const login = (user: User, token: string) => {
    dispatch({
      type: 'LOGIN',
      payload: {
        user,
        token,
      },
    });
  };

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
      payload: {
        user: null,
        token: undefined
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthorized: state.isAuthorized,
        user: state.user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('unkown auth context');
  }
  return ctx;
};
