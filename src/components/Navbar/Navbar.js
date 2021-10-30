import React from "react";
import "./Navbar.css";
import { Link } from "gatsby";

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status : props.navbarStatus
    }
  }

  render() {
      return (
          <nav className={this.state.status ? "NavbarItems-home" : "NavbarItems"}>

            <h1 className = {this.state.status ? "NavbarName-home" : "NavbarName"} >
                <Link to="/" itemProp="url">
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
      )
  }

}

export default Navbar;
