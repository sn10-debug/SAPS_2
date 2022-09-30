import React from "react";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="tabs">
        <div className="tab-1 tab-sub">
          <div>
            <NavLink activeClassName="active-link" to="/" exact={true}>
              HOME
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName="active-link" to="/about" exact={true}>
              ABOUT US
            </NavLink>
          </div>
        </div>
        <div className="tab-2 tab-sub">
          <div>
            <img src="../images/Logo.png" />
          </div>
        </div>

        <div className="tab-3 tab-sub">
          <div>
            <NavLink activeClassName="active-link" to="/contact" exact={true}>
              CONTACT US
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName="active-link" to="/login" exact={true}>
              LOGIN/SIGN-IN
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
