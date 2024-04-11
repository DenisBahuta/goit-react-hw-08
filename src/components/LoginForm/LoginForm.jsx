import css from "./LoginForm.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const UserLoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

function LoginForm({ onLogin }) {
  const handleSubmit = (data, formActions) => {
    onLogin(data);
    formActions.resetForm();
  };

  return (
    <Formik
      validationSchema={UserLoginSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} onSubmit={handleSubmit} autoComplete='off'>
        <label className={css.label}>
          Email
          <Field
            className={css.formInput}
            placeholder='email@mail.com'
            type='email'
            name='email'
          />
        </label>
        <label className={css.label}>
          Password
          <Field
            className={css.formInput}
            placeholder='min of 8 characters'
            type='password'
            name='password'
          />
        </label>
        <button type='submit'>Log In</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
