import React from "react";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="container-1">
          <NavLink activeClassName="active-link" className="text link" to="/">
            HOME{" "}
          </NavLink>
          <NavLink
            activeClassName="active-link"
            className="text-1 link"
            to="/about"
          >
            ABOUT US{" "}
          </NavLink>
          <img className="image" src={"../images/Logo.png"} />
          <NavLink
            activeClassName="active-link "
            className="text-2 link"
            to="/contact"
          >
            CONTACT US
          </NavLink>
          <NavLink
            activeClassName="active-link"
            className="text-3 link"
            to="/login"
          >
            LOGIN/SIGN-IN
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;
