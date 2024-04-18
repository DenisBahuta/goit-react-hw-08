import { useSelector } from "react-redux";
import {
  selectUserData,
  selectisLoggedIn,
  selectIsRefreshing,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const userData = useSelector(selectUserData);
  const isLoggedIn = useSelector(selectisLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    userData,
    isLoggedIn,
    isRefreshing,
  };
};
