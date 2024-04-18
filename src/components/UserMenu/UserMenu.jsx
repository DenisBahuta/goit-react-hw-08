import css from "./UserMenu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { apiLogoutUser } from "../../redux/auth/operations";

const UserMenu = () => {
  const userName = useSelector(selectUser).name;
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(apiLogoutUser());
  };
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {userName}</p>
      <button type='button' onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
