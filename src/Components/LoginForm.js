import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-container-1">
          <div className="login-container-2">
            <span className="login-text">USERNAME</span>
            <input type="text" />

            <span className="login-text-1">PASSWORD</span>
            <input type="password" />

            <span className="login-text-2">Forgot Password?</span>
            <div className="container-3">
              <button className="login-text-3">LOGIN</button>
            </div>
            <Link to="/signUp">
              {" "}
              <span className="login-text-4">Sign In ?</span>{" "}
            </Link>
            <span className="login-text-5">Forgot Password?</span>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
