import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";
// import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";
// import { useSelector } from "react-redux";

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  // const loggedIn = useSelector(selectIsLoggedIn);
  // const refreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
