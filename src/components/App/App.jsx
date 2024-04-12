import { useDispatch } from "react-redux";
import Layout from "../Layout";
import { PrivateRoute } from "../PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute";
import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../../hooks";

const Home = lazy(() => import("../../pages/Home"));
const Registration = lazy(() => import("../../pages/Registration"));
const Login = lazy(() => import("../../pages/Login"));
const Contacts = lazy(() => import("../../pages/Contacts"));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path='/register'
            element={
              <RestrictedRoute
                redirectTo='/contacts'
                component={<Registration />}
              />
            }
          />
          <Route
            path='/login'
            element={
              <RestrictedRoute redirectTo='/contacts' component={<Login />} />
            }
          />
          <Route
            path='/contacts'
            element={
              <PrivateRoute redirectTo='/login' component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

// вариант 2

// <Route
//             path='/register'
//             element={
//               <RestrictedRoute>
//                 <Registration />
//               </RestrictedRoute>
//             }
//           />
//           <Route
//             path='/login'
//             element={
//               <RestrictedRoute>
//                 <Login />
//               </RestrictedRoute>
//             }
//           />
//           <Route
//             path='/contacts'
//             element={
//               <PrivateRoute>
//                 <Contacts />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path='/home'
//             element={
//               <PrivateRoute>
//                 <Home />
//               </PrivateRoute>
//             }
//           />
