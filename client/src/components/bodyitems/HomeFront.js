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
              <div className="col-md-12">
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
                                  YOU WANT IT...AND WE'LL PRINT IT
                                </h6>
                                <h2
                                  className="font-size-12 mb-3 pb-1"
                                  data-scs-animation-in="fadeInUp"
                                  data-scs-animation-delay="300"
                                >
                                  <span className="hero__title-line-1 font-weight-regular d-block text-primary">
                                    Buy Comics on Demad
                                  </span>
                                  <span className="hero__title-line-2 font-weight-bold d-block">
                                    Comic Publisher
                                  </span>
                                </h2>
                                <a
                                  href="../shop/v7.html"
                                  className="banner_btn btn btn-wide bg-dark rounded-0 text-white"
                                  data-scs-animation-in="fadeInLeft"
                                  data-scs-animation-delay="400"
                                >
                                  Start Shopping
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-6 col-wd-6"
                            data-scs-animation-in="fadeInRight"
                            data-scs-animation-delay="400"
                          >
                            <img
                              src={
                                "https://res.cloudinary.com/dhfm6twrg/image/upload/v1599728086/photo-avengers-png-10206_s3kk9x.png"
                              }
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
            </div>
          </div>
        </div>
      </section>
    );
  }
}
