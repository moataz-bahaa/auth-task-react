import { useReducer } from 'react';
import { User } from '../../types';

interface AuthState {
  isAuthorized: boolean;
  user: User | null;
  token: string | undefined;
}

interface Action {
  type: 'LOGIN' | 'LOGOUT';
  payload: {
    user: User | null;
    token?: string;
  };
}

const authReducer = (state: AuthState, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthorized: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthorized: false,
        user: null,
        token: undefined,
      };
    default:
      throw new Error('unknown auth action');
  }
};

const initialState: AuthState = {
  isAuthorized: false,
  user: null,
  token: undefined,
};

export const useAuthReducer = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return {
    state,
    dispatch,
  };
};
