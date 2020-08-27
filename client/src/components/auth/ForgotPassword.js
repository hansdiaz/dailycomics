import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ForgotPassword extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    //const element = (<div>Text from Element</div>)
    return (
      <div className="container">
        <form className="">
          <div className="col-lg-5 mx-auto">
            <header className="px-4 px-md-0 py-6 align-items-center">
              <h2>
                <center>Forgot Password?</center>
              </h2>
            </header>
            <div className="p-4 p-md-4">
              <div className="form-group mb-4">
                <div className="js-form-message js-focus-state">
                  <label
                    id="signinEmailLabel33"
                    className="form-label"
                    for="signinEmail33"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-0 height-4 px-4"
                    name="email"
                    id="signinEmail33"
                    placeholder="creativelayers088@gmail.com"
                    aria-label="creativelayers088@gmail.com"
                    aria-describedby="signinEmailLabel33"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-block py-3 rounded-0 btn-dark"
                >
                  Recover Password
                </button>
              </div>
              <div className="text-center mb-4">
                <span className="small text-muted">
                  Remember your password?
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
