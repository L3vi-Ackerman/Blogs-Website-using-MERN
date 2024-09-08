import React from 'react'
import {Link} from 'react-router-dom';
import '../Styles/Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="company-logo">BLOGS</div>
        <div className="nav-links">
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/about">About</Link></li>
            <li><Link to ="/signin">SignIn</Link></li>
        </div>
    </div>
  )
}

export default Navbar