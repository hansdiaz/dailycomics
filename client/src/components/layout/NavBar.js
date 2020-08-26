import React, { Component } from "react";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const element = (<div>Text from Element</div>)
    return (
      <header id="site-header" className="site-header__v7">
        <div className="topbar d-none d-md-block bg-punch-light">
          <div className="container">
            <div className="topbar__nav d-lg-flex justify-content-between align-items-center font-size-2">
              <ul className="topbar__nav--left nav ml-lg-n3 justify-content-center">
                <li className="nav-item">
                  <a href="#" className="nav-link text-dark">
                    <i className="font-size-3 glph-icon flaticon-question mr-2" />
                    Can we help you?
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-dark">
                    <i className="font-size-3 glph-icon flaticon-phone mr-2" />
                    +1246-345-0695
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="masthead">
          <div className="bg-white border-bottom">
            <div className="container pt-3 pb-2 pt-lg-5 pb-lg-5">
              <div className="d-flex align-items-center position-relative flex-wrap">
                <div className="site-branding pr-md-11 mx-auto mx-md-0">
                  <a href="index.html" className="d-block mb-1">
                    <img
                      src= {require ("../../assets/img/logo.png")}
                      className="img-fluid"
                      alt="image-description"
                      width="330px"
                    />
                  </a>
                </div>
                <div className="site-search ml-xl-0 ml-md-auto w-r-100 flex-grow-1 mr-md-5 py-2 py-md-0">
                  <form className="form-inline my-2 my-xl-0">
                    <div className="input-group w-100">
                      <input
                        type="text"
                        className="form-control border-right-0 px-3"
                        placeholder="Search for comics by keyword"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <div className="input-group-append border-left">
                        <button
                          className="btn btn-dark px-3 rounded-0 py-2"
                          type="submit"
                        >
                          <i className="mx-1 glph-icon flaticon-loupe"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <ul className="nav align-self-center d-none d-md-flex">
                  <li className="nav-item">
                    <a href="#" className="nav-link text-dark">
                      <i className="glph-icon flaticon-heart font-size-4"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      id="sidebarNavToggler"
                      href="javascript:;"
                      role="button"
                      className="nav-link text-dark"
                      aria-controls="sidebarContent"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-unfold-event="click"
                      data-unfold-hide-on-scroll="false"
                      data-unfold-target="#sidebarContent"
                      data-unfold-type="css-animation"
                      data-unfold-overlay='{
                                          "className": "u-sidebar-bg-overlay",
                                          "background": "rgba(0, 0, 0, .7)",
                                          "animationSpeed": 500
                                      }'
                      data-unfold-animation-in="fadeInRight"
                      data-unfold-animation-out="fadeOutRight"
                      data-unfold-duration="500"
                    >
                      <i className="glph-icon flaticon-user font-size-4"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      id="sidebarNavToggler1"
                      href="javascript:;"
                      role="button"
                      className="nav-link pr-0 text-dark position-relative"
                      aria-controls="sidebarContent1"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-unfold-event="click"
                      data-unfold-hide-on-scroll="false"
                      data-unfold-target="#sidebarContent1"
                      data-unfold-type="css-animation"
                      data-unfold-overlay='{
                                          "className": "u-sidebar-bg-overlay",
                                          "background": "rgba(0, 0, 0, .7)",
                                          "animationSpeed": 500
                                      }'
                      data-unfold-animation-in="fadeInRight"
                      data-unfold-animation-out="fadeOutRight"
                      data-unfold-duration="500"
                    >
                      <span className="ml-1 position-absolute bg-dark width-16 height-16 rounded-circle d-flex align-items-center justify-content-center text-white font-size-n9 left-0">
                        3
                      </span>
                      <i className="glph-icon flaticon-icon-126515 font-size-4"></i>
                      <span className="d-none d-xl-inline h6 mb-0 ml-1">
                        $40.93
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-bottom py-3 py-md-0">
            <div className="container">
              <div className="d-md-flex position-relative">
                <div className="offcanvas-toggler align-self-center mr-md-8 d-flex d-md-block">
                  <a
                    id="sidebarNavToggler2"
                    href="javascript:;"
                    role="button"
                    className="cat-menu text-dark"
                    aria-controls="sidebarContent2"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-unfold-event="click"
                    data-unfold-hide-on-scroll="false"
                    data-unfold-target="#sidebarContent2"
                    data-unfold-type="css-animation"
                    data-unfold-overlay='{
                                  "className": "u-sidebar-bg-overlay",
                                  "background": "rgba(0, 0, 0, .7)",
                                  "animationSpeed": 100
                              }'
                    data-unfold-animation-in="fadeInLeft"
                    data-unfold-animation-out="fadeOutLeft"
                    data-unfold-duration="100"
                  >
                    <svg width="20px" height="18px">
                      <path
                        fill-rule="evenodd"
                        fill="rgb(0, 0, 0)"
                        d="M-0.000,-0.000 L20.000,-0.000 L20.000,2.000 L-0.000,2.000 L-0.000,-0.000 Z"
                      />
                      <path
                        fill-rule="evenodd"
                        fill="rgb(0, 0, 0)"
                        d="M-0.000,8.000 L15.000,8.000 L15.000,10.000 L-0.000,10.000 L-0.000,8.000 Z"
                      />
                      <path
                        fill-rule="evenodd"
                        fill="rgb(0, 0, 0)"
                        d="M-0.000,16.000 L20.000,16.000 L20.000,18.000 L-0.000,18.000 L-0.000,16.000 Z"
                      />
                    </svg>
                    <span className="ml-3 font-weight-medium">
                      Browse categories
                    </span>
                  </a>
                  <ul className="nav d-md-none ml-auto">
                    <li className="nav-item">
                      <a
                        id="sidebarNavToggler9"
                        href="javascript:;"
                        role="button"
                        className="px-2 nav-link h-primary"
                        aria-controls="sidebarContent9"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-unfold-event="click"
                        data-unfold-hide-on-scroll="false"
                        data-unfold-target="#sidebarContent9"
                        data-unfold-type="css-animation"
                        data-unfold-overlay='{
                                              "className": "u-sidebar-bg-overlay",
                                              "background": "rgba(0, 0, 0, .7)",
                                              "animationSpeed": 500
                                          }'
                        data-unfold-animation-in="fadeInRight"
                        data-unfold-animation-out="fadeOutRight"
                        data-unfold-duration="500"
                      >
                        <i className="glph-icon flaticon-user"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div id="basicsAccordion" className="mr-5 d-none">
                  <div className="position-relative">
                    <div
                      className="bg-primary py-3 px-5 card-collapse"
                      id="basicsHeadingOne"
                    >
                      <button
                        type="button"
                        className="btn btn-link btn-block p-0 d-flex align-items-center card-btn"
                        data-toggle="collapse"
                        data-target="#basicsCollapseOne"
                        aria-expanded="true"
                        aria-controls="basicsCollapseOne"
                      >
                        <svg width="20px" height="18px">
                          <path
                            fill-rule="evenodd"
                            fill="rgb(255, 255, 255)"
                            d="M-0.000,-0.000 L20.000,-0.000 L20.000,2.000 L-0.000,2.000 L-0.000,-0.000 Z"
                          />
                          <path
                            fill-rule="evenodd"
                            fill="rgb(255, 255, 255)"
                            d="M-0.000,8.000 L15.000,8.000 L15.000,10.000 L-0.000,10.000 L-0.000,8.000 Z"
                          />
                          <path
                            fill-rule="evenodd"
                            fill="rgb(255, 255, 255)"
                            d="M-0.000,16.000 L20.000,16.000 L20.000,18.000 L-0.000,18.000 L-0.000,16.000 Z"
                          />
                        </svg>
                        <span className="ml-3 text-white">
                          Browse categories
                        </span>
                        <i className="fas fa-chevron-down ml-5 text-white font-size-2"></i>
                      </button>
                    </div>
                    <div
                      id="basicsCollapseOne"
                      className="collapse show position-absolute right-0 left-0 border"
                      aria-labelledby="basicsHeadingOne"
                      data-parent="#basicsAccordion"
                    >
                      <div className="card-body p-0">
                        <ul className="list-unstyled vertical-menu position-relative mb-0">
                          <li>
                            <a
                              id="basicDropdownHoverInvoker"
                              className="text-dark  d-flex align-items-center border-bottom"
                              href="javascript:;"
                            >
                              <div className="mr-auto">
                                Arts &amp; Photography
                              </div>
                            </a>
                          </li>

                          <li>
                            <a
                              id="basicDropdownHoverInvoker8"
                              className="text-dark  d-flex align-items-center"
                              href="javascript:;"
                            >
                              <div className="mr-auto">
                                Travel and Holiday Guides
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="site-navigation mr-auto d-none d-xl-block">
                  <ul className="nav">
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link link-black-100 mx-2 px-0 py-3 font-weight-medium active border-bottom border-primary border-width-2"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link link-black-100 mx-2 px-0 py-3 font-weight-medium active border-bottom border-primary border-width-2"
                      >
                        Browse Comics
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link link-black-100 mx-2 px-0 py-3 font-weight-medium active border-bottom border-primary border-width-2"
                      >
                        Comic Series
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link link-black-100 mx-2 px-0 py-3 font-weight-medium active border-bottom border-primary border-width-2"
                      >
                        Authors
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-none d-md-block ml-md-auto secondary-navigation">
                  <ul className="nav">
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link link-black-100 mx-2 px-0 py-3 font-weight-medium"
                      >
                        Subscription Pricing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
