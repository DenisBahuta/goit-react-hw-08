import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const INITIAL_FORM_VALUES = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ id: nanoid(), ...values })); // отправляем экшен addContact с данными из формы
    actions.resetForm(); // сброс формы после отправки
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_VALUES}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>Name</label>
        <Field
          className={css.field}
          placeholder='Adam Smith'
          type='text'
          name='name'
        />
        <span className={css.errorMessage}>
          <ErrorMessage name='name' component='span' />
        </span>
        <label className={css.label}>Number</label>
        <Field
          className={css.field}
          placeholder='111-22-33'
          type='text'
          name='number'
        />
        <span className={css.errorMessage}>
          <ErrorMessage name='number' component='span' />
        </span>
        <button className={css.button} type='submit'>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
