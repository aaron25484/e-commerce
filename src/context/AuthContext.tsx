import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";

import { LoginInputs } from "../pages/LoginPage";

type AuthState = {
  isLogged: boolean;
  user: LoginInputs | null };

type AuthAction = 
  | { type: "LOGIN"; payload: LoginInputs }
  | { type: "LOGOUT" };

let initialState: AuthState = {
  isLogged: false,
  user: null,
};

const isAuthenticated = localStorage.getItem('isLogged') === 'true';
if (isAuthenticated) {
  initialState = { isLogged: true, user: null };
}

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem('isLogged', 'true')
      return { isLogged: true, user: action.payload };
    case "LOGOUT":
      localStorage.setItem('isLogged', 'false')
      return { isLogged: false, user: null };
    default:
      return state;
  }
};

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
