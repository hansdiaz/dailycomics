import React, { Component, Fragment } from "react";

import HomeFront from "../bodyitems/HomeFront";
import ServiceBanner from "../bodyitems/ServiceBanner";
import ProductTypes from "../bodyitems/ProductTypes";
//import FeaturedComics from "../bodyitems/FeaturedComics";
//import BestAuthor from "../bodyitems/BestAuthor";

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const element = (<div>Text from Element</div>)
    return (
      <Fragment>
        <HomeFront />
        <ProductTypes />
        <ServiceBanner />
      </Fragment>
    );
  }
}
