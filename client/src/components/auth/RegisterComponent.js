import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

export default class RegisterComponent extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    //const element = (<div>Text from Element</div>)
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirmpassword: "",
    });

    const { email, password, confirmpassword } = formData;

    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
      <div className="container">
        <form className="form" action="">
          <div className="col-lg-5 mx-auto">
            <header className="px-4 px-md-0 py-6 align-items-center">
              <h2>
                <center>Create an Account</center>
              </h2>
            </header>
            <div className="p-4 p-4">
              <div className="form-group mb-4">
                <div className="js-form-message js-focus-state">
                  <label
                    id="signinEmailLabel11"
                    className="form-label"
                    for="signinEmail11"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-0 height-4 px-4"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    id="signinEmail11"
                    placeholder="creativelayers088@gmail.com"
                    aria-label="creativelayers088@gmail.com"
                    aria-describedby="signinEmailLabel11"
                    required
                  />
                </div>
              </div>

              <div className="form-group mb-4">
                <div className="js-form-message js-focus-state">
                  <label
                    id="signinPasswordLabel11"
                    className="form-label"
                    for="signinPassword11"
                  >
                    Password *
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-0 height-4 px-4"
                    name="password"
                    id="signinPassword11"
                    placeholder=""
                    aria-label=""
                    aria-describedby="signinPasswordLabel11"
                    required
                  />
                </div>
              </div>

              <div className="form-group mb-4">
                <div className="js-form-message js-focus-state">
                  <label
                    id="signupConfirmPasswordLabel9"
                    className="form-label"
                    for="signupConfirmPassword9"
                  >
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-0 height-4 px-4"
                    name="confirmPassword"
                    id="signupConfirmPassword9"
                    placeholder=""
                    aria-label=""
                    aria-describedby="signupConfirmPasswordLabel9"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-block py-3 rounded-0 btn-dark"
                >
                  Create Account
                </button>
              </div>
              <div className="text-center mb-4">
                <span className="small text-muted">
                  Already have an account?
                </span>
                <Link
                  to="/login"
                  className="js-animation-link small"
                  data-target="#login1"
                  data-link-group="idForm1"
                  data-animation-in="fadeIn"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
