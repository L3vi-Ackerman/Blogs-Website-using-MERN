import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="company-logo">BLOGS</div>
      <div className="nav-links-div">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li>
            <NavLink to="/signin" className="nav-link">SignIn</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
