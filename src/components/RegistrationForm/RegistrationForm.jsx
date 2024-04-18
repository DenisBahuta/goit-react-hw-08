import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import css from "./RegistrationForm.module.css";

const UserRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email address")
    .min(2, "Minimum of two characters")
    .max(50, "Maximum of fifty characters")
    .required("Enter a valid email address"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters!")
    .max(50, "Password must be less than 50 characters!")
    .required("Password is required!"),
  name: Yup.string()
    .min(2, "Username must be at least 2 characters!")
    .max(50, "Username must be less than 50 characters!")
    .required("Username is required!"),
});

const initialValues = {
  email: "",
  password: "",
  name: "",
};

const RegistrationForm = ({ onRegister }) => {
  const handleSubmit = (values, actions) => {
    onRegister(values);
    actions.resetForm();
  };
  return (
    <div className={css.wrapper}>
      <Formik
        validationSchema={UserRegisterSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <h2>Registration</h2>

          <label className={css.label}>
            <span>Name</span>
            <Field className={css.input} type='text' name='name' />
            <ErrorMessage
              className={css.errorMsg}
              name='name'
              component='span'
            ></ErrorMessage>
          </label>

          <label className={css.label}>
            <span>Email</span>
            <Field className={css.input} type='email' name='email' />
            <ErrorMessage
              className={css.errorMsg}
              name='email'
              component='span'
            ></ErrorMessage>
          </label>

          <label className={css.label}>
            <span>Password</span>
            <Field className={css.input} type='password' name='password' />
            <ErrorMessage
              className={css.errorMsg}
              name='password'
              component='span'
            ></ErrorMessage>
          </label>
          <button
            className={css.formBtn}
            type='submit'
            title='Click to register'
          >
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

RegistrationForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};
export default RegistrationForm;
