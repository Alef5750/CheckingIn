import React from "react";

// import Navbar from "components/Navbar";
// import Footer from "components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <React.Fragment>
      <header>{/* <Navbar /> */}</header>
      <main>
        <Outlet />
      </main>
      <footer>{/* <Footer /> */}</footer>
    </React.Fragment>
  );
}
