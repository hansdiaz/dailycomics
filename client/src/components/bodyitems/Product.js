import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import { Link } from "react-router-dom";

const purchaseType = [
  { value: "pbsingle", label: "PaperBack Single" },
  { value: "hbsingle", label: "HardBack Single" },
  { value: "wsub", label: "Weekly Subscription" },
  { value: "msub", label: "Monthly Subscription" },
];

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comicId: null,
      selectedOption: null,
      comicPrice: null,
      priceCurrency: "$",
      currencyVisibility: null,
      issueObjectState: null,
      seriesObjectState: null,
      pricingObjectState: null,
    };
  }

  handleChange = (selectedOption) => {
    //handling price
    let comicprice;
    if (selectedOption.value == "pbsingle") {
      comicprice = this.state.pricingObjectState.pb_price;
      this.setState({ comicPrice: comicprice });
    } else if (selectedOption.value == "hbsingle") {
      comicprice = this.state.pricingObjectState.hb_price;
      this.setState({ comicPrice: comicprice });
    } else if (selectedOption.value == "wsub") {
      comicprice = this.state.pricingObjectState.weekly_price;
      this.setState({ comicPrice: comicprice });
    } else if (selectedOption.value == "msub") {
      comicprice = this.state.pricingObjectState.monthly_price;
      this.setState({ comicPrice: comicprice });
    }

    console.log(`updated price:`, comicprice);
  };

  render() {
    return (
      <div id="primary" className="content-area">
        <div className="product">
          <div className="bg-punch-light">
            <div className="container">
              <div className="row space-2">
                <div className="col-md-6 col-lg-5 offset-lg-1 woocommerce-product-gallery woocommerce-product-gallery--with-images images">
                  <figure className="woocommerce-product-gallery__wrapper mb-6 b-md-0">
                    <div
                      className="js-slick-carousel u-slick"
                      data-pagi-classes="position-absolute text-center left-0 u-slick__pagination flex-column u-slick__pagination-centered--y ml-md-n4 ml-lg-0 mr-lg-5 mb-0"
                      data-vertical="true"
                    >
                      <div className="js-slide">
                        {this.state.issueObjectState && (
                          <img
                            src={this.state.issueObjectState.imageref}
                            alt="Image Description"
                            className="mx-auto img-fluid"
                          />
                        )}
                      </div>
                    </div>
                  </figure>
                </div>
                <div className="col-md-6 col-lg-5 summary entry-summary">
                  <div className="border bg-white">
                    <div className="py-4 px-5">
                      <div className="border-bottom mb-4">
                        <h1 className="product_title entry-title font-size-26 mb-3">
                          {this.state.issueObjectState &&
                            this.state.issueObjectState.seriesname}
                        </h1>
                        <p>
                          issue#
                          {this.state.issueObjectState &&
                            this.state.issueObjectState.issuenumber}
                        </p>

                        <div className="font-size-2 mb-4 justify-content-between row">
                          <div>
                            <span className="ml-3 font-weight-medium">
                              By (author)
                            </span>
                            <span className="ml-2 text-gray-600">
                              {this.state.seriesObjectState &&
                                this.state.seriesObjectState.authorname}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="price font-size-22 font-weight-medium mb-4">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            {this.state.priceCurrency}
                          </span>
                          {this.state.comicPrice}
                        </span>
                      </p>
                      <label className="form-label font-size-2 font-weight-medium">
                        Book Format
                      </label>

                      <div style={{ minWidth: 100 + "%" }} className="py-lg-2">
                        <Select
                          options={purchaseType}
                          defaultValue={purchaseType[0]}
                          onChange={this.handleChange}
                        />
                      </div>
                      <br />
                      <form
                        className="cart mb-4 d-md-flex align-items-end"
                        enctype="multipart/form-data"
                      >
                        <button
                          type="submit"
                          name="add-to-cart"
                          value="7145"
                          className="btn btn-block  btn-dark border-0 rounded-1 p-3 single_add_to_cart_button button alt"
                          style={{ minWidth: 100 + "%" }}
                        >
                          Add to cart
                        </button>
                      </form>
                      <ul className="list-unstyled nav d-block d-md-flex justify-content-center">
                        <li className="mr-md-4 mb-4 mb-md-0">
                          <a href="#" className="h-primary">
                            <i className="flaticon-heart mr-2"></i> Add to
                            Wishlist
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="js-scroll-nav mb-10">
            <div class="woocommerce-tabs wc-tabs-wrapper  2 mx-lg-auto">
              <div id="Description" class="">
                <div class="border-top border-bottom">
                  <ul class="container tabs wc-tabs nav justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">
                    <li class="flex-shrink-0 flex-md-shrink-1 nav-item active">
                      <dev
                        class="nav-link py-4 font-weight-medium active"
                        href="#Description"
                      >
                        Description
                      </dev>
                    </li>
                  </ul>
                </div>

                <div class="tab-content font-size-2 container">
                  <div class="row">
                    <div class="col-xl-8 offset-xl-2">
                      <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab pt-9">
                        <p class="mb-0 comicdesc">
                          {this.state.issueObjectState &&
                            this.state.issueObjectState.description}
                        </p>
                        <br />
                        <p class="mb-0">
                          {this.state.seriesObjectState &&
                            this.state.seriesObjectState.authorname}
                        </p>
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="ProductDetails" class="">
                <div class="border-top border-bottom">
                  <ul class="container tabs wc-tabs nav justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">
                    <li class="flex-shrink-0 flex-md-shrink-1 nav-item active">
                      <dev
                        class="nav-link py-4 font-weight-medium active"
                        href="#ProductDetails"
                      >
                        Product Details
                      </dev>
                    </li>
                  </ul>
                </div>

                <div class="tab-content font-size-2 container">
                  <div class="row">
                    <div class="col-xl-8 offset-xl-2">
                      <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab pt-9">
                        <div class="table-responsive mb-4">
                          <table class="table table-hover table-borderless">
                            <tbody>
                              <tr>
                                <th class="px-4 px-xl-5">Comic Publication</th>
                                <td>
                                  {this.state.issueObjectState &&
                                    this.state.issueObjectState.publishdate}
                                </td>
                              </tr>
                              <tr>
                                <th class="px-4 px-xl-5">Series Publication</th>
                                <td>
                                  {this.state.seriesObjectState &&
                                    this.state.seriesObjectState.publishdate}
                                </td>
                              </tr>
                              <tr>
                                <th class="px-4 px-xl-5">Universe:</th>
                                <td>
                                  {this.state.seriesObjectState &&
                                    this.state.seriesObjectState.universe}
                                </td>
                              </tr>
                              <tr>
                                <th class="px-4 px-xl-5">Category</th>
                                <td>
                                  {this.state.seriesObjectState &&
                                    this.state.seriesObjectState.category}
                                </td>
                              </tr>
                              <tr>
                                <th class="px-4 px-xl-5">Issue Number</th>
                                <td>
                                  {this.state.issueObjectState &&
                                    this.state.issueObjectState.issuenumber}
                                </td>
                              </tr>
                              <tr>
                                <th class="px-4 px-xl-5">Total Issues</th>
                                <td>
                                  {this.state.seriesObjectState &&
                                    this.state.seriesObjectState
                                      .issuespublished}
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
    );
  }
  async componentWillMount() {
    let id = localStorage.getItem("currentcomic");
    if (id) {
      this.setState({ comicId: id });

      //set state for issue
      let issueData = await axios.get(`http://localhost:5000/comic/${id}`);
      let comicIssueData = issueData.data;

      if (comicIssueData) {
        this.setState({ issueObjectState: comicIssueData });
      }

      //set state for series
      let seriesName = comicIssueData.seriesname;
      console.log(seriesName);
      let seriesData = await axios.get(
        `http://localhost:5000/comicseries/${seriesName}`
      );
      let comicSeriesData = seriesData.data;

      if (comicSeriesData) {
        this.setState({ seriesObjectState: comicSeriesData });
      }

      //set state for pricing
      let pricingData = await axios.get(`http://localhost:5000/prices/${id}`);
      let comicPricingData = pricingData.data;

      if (comicPricingData) {
        this.setState({ pricingObjectState: comicPricingData });
      }
      let comicprice = comicPricingData.pb_price;
      this.setState({ comicPrice: comicprice });
      // initializing the render positon with value,
      // else the select input must be clicked and generated to the function handle change to get an output
    } else {
      this.props.history.push("/products");
      //if there is no item in the local accessing an empty product page is prohibitted
    }
  }
}
