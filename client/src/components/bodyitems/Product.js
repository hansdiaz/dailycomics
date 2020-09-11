import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isEmptyObject } from "jquery";
import Price from "react-forex-price";

toast.configure();

const BASE_URL = "https://api.exchangeratesapi.io/latest";

const purchaseType = [
  { value: "pb_single", label: "PaperBack Single" },
  { value: "hb_single", label: "HardBack Single" },
];

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comicId: null,
      selectedOption: "pb_single",
      comicPrice: null,
      comicPriceGBP: null,
      priceType: null,
      priceCurrency: "$",
      currencyVisibility: null,
      issueObjectState: null,
      seriesObjectState: null,
      pricingObjectState: null,
      hasErrors: false,
      rate: null,
    };
  }

  async componentDidMount() {
    const response = await fetch(`${BASE_URL}?base=${"USD"}&symbols=${"GBP"}`);
    const json = await response.json();
    this.setState({ rate: json.rates.GBP });

    console.log(`test`, this.state.rate);

    // this.setState({selectedOption : 'pb_single'});
  }

  set_defaultPrice = (price) => {
    let comicprice, GBP_Price;

    comicprice = price;
    this.setState({ comicPrice: comicprice });
    GBP_Price = comicprice * this.state.rate;
    this.setState({ comicPriceGBP: GBP_Price });
    this.setState({ priceType: "pb_single" });

    console.log("GBP", GBP_Price);
  };

  handleChange = (selectedOption) => {
    //handling price
    let comicprice, GBP_Price;
    if (selectedOption.value == "pb_single") {
      comicprice = this.state.pricingObjectState.pb_price;
      this.setState({ comicPrice: comicprice });
      GBP_Price = comicprice * this.state.rate;
      this.setState({ comicPriceGBP: GBP_Price });
      this.setState({ priceType: "pb_single" });
    } else if (selectedOption.value == "hb_single") {
      comicprice = this.state.pricingObjectState.hb_price;
      this.setState({ comicPrice: comicprice });
      GBP_Price = comicprice * this.state.rate;
      this.setState({ comicPriceGBP: GBP_Price });
      this.setState({ priceType: "hb_single" });
    }

    console.log(`updated price:`, comicprice);
    console.log("GBP", GBP_Price);
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
                        <span className="price mr-2">
                          <Price
                            amount={this.state.comicPrice}
                            baseCurrency="USD"
                          />
                        </span>
                        <span className="price ml-2">
                          <Price
                            amount={this.state.comicPriceGBP}
                            baseCurrency="GBP"
                          />
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
                      <div className="cart mb-4 d-md-flex align-items-end">
                        <button
                          onClick={this.onSubmit}
                          className="btn btn-block  btn-dark border-0 rounded-1 p-3 single_add_to_cart_button button alt"
                          style={{ minWidth: 100 + "%" }}
                        >
                          Add to cart
                        </button>
                        <br />
                      </div>
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
    localStorage.setItem("accessright", false);
    let id = localStorage.getItem("currentcomic");
    if (id) {
      this.setState({ comicId: id });

      //set state for issue
      let issueData = await axios.get(
        `https://dailycomics.herokuapp.com/comic/${id}`
      );
      let comicIssueData = issueData.data;

      if (comicIssueData) {
        this.setState({ issueObjectState: comicIssueData });
      }

      //set state for series
      let seriesName = comicIssueData.seriesname;
      console.log(seriesName);
      let seriesData = await axios.get(
        `https://dailycomics.herokuapp.com/comicseries/${seriesName}`
      );
      let comicSeriesData = seriesData.data;

      if (comicSeriesData) {
        this.setState({ seriesObjectState: comicSeriesData });
      }

      //set state for pricing
      let pricingData = await axios.get(
        `https://dailycomics.herokuapp.com/prices/${id}`
      );
      let comicPricingData = pricingData.data;

      if (comicPricingData) {
        this.setState({ pricingObjectState: comicPricingData });
      }

      let comicprice = comicPricingData.pb_price;
      this.setState({ comicPrice: comicprice });
      let pricetype = "pb_single";
      this.setState({ priceType: pricetype });

      this.set_defaultPrice(comicprice);

      if (purchaseType.value == "pb_single") {
        let comicprice = comicPricingData.pb_price;
        this.setState({ comicPrice: comicprice });
        let pricetype = "pb_single";
        this.setState({ priceType: pricetype });
      } else if (purchaseType.value == "hb_single") {
        let comicprice = comicPricingData.hb_price;
        this.setState({ comicPrice: comicprice });
        let pricetype = "hb_single";
        this.setState({ priceType: pricetype });
      }

      // initializing the render positon with value,
      // else the select input must be clicked and generated to the function handle change to get an output
    } else {
      toast.error("Please select a Comic Issue");
      this.props.history.push("/products");
      //if there is no item in the local accessing an empty product page is prohibitted
    }
  }

  onSubmit = () => {
    //submit function when adding item to cart
    var cartItemFromLocalStorage = JSON.parse(localStorage.getItem("cartitem"));
    if (!isEmptyObject(cartItemFromLocalStorage)) {
      console.log("It came defined");

      //set object data
      let cartItemObject = {
        comicid: this.state.comicId,
        purchasetype: this.state.priceType,
      };

      cartItemFromLocalStorage.push(cartItemObject);

      console.log(
        localStorage.setItem(
          "cartitem",
          JSON.stringify(cartItemFromLocalStorage)
        )
      );
      //localstorage only supports strings
      toast.success("Item Added to cart");
    } else if (isEmptyObject(cartItemFromLocalStorage)) {
      //if there are no items in the cart array in the local storage then initialize and do this
      console.log("It came undefined");
      let cartItemObjectArray = [];
      let cartItemObject = {
        comicid: this.state.comicId,
        purchasetype: this.state.priceType,
      };
      console.log(cartItemObject);
      cartItemObjectArray.push(cartItemObject);
      localStorage.setItem("cartitem", JSON.stringify(cartItemObjectArray));
      toast.success("Item Added to cart");
      console.log("This is the mighty array ", cartItemObjectArray);
    }
  };
}
