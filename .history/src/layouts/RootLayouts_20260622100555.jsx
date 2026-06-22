import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Home from "../components/Home/Home";

const RootLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet>
        <Home></Home>
      </Outlet>
    </div>
  );
};

export default RootLayouts;
