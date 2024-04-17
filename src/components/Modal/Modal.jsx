import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import {
  apiUpdateUserContact,
  apiGetUserContacts,
} from "../../redux/contacts/operations";

import PropTypes from "prop-types";

import css from "./Modal.module.css";

const ModalSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!"),
  number: Yup.string().min(3, "Too Short!").max(15, "Too Long!"),
});

const initialValues = {
  name: "",
  number: "",
};

const Modal = ({ contact, onClick }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    onClick(false);
  };

  const handleSubmit = (values, actions) => {
    const name = values.name.trim() != "" ? values.name : contact.name;
    const number = values.number.trim() != "" ? values.number : contact.number;
    dispatch(apiUpdateUserContact({ id: contact.id, name, number }));
    dispatch(apiGetUserContacts());
    actions.resetForm();
  };
  return (
    <div className={css.backdrop}>
      <div className={css.wrapperModal}>
        <h2>Edit contact</h2>

        <p>Name: {contact.name}</p>
        <p>Number: {contact.number}</p>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={ModalSchema}
        >
          <Form className={css.form}>
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
              <span>Password</span>
              <Field className={css.input} type='text' name='number' />
              <ErrorMessage
                className={css.errorMsg}
                name='number'
                component='span'
              ></ErrorMessage>
            </label>

            <div className={css.btnModal}>
              <button className={css.submitBtn} type='submit'>
                Edit Contact
              </button>
              <button
                className={css.submitBtn}
                type='button'
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

Modal.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Modal;
