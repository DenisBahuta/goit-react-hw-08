import "./App.module.css";

import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apiRefreshUser } from "../redux/auth/operations";
import Layout from "./Layout";

import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
import { selectIsRefreshing } from "../redux/auth/selectors";

const Home = lazy(() => import("../pages/Home"));
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const Contacts = lazy(() => import("../pages/Contacts"));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);
  return (
    <>
      <Toaster />{" "}
      {isRefreshing ? (
        <span>Please, wait...</span>
      ) : (
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path='/register'
              element={
                <RestrictedRoute>
                  <Register />
                </RestrictedRoute>
              }
            />
            <Route
              path='/login'
              element={
                <RestrictedRoute>
                  <Login />
                </RestrictedRoute>
              }
            />
            <Route
              path='/contacts'
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
