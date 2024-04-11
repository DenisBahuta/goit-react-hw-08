import DocumentTitle from "../components/DocumentTitle";
import { useDispatch } from "react-redux";
import LoginForm from "../components/LoginForm/LoginForm";
import { logIn } from "../redux/auth/operations";

function Login() {
  const dispatch = useDispatch();

  const onLogin = (formData) => {
    dispatch(logIn(formData));
  };

  return (
    <div>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm onLogin={onLogin} />
    </div>
  );
}

export default Login;
