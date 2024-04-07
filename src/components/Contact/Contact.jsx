import { MdPerson, MdPhone } from "react-icons/md";
import css from "./Contact.module.css";

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.contact}>
        <p className={css.text}>
          <span className={css.span}>
            <MdPerson />
          </span>
          {name}
        </p>
        <p className={css.text}>
          <span className={css.span}>
            <MdPhone />
          </span>
          {number}
        </p>
      </div>
      <button className={css.button} type='button' onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

// Описание типов пропсов компонента Contact
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
