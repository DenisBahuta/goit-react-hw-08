import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { fetchContacts } from "../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "../components/Loader/Loader";
import { selectError, selectLoading } from "../redux/contacts/selectors";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <SearchBox />

      {isLoading && !isError && <Loader />}
      {isError && (
        <b>
          There is a problem with the connection to the server, please try again
          later
        </b>
      )}
      <ContactList />
    </div>
  );
};

export default Contacts;
