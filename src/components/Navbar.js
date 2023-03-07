import React from "react";

const Navbar = () => {
    return (
        <nav className="main-nav">
        <ul>
          <li><a href='/cats'>Cats</a></li>
          <li><a href='/dogs'>Dogs</a></li>
          <li><a href='/computer'>Computers</a></li>
        </ul>
      </nav>
    )
}

export default Navbar