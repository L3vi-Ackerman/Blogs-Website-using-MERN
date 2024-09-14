import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="company-logo">BLOGS</div>
      <div className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/signin">SignIn</NavLink>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
