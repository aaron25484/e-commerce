import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface PrivateRoutesProps {
  children: React.ReactNode;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ children }) => {
  const { state } = useContext(AuthContext);
  const isLogged = state.isLogged;

  return isLogged ? children : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
