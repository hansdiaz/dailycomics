import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "react-protected-route-component";
import checkAuthToken from "./util/checkAuthToken";

import NavBar from "../src/components/layout/NavBar";
import Footer from "../src/components/layout/Footer";

import ProfileComponent from "./components/Profile/ProfileComponent";
import HomeComponent from "../src/components/combined/HomeComponent";
import LoginComponent from "./components/auth/LoginComponent";
import RegisterComponent from "./components/auth/RegisterComponent";
import ForgotPassword from "./components/auth/ForgotPassword";
import Cart from "./components/bodyitems/Cart";
import Products from "./components/bodyitems/Products";
import Product from "./components/bodyitems/Product";
import Checkout from "./components/bodyitems/Checkout";

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
              <Route exact path="/" component={HomeComponent} />
              <Route exact path="/login" component={LoginComponent} />
              <Route exact path="/register" component={RegisterComponent} />
              <Route exact path="/forgotpassword" component={ForgotPassword} />
              <ProtectedRoute
                path="/cart"
                redirectRoute="/login"
                guardFunction={() => {
                  if (checkAuthToken()) {
                    return true;
                  } else {
                    return false;
                  }
                }}
                component={Cart}
                exact
              />
              <ProtectedRoute
                path="/profile"
                redirectRoute="/login"
                guardFunction={() => {
                  if (checkAuthToken()) {
                    return true;
                  } else {
                    return false;
                  }
                }}
                component={ProfileComponent}
                exact
              />
              <Route exact path="/products" component={Products} />
              <Route exact path="/products/product" component={Product} />
              <Route exact path="/checkout" component={Checkout} />
            </Switch>
            <Footer />
          </div>
        </Fragment>
      </Router>
    );
  }
}
export default App;
