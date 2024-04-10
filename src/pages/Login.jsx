import { useDispatch } from "react-redux";
import LoginForm from "../components/LoginForm/LoginForm";
import { logIn } from "../redux/auth/operations";

const Login = () => {
  const dispatch = useDispatch();

  const onLogin = (formData) => {
    dispatch(logIn(formData));
  };

  return (
    <div>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default Login;
