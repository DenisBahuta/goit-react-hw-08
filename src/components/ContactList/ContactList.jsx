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
import { selectContacts } from "../../redux/contacts/selectors";

// компонент ContactList рисует список контактов

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ul className={css.list}>
        {contacts !== null &&
          visibleContacts.map((contact) => (
            <li className={css.item} key={contact.id}>
              <Contact {...contact} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ContactList;
