import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children, redirectTo = "/login" }) => {
  const { isSignedIn, isRefreshing } = useAuth();

  return !isSignedIn && !isRefreshing ? (
    <Navigate to={redirectTo} replace />
  ) : (
    children
  );
};
export default PrivateRoute;
