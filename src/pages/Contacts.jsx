import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm/ContactForm";
import { fetchContacts } from "../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
    </div>
  );
};

export default Contacts;
