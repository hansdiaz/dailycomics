import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default class RegisterComponent extends React.Component {
  state = {
    email: "",
    password: "",
    confirmpassword: "",
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    try {
      event.preventDefault();

      const newUser = {
        email: this.state.email,
        password: this.state.password,
        confirmpassword: this.state.confirmpassword,
      };

      const config = {
        headers: { "Content-Type": "application/json" },
        mode: "cors",
      };
      const body = JSON.stringify(newUser);
      const res = axios
        .post("http://localhost:5000/createuser", body, config)
        .then((res) => {
          console.log(res.data);
          toast.success(res.data);
        })
        .catch((err) => {
          toast.error(err.response.data);
          console.log(err.response.data);
        });
    } catch (err) {
      toast.error(err.response.data);
      console.log(err.response.data);
    }
  };

  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.onSubmit}>
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
                    htmlFor="signinEmail11"
                  >
                    Email *
                  </label>
                  <input
                    className="form-control rounded-0 height-4 px-4"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    id="signinEmail11"
                    placeholder="youremail@mail.com"
                    aria-label="youremail@mail.com"
                    aria-describedby="signinEmailLabel11"
                  />
                </div>
              </div>

              <div className="form-group mb-4">
                <div className="js-form-message js-focus-state">
                  <label
                    id="signinPasswordLabel11"
                    className="form-label"
                    htmlFor="signinPassword11"
                  >
                    Password *
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-0 height-4 px-4"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    id="signinPassword11"
                    placeholder=""
                    aria-label=""
                    aria-describedby="signinPasswordLabel11"
                  />
                </div>
              </div>

              <div className="form-group mb-4">
                <div className="js-form-message js-focus-state">
                  <label
                    id="signinPasswordConfirmLabel"
                    className="form-label"
                    htmlFor="signinPasswordConfirm"
                  >
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-0 height-4 px-4"
                    name="confirmpassword"
                    value={this.state.confirmpassword}
                    onChange={this.handleChange}
                    id="confirmpassword"
                    placeholder=""
                    aria-label=""
                    aria-describedby="signinPasswordConfirmLabel"
                  />
                </div>
              </div>

              <div className="mb-3">
                <button
                  type="submit"
                  value="Register"
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
