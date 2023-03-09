import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="main-nav">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to='/cats'>Cats</NavLink></li>
          <li><NavLink to='/dogs'>Dogs</NavLink></li>
          <li><NavLink to='/computer'>Computers</NavLink></li>
        </ul>
      </nav>
    )
}

export default Navbar