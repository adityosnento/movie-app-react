import React, { Component } from "react";
import "../register/register.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { login } from "../../../store/actions/auth";
import { connect } from "react-redux";

const emailRegex = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      Redirect: false,
      formErrors: {
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("test");
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(user);
  };

  handleChange = e => {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    this.setState({
      [e.target.id]: e.target.value
    });

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "invalid email addres";
        break;

      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({
      formErrors
    });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <FontAwesomeIcon
            className="close"
            icon="window-close"
            onClick={this.props.clickModal}
          />
          <h1>Sign In</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="email">
              <label>Email</label>
              <FontAwesomeIcon className="iconawesome" icon="envelope" />
              <input
                type="text"
                placeholder="Email"
                id="email"
                required
                onChange={this.handleChange}
                name="email"
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div className="password">
              <label>Password</label>
              <FontAwesomeIcon className="iconawesome" icon="lock" />
              <input
                type="password"
                placeholder="Password"
                id="password"
                required
                onChange={this.handleChange}
                name="password"
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>

            <div className="createAccount">
              <button type="submit">Sign In</button>
              <small>
                Don't have any Account? Go to{" "}
                <a
                  id={this.props.signup}
                  href="/#"
                  onClick={this.props.clickModal}
                >
                  Sign Up!
                </a>{" "}
              </small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(Login);
