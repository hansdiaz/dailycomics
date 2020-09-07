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

  constructor(props) {
    super(props)
    this.state = {
      showAcc: true
    }
  }
  hideAcc = () => {
    this.setState({
      showHeader: false
    })
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div>
            <MenuBar />
            {this.state.showHeader && <AccountDetails />}
            <Switch>
              <Route path="/account_details" component={AccountDetails} />
              <Route path="/orders" component={Orders} />
              <Route path="/addresses" component={Addresses} />
              <Route render={(props) => (
              <AccountDetails
                  hideNavigation={this.hideAcc}
                  {...props}
                />
              )}
              />
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}
export default ProfileComponent;
