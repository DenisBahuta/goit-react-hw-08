import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/slice";

// компонент ContactList рисует список контактов

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ul className={css.list}>
        {visibleContacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
