import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import {
  selectIsError,
  selectIsLoading,
  selectVisibleContacts,
} from "../../redux/contacts/selectors";
import Modal from "../Modal/Modal";
import { useState } from "react";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [contact, setContact] = useState({});
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const openModal = (contactData) => {
    setContact(contactData);
    setIsOpenModal(true);
  };
  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ul className={css.list}>
        {visibleContacts &&
          visibleContacts.map((contact) => (
            <Contact openModal={openModal} key={contact.id} contact={contact} />
          ))}

        {visibleContacts && visibleContacts.length === 0 && (
          <p>List is empty</p>
        )}
      </ul>
      {isOpenModal && <Modal onClick={setIsOpenModal} contact={contact} />}
    </>
  );
};

export default ContactList;
