import React from "react";
import { Link, Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";

import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <header>
        <div className="container">
          <Menu />
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
