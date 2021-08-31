import React from "react";
import "./Navbar.css";

import { Link } from "gatsby";

function Navbar() {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-name">
        <Link to="/home" itemProp="url">
            Komal Rathi
        </Link>
        </h1>
      <div>
        <ul className="navbar-menu">
          <li>
            <Link className="nav-links" to="/about-me" itemProp="url">
              About Me
            </Link>
            <Link className="nav-links" to="/blog" itemProp="url">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
