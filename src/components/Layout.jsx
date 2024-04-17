import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import Loader from "../components/Loader/Loader";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
