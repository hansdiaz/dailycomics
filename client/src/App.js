import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "react-protected-route-component";
import axios from "axios";

import NavBar from "../src/components/layout/NavBar";
import Footer from "../src/components/layout/Footer";

import HomeComponent from "../src/components/combined/HomeComponent";
import LoginComponent from "./components/auth/LoginComponent";
import RegisterComponent from "./components/auth/RegisterComponent";
import ForgotPassword from "./components/auth/ForgotPassword";
import Cart from "./components/bodyitems/Cart";
import Products from "./components/bodyitems/Products";
import Author from "./components/bodyitems/Author";
import Product from "./components/bodyitems/Product";

import "./App.css";
import "./assets/vendor/font-awesome/css/fontawesome-all.min.css";
import "./assets/vendor/flaticon/font/flaticon.css";
import "./assets/vendor/animate/animate.css";
import "./assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./assets/vendor/slick-carousel/slick/slick.css";
import "./assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div>
            <NavBar />
            <Switch>
              <Route path="/" component={HomeComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route path="/register" component={RegisterComponent} />
              <Route path="/forgotpassword" component={ForgotPassword} />
              <Route ProtectedRoute path="/cart" component={Cart} />
              <ProtectedRoute
                path="/cart"
                redirectRoute="/login"
                guardFunction={() => {
                  const token = localStorage.getItem("token");      //check wheter ther is a token in the storge if yes, send an axios request that is secured(/auth) and from its return determine whther token is valid or nopt then redirect
                  if (token) {
                    const config = {
                      headers: {
                        "Content-Type": "application/json",
                        "x-auth-token": token,
                      },
                    };
                    const body = JSON.stringify({ payload: "sample data" });
                    const res = await axios
                      .post("http://localhost:5000/auth", body, config)
                      .then((res) => {
                        return true;
                      })
                      .catch((err) => {
                        return false;
                      });
                  } else {
                    return false;
                  }
                }}
                component={Cart}
                exact
              />
              <Route path="/products" component={Products} />
              <Route path="/author" component={Author} />
              <Route path="/product" component={Product} />
              <Route path="/products/product" component={Product} />
            </Switch>
            <Footer />
          </div>
        </Fragment>
      </Router>
    );
  }
}
export default App;
