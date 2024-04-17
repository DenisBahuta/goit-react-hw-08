import { useDispatch } from "react-redux";

import RegisterForm from "../components/RegisterForm/RegisterForm";
import { apiRegisterUser } from "../redux/auth/operations";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const dispatch = useDispatch();
  const onRegister = (formData) => {
    dispatch(apiRegisterUser(formData));
  };

  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <RegisterForm onRegister={onRegister} />
    </div>
  );
};

export default Register;
