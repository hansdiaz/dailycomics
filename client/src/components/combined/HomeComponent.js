import React, { Component, Fragment } from "react";

import HomeFront from "../bodyitems/HomeFront";
import ServiceBanner from "../bodyitems/ServiceBanner";

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem("accessright", false);
  }

  render() {
    //const element = (<div>Text from Element</div>)
    return (
      <Fragment>
        <HomeFront />
        <ServiceBanner />
      </Fragment>
    );
  }
}
