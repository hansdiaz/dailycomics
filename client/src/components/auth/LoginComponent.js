import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GoogleLogin, { responseGoogle } from "react-google-login";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class LoginComponent extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = async (event) => {
    //submit function when
    try {
      event.preventDefault();

      const logginUser = {
        email: this.state.email,
        password: this.state.password,
      };

      const config = {
        headers: { "Content-Type": "application/json" },
        mode: "cors",
      };
      const body = JSON.stringify(logginUser);
      const res = await axios
        .post("http://localhost:5000/loginuser", body, config)
        .then((res) => {
          console.log(res.data.msg);
          toast.success(res.data.msg);

          this.props.history.push("/");

          localStorage.setItem("currentToken", res.data.token); //jwt token is saved to the local storage so that it can be accessed from any location
          localStorage.setItem("id", res.data.id);
          console.log(
            "Got this from local storage " +
              localStorage.getItem("currentToken") +
              "\n  and User ID " +
              localStorage.getItem("id")
          );
        })
        .catch((err) => {
          toast.error(err.response.data.msg);
          console.log(err.response.data.msg); //the long response is cus the issue is that the api on what a rejected promise returns has changed.so it needs to be digged in deep
        });
    } catch (err) {
      toast.error(err.response.data.msg);
      console.log(err.response.data.msg);
    }
  };

  responseGoogle = (response) => {
    //function that retrieves the data from the google authenticator
    console.log(response);
    try {
      const googleUser = {
        email: response.email,
      };

      const config = {
        headers: { "Content-Type": "application/json" },
        mode: "cors",
      };
      const body = JSON.stringify(googleUser);
      const res = axios
        .post("http://localhost:5000/googleuserlogin", body, config)
        .then((res) => {
          console.log(res.data.msg);
          toast.success(res.data.msg);

          this.props.history.push("/");

          localStorage.setItem("currentToken", res.data.token); //jwt token is saved to the local storage so that it can be accessed from any location
          localStorage.setItem("id", res.data.id);
        })
        .catch((err) => {
          toast.error(err.data.msg);
          console.log(err.data.msg);
        });
    } catch (err) {
      toast.error(err.data);
      console.log(err.data);
    }
  };

  render() {
    //const element = (<div>Text from Element</div>)
    return (
      <div className="container">
        <div className="col-lg-5 mx-auto">
          <form className="form" onSubmit={this.onSubmit}>
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
                      className="form-control rounded-0 height-4 px-4"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      id="signinEmail9"
                      placeholder="youremail@mail.com"
                      aria-label="youremail@mail.com"
                      aria-describedby="signinEmailLabel9"
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
                      value={this.state.password}
                      onChange={this.handleChange}
                      id="signinPassword9"
                      placeholder=""
                      aria-label=""
                      aria-describedby="signinPasswordLabel9"
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
                    name="login"
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
                <br />
                <div className="mb-2">
                  <GoogleLogin
                    clientId="902755353676-ud49nfo423clmkqmpfbq6ghbibiiu1er.apps.googleusercontent.com"
                    className="js-animation-link btn btn-block py-3 rounded-0 btn-outline-dark font-weight-medium"
                    buttonText="Login with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default LoginComponent;
