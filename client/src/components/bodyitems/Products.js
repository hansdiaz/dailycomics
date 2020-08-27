import React, { Component } from "react";
import Select from "react-select";

const category = [
  { value: "AnyCategory", label: "Select Comic Category" },
  { value: "Action", label: "Action" },
  { value: "Thriller", label: "Thriller" },
];

const universe = [
  { value: "AnyUniverse", label: "Select Comic Universe" },
  { value: "Marvel", label: "Marvel Universe" },
  { value: "DC", label: "DC Universe" },
];

export default class Cart extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    //const element = (<div>Text from Element</div>)
    return (
      <section className=" py-4 py-lg-6">
        <div className="site-content" id="content">
          <div className="container">
            <div className="row">
              <div id="primary" className="content-area order-2">
                <div className="shop-control-bar d-lg-flex justify-content-between align-items-center mb-5 text-center text-md-left">
                  <div style={{ minWidth: 300 }}>
                    <Select options={category} defaultValue={category[0]} />{" "}
                  </div>
                  <div style={{ minWidth: 300 }}>
                    <Select options={universe} defaultValue={universe[0]} />{" "}
                  </div>
                </div>

                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-one-example1"
                    role="tabpanel"
                    aria-labelledby="pills-one-example1-tab"
                  >
                    <ul className="products list-unstyled row no-gutters row-cols-2 row-cols-lg-3 row-cols-xl-5 border-top border-left mb-6">
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img1.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Think Like a Monk: Train Your Mind for Peace
                                  and Purpose Everyday
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img2.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Jesus: The God Who Knows Your Name
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img3.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Scot Under the Covers: The Wild Wicked
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img4.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Blindside (Michael Bennett)
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img5.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  TUntil the End of Time: Mind, Matter
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img6.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Think Like a Monk: Train Your Mind for Peace
                                  and Purpose Everyday
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img7.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Jesus: The God Who Knows Your Name
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img8.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Scot Under the Covers: The Wild Wicked
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img9.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Blindside (Michael Bennett)
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img10.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  TUntil the End of Time: Mind, Matter
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img1.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Think Like a Monk: Train Your Mind for Peace
                                  and Purpose Everyday
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img2.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Jesus: The God Who Knows Your Name
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img3.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Scot Under the Covers: The Wild Wicked
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img4.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Blindside (Michael Bennett)
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img5.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  TUntil the End of Time: Mind, Matter
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img6.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Think Like a Monk: Train Your Mind for Peace
                                  and Purpose Everyday
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img7.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Jesus: The God Who Knows Your Name
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img8.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Scot Under the Covers: The Wild Wicked
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img9.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Blindside (Michael Bennett)
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img10.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  TUntil the End of Time: Mind, Matter
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img1.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Think Like a Monk: Train Your Mind for Peace
                                  and Purpose Everyday
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img2.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Jesus: The God Who Knows Your Name
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img3.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Scot Under the Covers: The Wild Wicked
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img4.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Blindside (Michael Bennett)
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img5.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  TUntil the End of Time: Mind, Matter
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img6.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Think Like a Monk: Train Your Mind for Peace
                                  and Purpose Everyday
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img7.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Jesus: The God Who Knows Your Name
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img8.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Scot Under the Covers: The Wild Wicked
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img9.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  Blindside (Michael Bennett)
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product col">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img10.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="single-product-v6.html">
                                  TUntil the End of Time: Mind, Matter
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-two-example1"
                    role="tabpanel"
                    aria-labelledby="pills-two-example1-tab"
                  >
                    <ul className="products list-unstyled mb-6">
                      <li className="product product__list">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                            <div className="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img1.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                                <a href="single-product-v6.html" tabindex="0">
                                  The Overdue Life of Amy Byler
                                </a>
                              </h2>
                              <div className="font-size-2 mb-2 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <p className="font-size-2 mb-2 crop-text-2">
                                After disappearing for three years, Artemis Fowl
                                has returned to a life different from the one he
                                left. And spends his days teaching his twin
                                siblings the
                              </p>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="col-md-auto d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-4"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product product__list">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                            <div className="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img2.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                                <a href="single-product-v6.html" tabindex="0">
                                  All You Can Ever Know: A Memoir
                                </a>
                              </h2>
                              <div className="font-size-2 mb-2 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <p className="font-size-2 mb-2 crop-text-2">
                                After disappearing for three years, Artemis Fowl
                                has returned to a life different from the one he
                                left. And spends his days teaching his twin
                                siblings the
                              </p>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="col-md-auto d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-4"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product product__list">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                            <div className="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img3.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                                <a href="single-product-v6.html" tabindex="0">
                                  The Cinderella Reversal
                                </a>
                              </h2>
                              <div className="font-size-2 mb-2 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <p className="font-size-2 mb-2 crop-text-2">
                                After disappearing for three years, Artemis Fowl
                                has returned to a life different from the one he
                                left. And spends his days teaching his twin
                                siblings the
                              </p>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="col-md-auto d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-4"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product product__list">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                            <div className="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img4.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                                <a href="single-product-v6.html" tabindex="0">
                                  Scot Under the Covers: The Wild Wicked
                                </a>
                              </h2>
                              <div className="font-size-2 mb-2 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <p className="font-size-2 mb-2 crop-text-2">
                                After disappearing for three years, Artemis Fowl
                                has returned to a life different from the one he
                                left. And spends his days teaching his twin
                                siblings the
                              </p>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="col-md-auto d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-4"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product product__list">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                            <div className="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img5.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                                <a href="single-product-v6.html" tabindex="0">
                                  Winter Garden
                                </a>
                              </h2>
                              <div className="font-size-2 mb-2 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <p className="font-size-2 mb-2 crop-text-2">
                                After disappearing for three years, Artemis Fowl
                                has returned to a life different from the one he
                                left. And spends his days teaching his twin
                                siblings the
                              </p>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="col-md-auto d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-4"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product product__list">
                        <div className="product__inner overflow-hidden p-3 p-md-4d875">
                          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                            <div className="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                              <a
                                href="single-product-v6.html"
                                className="d-block"
                              >
                                <img
                                  src={require("../../assets/img/150x226/img6.jpg")}
                                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                  alt="image-description"
                                />
                              </a>
                            </div>
                            <div className="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="single-product-v6.html">Paperback</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                                <a href="single-product-v6.html" tabindex="0">
                                  Call Me By Your Name
                                </a>
                              </h2>
                              <div className="font-size-2 mb-2 text-truncate">
                                <a
                                  href="../others/authors-single.html"
                                  className="text-gray-700"
                                >
                                  Jay Shetty
                                </a>
                              </div>
                              <p className="font-size-2 mb-2 crop-text-2">
                                After disappearing for three years, Artemis Fowl
                                has returned to a life different from the one he
                                left. And spends his days teaching his twin
                                siblings the
                              </p>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29
                                </span>
                              </div>
                            </div>
                            <div className="col-md-auto d-flex align-items-center">
                              <a
                                href="single-product-v6.html"
                                className="text-uppercase text-dark h-dark font-weight-medium mr-4"
                                data-toggle="tooltip"
                                data-placement="right"
                                title=""
                                data-original-title="ADD TO CART"
                              >
                                <span className="product__add-to-cart">
                                  ADD TO CART
                                </span>
                                <span className="product__add-to-cart-icon font-size-4">
                                  <i className="flaticon-icon-126515"></i>
                                </span>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="mr-1 h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-switch"></i>
                              </a>
                              <a
                                href="single-product-v6.html"
                                className="h-p-bg btn btn-outline-primary border-0"
                              >
                                <i className="flaticon-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <nav aria-label="Page navigation example">
                  <ul className="pagination pagination__custom justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">
                    <li className="flex-shrink-0 flex-md-shrink-1 page-item">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="flex-shrink-0 flex-md-shrink-1 page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="flex-shrink-0 flex-md-shrink-1 page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li
                      className="flex-shrink-0 flex-md-shrink-1 page-item active"
                      aria-current="page"
                    >
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="flex-shrink-0 flex-md-shrink-1 page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="flex-shrink-0 flex-md-shrink-1 page-item">
                      <a className="page-link" href="#">
                        5
                      </a>
                    </li>
                    <li className="flex-shrink-0 flex-md-shrink-1 page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
