import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";

import { selectIsLoading, selectIsError } from "../redux/contacts/selectors";
import { apiGetUserContacts } from "../redux/contacts/operations";

const Contacts = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(apiGetUserContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>

      <ContactForm />
      <SearchBox />
      {isLoading && !isError && <b>Request in progress...</b>}
      {!isLoading && <ContactList />}
    </>
  );
};

export default Contacts;
