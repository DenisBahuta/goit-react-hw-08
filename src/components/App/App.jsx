// import { useDispatch } from "react-redux";
// import ContactForm from "../ContactForm/ContactForm";
// import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";
// import css from "./App.module.css";
// import { fetchContacts } from "/contactsOps";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../Loader/Loader";

const Home = lazy(() => import("../../pages/Home"));
const Registration = lazy(() => import("../../pages/Registration"));
const Login = lazy(() => import("../../pages/Login"));
const Contacts = lazy(() => import("../../pages/Contacts"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </Suspense>
  );
}

export default App;
