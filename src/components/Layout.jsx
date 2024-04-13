import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import Loader from "../components/Loader/Loader";

function Layout() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
}

export default Layout;
