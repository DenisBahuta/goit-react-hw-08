import css from "./RegistrationForm.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const UserRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("User name is required!")
    .min(2, "User name must be at least 2 characters!")
    .max(50, "User name must be less than 50 characters!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = ({ onRegister }) => {
  const handleSubmit = (data, formActions) => {
    onRegister(data);
    formActions.resetForm();
  };
  return (
    <Formik
      validationSchema={UserRegisterSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} onSubmit={handleSubmit} autoComplete='off'>
        <label className={css.label}>
          Username
          <Field
            className={css.formInput}
            placeholder='Adam Smith'
            type='text'
            name='name'
          />
        </label>
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
        <button type='submit'>Registration</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
