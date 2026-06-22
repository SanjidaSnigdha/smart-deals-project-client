import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Home from "../components/Home/Home";
import Banner from "../components/Banner/Banner";

const RootLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>

      <Outlet>{/* <Home></Home> */}</Outlet>
    </div>
  );
};

export default RootLayouts;
