import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../assets/css/navbar.css";
import logo from "../assets/images/logo.ico";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} style={{ width: 30, height: 30 }} alt="logo" />
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          {/* Add more links here */}
        </nav>
        <button type="button">SignUp</button>
      </header>

      <Outlet />
    </>
  );
};

export default Navbar;
