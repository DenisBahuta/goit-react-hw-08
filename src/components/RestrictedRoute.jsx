import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RestrictedRoute = ({ children, redirectTo = "/contacts" }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoute;
