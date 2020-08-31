import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  // eslint-disable-next-line
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
                  <Link to="/" className="d-block mb-1">
                    <img
                      src={require("../../assets/img/logo.png")}
                      className="img-fluid"
                      alt="image-description"
                      width="330px"
                    />
                  </Link>
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
                    <Link to="/login"
                      
                        id="sidebarNavToggler"
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
                    
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/cart"
                      id="sidebarNavToggler1"
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
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-bottom py-3 py-md-0">
            <div className="container">
              <div className="d-md-flex position-relative">
                <div className="site-navigation mr-auto d-none d-xl-block">
                  <ul className="nav">
                    <li className="nav-item">
                      <Link
                        to="/"
                        className="nav-link link-black-100 mx-2 px-0 py-3 font-weight-medium active border-bottom border-primary border-width-2"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/products"
                        className="nav-link link-black-100 mx-2 px-0 py-3 font-weight-medium active border-bottom border-primary border-width-2"
                      >
                        Browse Comics
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="d-none d-md-block ml-md-auto secondary-navigation ">
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
