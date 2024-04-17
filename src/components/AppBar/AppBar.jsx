import { useAuth } from "../../hooks/useAuth";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

const AppBar = () => {
  const { isSignedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isSignedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
