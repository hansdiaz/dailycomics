import React, { Fragment, Component } from "react";
import NavBar from "../src/components/layout/NavBar";
import Footer from "../src/components/layout/Footer";
import HomeFront from "../src/components/bodyitems/HomeFront";
import ServiceBanner from "../src/components/bodyitems/ServiceBanner";
import ProductTypes from "../src/components/bodyitems/ProductTypes";
import FeaturedComics from "../src/components/bodyitems/FeaturedComics";
import BestAuthor from "../src/components/bodyitems/BestAuthor";

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
      <Fragment>
        <NavBar />
        <HomeFront />
        <FeaturedComics />
        <ProductTypes />
        <BestAuthor />
        <ServiceBanner />
        <Footer />
      </Fragment>
    );
  }
}
export default App;
