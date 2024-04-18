import { useSelector } from "react-redux";
import {
  selectIsSignedIn,
  selectIsRefreshing,
  selectUser,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const userData = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsSignedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    userData,
    isLoggedIn,
    isRefreshing,
  };
};
