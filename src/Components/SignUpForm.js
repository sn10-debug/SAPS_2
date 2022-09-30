import React from "react";

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

    if (this.state.error) this.setState({ error: undefined });
  }
  render() {
    return (
      <div>
        {this.state.formStatus === "submission" ? (
          <form onSubmit={this.onFormSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p>Name : </p>
                  </td>

                  <td>
                    <input type="text" name="name" />
                  </td>
                </tr>

                <tr>
                  <td>
                    <p>email : </p>
                  </td>

                  <td>
                    <input type="email" name="email-id" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Password : </p>
                  </td>

                  <td>
                    <input type="password" name="password" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Confirm Password : </p>
                  </td>

                  <td>
                    <input type="text" name="confirm-password" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Age : </p>
                  </td>

                  <td>
                    <input type="number" name="age"></input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <button> Sign In</button>
                  </td>
                </tr>
              </tbody>
            </table>
            {this.state.error ? <p>{this.state.error}</p> : ""}
          </form>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SignUpForm;
