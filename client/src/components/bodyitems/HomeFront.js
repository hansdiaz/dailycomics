import React, { Component } from "react";

export default class HomeFront extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const element = (<div>Text from Element</div>)
    return (
      <section>
        <div className="bg-gray-200 py-5 py-lg-8">
          <div className="container my-lg-1">
            <div className="row">
              <div className="col-wd-8">
                <div className="bg-white mb-6 mb-wd-0 h-100">
                  <div className="px-3 px-lg-8 py-8 py-lg-5 space-top-xl-4">
                    <div
                      className="js-slick-carousel u-slick"
                      data-pagi-classes="text-center u-slick__pagination u-slick__pagination mb-0 mt-3 mt-lg-5"
                      data-arrows-classes="d-none d-lg-block u-slick__arrow u-slick__arrow--v2 u-slick__arrow-centered--y"
                      data-arrow-left-classes="flaticon-back u-slick__arrow-inner u-slick__arrow-inner--left ml-lg-n5 ml-xl-n7"
                      data-arrow-right-classes="flaticon-next u-slick__arrow-inner u-slick__arrow-inner--right mr-lg-n5 mr-xl-n7"
                    >
                      <div className="pt-xl-2">
                        <div className="row mx-0 mx-md-3">
                          <div className="col-lg-8 col-wd-6">
                            <div className="media d-block d-lg-flex">
                              <div className="media-body align-self-center mb-4 mb-lg-0">
                                <h6
                                  className="banner__pretitle text-uppercase text-gray-400 font-weight-bold mb-2"
                                  data-scs-animation-in="fadeInUp"
                                  data-scs-animation-delay="200"
                                >
                                  THIS WEEKS FEATURED BOOKS
                                </h6>
                                <h2
                                  className="font-size-12 mb-3 pb-1"
                                  data-scs-animation-in="fadeInUp"
                                  data-scs-animation-delay="300"
                                >
                                  <span className="hero__title-line-1 font-weight-regular d-block text-primary">
                                    Best Ever Book
                                  </span>
                                  <span className="hero__title-line-2 font-weight-bold d-block">
                                    Lists
                                  </span>
                                </h2>
                                <a
                                  href="../shop/v7.html"
                                  className="banner_btn btn btn-wide bg-dark rounded-0 text-white"
                                  data-scs-animation-in="fadeInLeft"
                                  data-scs-animation-delay="400"
                                >
                                  Shopping Now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-4 col-wd-6"
                            data-scs-animation-in="fadeInRight"
                            data-scs-animation-delay="400"
                          >
                            <img
                              src={require("../../assets/img/400x360/img2.png")}
                              className="img-fluid"
                              alt="image-description"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-wd-4 d-none d-wd-block">
                <div className="pt-5 pt-lg-0 h-100">
                  <div className="bg-white p-6 h-100">
                    <h6 className="font-size-7">
                      Girl,
                      <span className="text-primary font-weight-normal">
                        Wash Your Face
                      </span>
                    </h6>
                    <div className="mb-2">
                      <span className="font-size-3 text-secondary-gray-700">
                        Rachel Hollis
                      </span>
                    </div>
                    <div className="price d-flex align-items-center font-weight-medium font-size-3 mb-2">
                      <ins className="text-decoration-none mr-2">
                        <span className="woocommerce-Price-amount amount font-size-3 font-weight-medium text-dark">
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          15
                        </span>
                      </ins>
                      <del className="font-size-1 font-weight-regular text-gray-700">
                        <span className="woocommerce-Price-amount amount font-size-1 text-primary-home-v3 opacity-md">
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          78,96
                        </span>
                      </del>
                    </div>
                    <div className="mb-3 pb-1">
                      <span className="d-inline-block product__add-to-cart">
                        ADD TO CART
                      </span>
                    </div>
                    <div>
                      <img
                        src={require("../../assets/img/356x274/img2.png")}
                        className="img-fluid mx-auto d-block mx-auto"
                        alt="image-description"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
