import { useSelector } from "react-redux";
import {
  selectUserData,
  selectIsSignedIn,
  selectIsRefreshing,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const userData = useSelector(selectUserData);
  const isSignedIn = useSelector(selectIsSignedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    userData,
    isSignedIn,
    isRefreshing,
  };
};
