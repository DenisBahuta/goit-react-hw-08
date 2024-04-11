import DocumentTitle from "../components/DocumentTitle";
import { useDispatch } from "react-redux";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { register } from "../redux/auth/operations";

const Registration = () => {
  const dispatch = useDispatch();

  const onRegister = (formData) => {
    dispatch(register(formData));
  };

  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
      <RegistrationForm onRegister={onRegister} />
    </div>
  );
};

export default Registration;
