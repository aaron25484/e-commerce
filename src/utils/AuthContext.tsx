import { FC, PropsWithChildren, createContext, useContext, useReducer } from "react";


type AuthState = { isLogged: boolean, username: string | null }

type AuthAction =  { type: 'LOGIN', username: string } | { type: 'LOGOUT'}

const initialState: AuthState = {
    isLogged: localStorage.getItem('isLogged') === 'true',
    username: localStorage.getItem('username'),
}
export const AuthContext = createContext<{
    state: AuthState,
    dispatch: React.Dispatch<AuthAction>;
}>({
    state:initialState,
    dispatch: () => {}
})

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return { isLogged: true, username: action.username };
        case 'LOGOUT':
            return {isLogged: false, username: null };
        default:
            return state;    
    }
}

export const AuthContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    
    return context
}