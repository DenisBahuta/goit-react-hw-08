import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RestrictedRoute = ({ children, redirectTo = "/contacts" }) => {
  const { isSignedIn } = useAuth();
  return isSignedIn ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoute;
