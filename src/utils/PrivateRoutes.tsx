import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element, ...rest }: any) => {
  const { state } = useAuth();

  return state.isLogged ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/Login" replace={true} state={{ from: rest.location }} />
  );
};

export default PrivateRoute;
