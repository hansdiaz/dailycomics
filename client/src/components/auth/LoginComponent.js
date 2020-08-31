import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LoginComponent extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    //const element = (<div>Text from Element</div>)
    return (
      <div className="container">
        <div className="col-lg-5 mx-auto">
          <form className="">
            <div id="login1" data-target-group="idForm1">
              <header className="px-4 px-md-0 py-6 align-items-center">
                <h2>
                  <center>Login to Account</center>
                </h2>
              </header>

              <div className="p-4 p-md-4">
                <div className="form-group mb-4">
                  <div className="js-form-message js-focus-state">
                    <label
                      id="signinEmailLabel9"
                      className="form-label"
                      htmlFor="signinEmail9"
                    >
                      Username or email *
                    </label>
                    <input
                      type="email"
                      className="form-control rounded-0 height-4 px-4"
                      name="email"
                      id="signinEmail9"
                      placeholder="creativelayers088@gmail.com"
                      aria-label="creativelayers088@gmail.com"
                      aria-describedby="signinEmailLabel9"
                      required
                    />
                  </div>
                </div>

                <div className="form-group mb-4">
                  <div className="js-form-message js-focus-state">
                    <label
                      id="signinPasswordLabel9"
                      className="form-label"
                      htmlFor="signinPassword9"
                    >
                      Password *
                    </label>
                    <input
                      type="password"
                      className="form-control rounded-0 height-4 px-4"
                      name="password"
                      id="signinPassword9"
                      placeholder=""
                      aria-label=""
                      aria-describedby="signinPasswordLabel9"
                      required
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between mb-5 align-items-center">
                  <Link
                    to="/forgotpassword"
                    className="js-animation-link text-dark font-size-2 t-d-u link-muted font-weight-medium"
                    data-target="#forgotPassword1"
                    data-link-group="idForm1"
                    data-animation-in="fadeIn"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="mb-4d75">
                  <button
                    type="submit"
                    className="btn btn-block py-3 rounded-0 btn-dark"
                  >
                    Sign In
                  </button>
                </div>
                <div className="mb-2">
                  <Link
                    to="/register"
                    className="js-animation-link btn btn-block py-3 rounded-0 btn-outline-dark font-weight-medium"
                    data-target="#signup1"
                    data-link-group="idForm1"
                    data-animation-in="fadeIn"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
