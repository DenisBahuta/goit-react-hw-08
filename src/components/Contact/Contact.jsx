import { MdPerson, MdPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import PropTypes from "prop-types";
import { apiDeleteUserContact } from "../../redux/contacts/operations";

const Contact = ({ contact, openModal }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(apiDeleteUserContact(contact.id));

  return (
    <li className={css.container}>
      <div className={css.contact}>
        <div className={css.text}>
          <MdPerson /> {contact.name}
        </div>
        <div>
          <MdPhone /> {contact.number}
        </div>
      </div>

      <div className={css.btnWrapper}>
        <button
          className={css.btn}
          type='button'
          onClick={() => {
            openModal(contact);
          }}
        >
          Edit
        </button>
        <button className={css.button} type='button' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Contact;
