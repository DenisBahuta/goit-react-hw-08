import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet-async";

import LoginForm from "../components/LoginForm/LoginForm";
import { apiLoginUser } from "../redux/auth/operations";

const Login = () => {
  const dispatch = useDispatch();
  const onLogin = (formData) => {
    dispatch(apiLoginUser(formData));
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default Login;
