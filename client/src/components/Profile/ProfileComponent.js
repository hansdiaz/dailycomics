import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "react-protected-route-component";

import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";

import MenuBar from "../Profile/layout/MenuBar";
import Orders from "../Profile/layout/Orders";
import AccountDetails from "../Profile/layout/AccountDetails";
import Addresses from "../Profile/layout/Addresses";





import "../../App.css";
import "../../assets/vendor/font-awesome/css/fontawesome-all.min.css";
import "../../assets/vendor/flaticon/font/flaticon.css";
import "../../assets/vendor/animate/animate.css";
import "../../assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "../../assets/vendor/slick-carousel/slick/slick.css";
import "../../assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";

class ProfileComponent extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div>
            <MenuBar />
            <Switch>
              <Route exact path="/account_details" component={AccountDetails} />
              <Route exact path="/orders" component={Orders} />
              <Route exact path="/addresses" component={Addresses} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}
export default ProfileComponent;
