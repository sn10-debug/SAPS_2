import React from "react";
import { Link } from "react-router-dom";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      error: undefined,
      formStatus: "submission",
    };
  }

  onFormSubmit(e) {
    e.preventDefault();

    let name = e.target.elements.name.value;
    let email_id = e.target.elements["email-id"].value;
    let password = e.target.elements.password.value;
    let confirm_password = e.target.elements["confirm-password"].value;
    let age = e.target.elements.age.value;
    let gender = e.target.elements.gender.value;
    let requirements = e.target.elements.requirements.value;
    let emer_nums = e.target.elements.emergency_numbers.value;

    if (!name) {
      this.setState({ error: "Make sure you enter the name" });
      return;
    }

    if (name.split(" ").length < 2) {
      this.setState({ error: "Make sure you enter your full name" });
      return;
    }

    if (!email_id) {
      this.setState({ error: "Make sure you enter the email ID" });
      return;
    }

    if (!password) {
      this.setState({ error: "Make sure you enter the password" });
      return;
    }

    if (password !== confirm_password) {
      this.setState({ error: "Make sure you correctly confirm your password" });
      return;
    }

    if (!age) {
      this.setState({ error: "Make sure you enter your age" });
      return;
    }

    if (
      !(
        gender.toLowerCase() === "male" ||
        gender.toLowerCase() === "female" ||
        gender.toLowerCase() === "others"
      )
    ) {
      this.setState({ error: "Make sure you enter the correct gender" });
      return;
    }

    if (!requirements) {
      this.setState({ error: "Make sure you enter the requirements" });
      return;
    }

    if (!emer_nums) {
      this.setState({ error: "Make sure you enter the emergency numbers" });
    }

    if (this.state.error) this.setState({ error: undefined });
  }
  render() {
    return (
      <div>
        {this.state.formStatus === "submission" ? (
          <div>
            <form onSubmit={this.onFormSubmit}>
              <div className="signUp-container">
                <div className="signUp-container-1">
                  <div className="signUp-container-2">
                    <span className="signUp-text">SIGN UP</span>
                    <span className="signUp-text-1">NAME</span>
                    <input type="text" name="name" />
                    <span className="signUp-text-2">EMAIL</span>
                    <input type="email" name="email" />
                    <span className="signUp-text-3">PASSWORD</span>
                    <input type="password" name="password" />
                    <span className="signUp-text-4">AGE</span>
                    <input type="number" name="age" />
                    <span className="signUp-text-5">GENDER</span>
                    <input type="text" name="gender" />
                    <span className="signUp-text-6">REQUIREMENT</span>
                    <textarea type="text" name="requirement" />
                    <span className="signUp-text-7">EMERGENCY NUMBER</span>
                    <textarea type="number" name="emergency_numbers" />

                    <span className="signUp-text-8">Forgot Password?</span>
                    <span className="signUp-text-9">PICK YOUR MODE</span>
                  </div>
                </div>
              </div>

              {this.state.error ? <p>{this.state.error}</p> : ""}
            </form>

            <Link to="/logIn">Log In ?</Link>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SignUpForm;
