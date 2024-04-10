// import { useDispatch } from "react-redux";
// import ContactForm from "../ContactForm/ContactForm";
// import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";
// import css from "./App.module.css";
// import { fetchContacts } from "/contactsOps";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../../pages/Home"));
const Registration = lazy(() => import("../../pages/Registration"));
const Login = lazy(() => import("../../pages/Login"));
const Contacts = lazy(() => import("../../pages/Contacts"));

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contacts' element={<Contacts />} />
    </Routes>
  );
}

export default App;
