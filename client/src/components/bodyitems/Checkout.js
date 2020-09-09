import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import "../../App.css";
import "react-toastify/dist/ReactToastify.css";
import CheckoutItem from "../internalcomponents/CheckoutItem";
import { isEmptyObject } from "jquery";
toast.configure();

export default class Checkout extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      quantityid: null,
      allItems: [],
      priceList: [],
      subTotalArray: [],
      amount: null,
      totalitems: null,
    };
  }

  formerrender() {
    //const element = (<div>Text from Element</div>)
    return (
      <div className="site-content bg-punch-light overflow-x" id="content">
        <div className="container">
          <header className="entry-header space-top-2 space-bottom-1 mb-2">
            <h1 className="entry-title font-size-7">Your cart items</h1>
          </header>
          <div className="row pb-8 justify-content-between ">
            <div
              id="primary"
              className="content-area"
              style={{ maxWidth: 1000 }}
            >
              <main id="main" className="site-main">
                <div className="page type-page status-publish hentry">
                  <div className="entry-content">
                    <div className="woocommerce">
                      <form
                        className="woocommerce-cart-form table-responsive"
                        action="#"
                        method="post"
                      >
                        <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                          <thead>
                            <tr>
                              <th className="product-name">Product</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.allItems.map((orderItemObject) => (
                              <div key={orderItemObject.comicid}>
                                <CheckoutItem
                                  key={orderItemObject.comicid}
                                  data={orderItemObject}
                                  onRemove={() =>
                                    this.removeItem(orderItemObject.comicid)
                                  }
                                />
                              </div>
                            ))}
                          </tbody>
                        </table>
                      </form>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <div style={{ minWidth: 380 }}>
              <div
                id="secondary"
                className=" cart-collaterals order-1"
                role="complementary"
              >
                <div
                  id="cartAccordion"
                  className="border border-gray-900 bg-white mb-5"
                >
                  <div className="p-4d875 border">
                    <div id="cartHeadingOne" className="cart-head">
                      <div
                        className="d-flex align-items-center justify-content-between text-dark"
                        data-toggle="collapse"
                        data-target="#cartCollapseOne"
                        aria-expanded="true"
                        aria-controls="cartCollapseOne"
                      >
                        <h3 className="cart-title mb-0 font-weight-medium font-size-3">
                          Cart Total
                        </h3>
                      </div>
                    </div>
                    <div
                      id="cartCollapseOne"
                      className="mt-4 cart-content collapse show"
                      aria-labelledby="cartHeadingOne"
                      data-parent="#cartAccordion"
                    >
                      <table className="shop_table shop_table_responsive">
                        <tbody>
                          <tr className="order-shipping">
                            <th>Shipping</th>
                            <td data-title="Shipping">Free Shipping</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="p-4d875 border">
                    <table className="shop_table shop_table_responsive">
                      <tbody>
                        <tr className="order-total">
                          <th>Total</th>
                          <td data-title="Total">
                            <strong>
                              <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                {this.state.amount}
                              </span>
                            </strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="wc-proceed-to-checkout">
                <Link
                  onClick={() => this.navigateToCheckout()}
                  className="checkout-button button alt wc-forward btn btn-dark btn-block rounded-0 py-4"
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div
          id="content"
          className="site-content bg-punch-light space-bottom-3"
        >
          <div className="col-full container">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <article
                  id="post-6"
                  className="post-6 page type-page status-publish hentry"
                >
                  <header className="entry-header space-top-2 space-bottom-1 mb-2">
                    <h4 className="entry-title font-size-7 text-center">
                      Checkout
                    </h4>
                  </header>
                  <div className="d-flex justify-content-center">
                    <div className="entry-content">
                      <div className="woocommerce">
                        <form
                          id="collapseExample9"
                          className="collapse checkout_coupon mt-4 p-4 bg-white border"
                          method="post"
                        >
                          <div className="row d-flex">
                            <p className="col-md-4 d-inline form-row form-row-first mb-3 mb-md-0">
                              <input
                                type="text"
                                name="coupon_code1"
                                className="input-text form-control"
                                placeholder="Coupon code"
                                id="coupon_code1"
                                value=""
                              />
                            </p>
                            <p className="col-md-3 d-inline form-row form-row-last">
                              <input
                                type="submit"
                                className="button form-control border-0 height-4 btn btn-dark rounded-0"
                                name="apply_coupon"
                                value="Apply coupon"
                              />
                            </p>
                          </div>
                          <div className="clear"></div>
                        </form>
                        
                        <form
                          name="checkout"
                          method="post"
                          className="checkout woocommerce-checkout row mt-8"
                          action="https://themes.woocommerce.com/storefront/checkout/"
                          enctype="multipart/form-data"
                          novalidate="novalidate"
                        >
                          <div
                            className=" col-md-12 col-lg-12 mb-6 mb-md-0"
                            id="customer_details"
                          >
                            <div className="px-4 pt-5 bg-white border">
                              <div className="woocommerce-billing-fields">
                                <h3 className="mb-4 font-size-3">
                                  Billing details
                                </h3>
                                <div className="woocommerce-billing-fields__field-wrapper row">
                                <p
                                    className="col-12 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
                                    id="billing_first_name_field"
                                    data-priority="10"
                                  >
                                    <label
                                      for="billing_first_name"
                                      className="form-label"
                                    >
                                      First name
                                      <abbr
                                        className="required"
                                        title="required"
                                      >
                                        *
                                      </abbr>
                                    </label>
                                    <input
                                      type="text"
                                      className="input-text form-control"
                                      name="billing_first_name"
                                      id="billing_first_name"
                                      placeholder=""
                                      value=""
                                      autocomplete="given-name"
                                      autofocus="autofocus"
                                    />
                                  </p>
                                  
                                  <p
                                    className="col-12 mb-4d75 form-row form-row-wide"
                                    id="billing_company_field"
                                    data-priority="30"
                                  >
                                    <label
                                      for="billing_company"
                                      className="form-label"
                                    >
                                      Company name
                                    </label>
                                    <input
                                      type="text"
                                      className="input-text form-control"
                                      name="billing_company"
                                      id="billing_company"
                                      placeholder=""
                                      value=""
                                      autocomplete="organization"
                                    />
                                  </p>
                                                                 <p
                                    className="col-12 mb-4d75 form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                                    id="billing_country_field"
                                    data-priority="40"
                                  >
                                    <label
                                      for="billing_country"
                                      className="form-label"
                                    >
                                      Country
                                      <abbr
                                        className="required"
                                        title="required"
                                      >
                                        *
                                      </abbr>
                                    </label>
                                  </p>
                                  <p
                                    className="col-12 mb-3 form-row form-row-wide address-field validate-required"
                                    id="billing_address_1_field"
                                    data-priority="50"
                                  >
                                    <label
                                      for="billing_address_1"
                                      className="form-label"
                                    >
                                      Street address
                                      <abbr
                                        className="required"
                                        title="required"
                                      >
                                        *
                                      </abbr>
                                    </label>
                                    <input
                                      type="text"
                                      className="input-text form-control"
                                      name="billing_address_1"
                                      id="billing_address_1"
                                      placeholder="House number and street name"
                                      value=""
                                      autocomplete="address-line1"
                                    />
                                  </p>
                                  <p
                                    className="col-12 mb-4d75 form-row form-row-wide address-field"
                                    id="billing_address_2_field"
                                    data-priority="60"
                                  >
                                    <input
                                      type="text"
                                      className="input-text form-control"
                                      name="billing_address_2"
                                      id="billing_address_2"
                                      placeholder="Apartment, suite, unit etc. (optional)"
                                      value=""
                                      autocomplete="address-line2"
                                    />
                                  </p>
                                  <p
                                    className="col-12 mb-4d75 form-row form-row-wide address-field validate-required"
                                    id="billing_city_field"
                                    data-priority="70"
                                    data-o_class="form-row form-row-wide address-field validate-required"
                                  >
                                    <label
                                      for="billing_city"
                                      className="form-label"
                                    >
                                      Town / City
                                      <abbr
                                        className="required"
                                        title="required"
                                      >
                                        *
                                      </abbr>
                                    </label>
                                    <input
                                      type="text"
                                      className="input-text form-control"
                                      name="billing_city"
                                      id="billing_city"
                                      placeholder=""
                                      value=""
                                      autocomplete="address-level2"
                                    />
                                  </p>
                                  <p
                                    className="col-12 mb-4d75 form-row form-row-wide address-field validate-state woocommerce-validated"
                                    id="billing_state_field"
                                    data-priority="80"
                                    data-o_class="form-row form-row-wide address-field validate-state"
                                  >
                                    <label
                                      for="billing_state"
                                      className="form-label"
                                    >
                                      County
                                    </label>
                                    <input
                                      type="text"
                                      className="input-text form-control"
                                      value=""
                                      placeholder=""
                                      name="billing_state"
                                      id="billing_state"
                                      autocomplete="address-level1"
                                    />
                                  </p>
                                  <p
                                    className="col-12 mb-4d75 form-row form-row-wide address-field validate-postcode validate-required"
                                    id="billing_postcode_field"
                                    data-priority="90"
                                    data-o_class="form-row form-row-wide address-field validate-required validate-postcode"
                                  >
                                    <label
                                      for="billing_postcode"
                                      className="form-label"
                                    >
                                      Postcode
                                      <abbr
                                        className="required"
                                        title="required"
                                      >
                                        *
                                      </abbr>
                                    </label>
                                    <input
                                      type="text"
                                      className="input-text form-control"
                                      name="billing_postcode"
                                      id="billing_postcode"
                                      placeholder=""
                                      value=""
                                      autocomplete="postal-code"
                                    />
                                  </p>
                                  <p
                                    className="col-12 mb-4d75 form-row form-row-first validate-required validate-phone"
                                    id="billing_phone_field"
                                    data-priority="100"
                                  >
                                    <label
                                      for="billing_phone"
                                      className="form-label"
                                    >
                                      Phone
                                      <abbr
                                        className="required"
                                        title="required"
                                      >
                                        *
                                      </abbr>
                                    </label>
                                    <input
                                      type="tel"
                                      className="input-text form-control"
                                      name="billing_phone"
                                      id="billing_phone"
                                      placeholder=""
                                      value=""
                                      autocomplete="tel"
                                    />
                                  </p>
                                  <p
                                    className="col-12 mb-4d75 form-row form-row-last validate-required validate-email"
                                    id="billing_email_field"
                                    data-priority="110"
                                  >
                                    <label
                                      for="billing_email"
                                      className="form-label"
                                    >
                                      Email address
                                      <abbr
                                        className="required"
                                        title="required"
                                      >
                                        *
                                      </abbr>
                                    </label>
                                    <input
                                      type="email"
                                      className="input-text form-control"
                                      name="billing_email"
                                      id="billing_email"
                                      placeholder=""
                                      value=""
                                      autocomplete="email"
                                    />
                                </p>
                                
                                </div>
                              </div>
                            </div>

                          </div>
                        </form>
                      
                      </div>
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    let cartItemObjectArray = JSON.parse(localStorage.getItem("cartitem"));

    if (localStorage.getItem("accessright")) {
      localStorage.setItem("accessright", false);
      //rendering
    } else {
      //if no content in your cartobject then redirect to collection
      console.log("Checkout expired");
      toast.error("Checkout expired");
      this.props.history.push("/products");
    }
  }

  //function is there to get the amount of items per item and its purchasetype it
  arraySetup(cartItemObjectArray) {
    localStorage.removeItem("a_comic");
    localStorage.removeItem("a_purchase");
    localStorage.removeItem("a_quantity");
    for (let i in cartItemObjectArray) {
      comicIdArray = JSON.parse(localStorage.getItem("a_comic"));
      purchaseTypeArray = JSON.parse(localStorage.getItem("a_purchase"));
      quantityArray = JSON.parse(localStorage.getItem("a_quantity"));

      var comicId = cartItemObjectArray[i].comicid;
      var purchaseType = cartItemObjectArray[i].purchasetype;
      var quantityadded;
      var totalQuantity = 0;
      var itemSetStatus = false;
      var arraynavigation = 0;

      if (isEmptyObject(comicIdArray) && itemSetStatus == false) {
        var comicIdArray = [];
        var purchaseTypeArray = [];
        var quantityArray = [];

        comicIdArray.push(comicId);
        purchaseTypeArray.push(purchaseType);
        quantityArray.push(1);
        localStorage.setItem("a_comic", JSON.stringify(comicIdArray));
        localStorage.setItem("a_purchase", JSON.stringify(purchaseTypeArray));
        localStorage.setItem("a_quantity", JSON.stringify(quantityArray));
        itemSetStatus = true;
        arraynavigation = arraynavigation + 1;
      } else if (!isEmptyObject(comicIdArray) && itemSetStatus == false) {
        console.log(
          "arrayNaviagtion is :" +
            arraynavigation +
            " comicArraylength is :" +
            comicIdArray.length
        );

        for (let index in comicIdArray) {
          arraynavigation = arraynavigation + 1;
          if (
            comicId == comicIdArray[index] &&
            purchaseType == purchaseTypeArray[index] &&
            itemSetStatus == false
          ) {
            quantityadded = parseInt(quantityArray[index]);
            quantityArray[index] = quantityadded + 1;

            localStorage.setItem("a_quantity", JSON.stringify(quantityArray));
            itemSetStatus = true;
          } else if (
            comicId == comicIdArray[index] &&
            purchaseType != purchaseTypeArray[index] &&
            itemSetStatus == false &&
            arraynavigation == comicIdArray.length
          ) {
            comicIdArray.push(comicId);
            purchaseTypeArray.push(purchaseType);
            quantityArray.push(1);

            localStorage.setItem("a_comic", JSON.stringify(comicIdArray));
            localStorage.setItem(
              "a_purchase",
              JSON.stringify(purchaseTypeArray)
            );

            localStorage.setItem("a_quantity", JSON.stringify(quantityArray));
            itemSetStatus = true;
          } else if (
            comicId != comicIdArray[index] &&
            itemSetStatus == false &&
            arraynavigation == comicIdArray.length
          ) {
            comicIdArray.push(comicId);
            purchaseTypeArray.push(purchaseType);
            quantityArray.push(1);

            localStorage.setItem("a_comic", JSON.stringify(comicIdArray));
            localStorage.setItem(
              "a_purchase",
              JSON.stringify(purchaseTypeArray)
            );

            localStorage.setItem("a_quantity", JSON.stringify(quantityArray));
            itemSetStatus = true;
          }
        }
      }
    }
    return true; //this is done to send a signal for subtotaller to access
  }

  async subTotaller(cartItemObjectArray) {
    if (this.arraySetup(cartItemObjectArray)) {
      console.log("checkpoint subtotler inside");
      let orderItems = [];
      var SubTotalArray = [];
      var priceArray = [];
      var comicIdArray = JSON.parse(localStorage.getItem("a_comic"));
      var purchaseTypeArray = JSON.parse(localStorage.getItem("a_purchase"));
      var quantityArray = JSON.parse(localStorage.getItem("a_quantity"));

      let comicId;
      let purchaseType;
      let Quantity;
      //this is just for showing no of cart items
      let totalItemsInComicArray = comicIdArray.length;
      this.setState({ totalitems: totalItemsInComicArray });

      for (let index = 0; index < comicIdArray.length; index++) {
        console.log("checkpoint inside comicIdArray");
        let comicIssueData;
        let comicPricingData;

        comicId = comicIdArray[index];
        Quantity = quantityArray[index];

        let issueData = await axios.get(
          `http://localhost:5000/comic/${comicId}`
        );
        comicIssueData = issueData.data;

        purchaseType = purchaseTypeArray[index];
        let purchaseTypeText;
        if (purchaseType == "pb_single") {
          purchaseTypeText = "PaperBack";
        } else if (purchaseType == "hb_single") {
          purchaseTypeText = "HardBack";
        }

        let pricingData = await axios.get(
          `http://localhost:5000/prices/${comicId}`
        );
        console.log("pricing data" + JSON.stringify(pricingData));
        comicPricingData = pricingData.data;
        let seriesName = comicIssueData.seriesname;

        //calculate subtotal for each item that is passed
        let SubTotal;
        if (purchaseType == "pb_single") {
          SubTotal = Quantity * comicPricingData.pb_price;
          SubTotalArray.push(SubTotal);
        } else if (purchaseType == "hb_single") {
          SubTotal = Quantity * comicPricingData.hb_price;
          SubTotalArray.push(SubTotal);
        }
        console.log("checkpoint subtotal:" + SubTotal);

        let seriesData = await axios.get(
          `http://localhost:5000/comicseries/${seriesName}`
        );
        let comicSeriesData = seriesData.data;
        console.log("checkpoint comicSeriesData:" + comicSeriesData);

        if (purchaseType == "pb_single") {
          var orderItemObject = {
            imageref: comicIssueData.imageref,
            comicid: comicId,
            seriesname: comicIssueData.seriesname,
            issuenumber: comicIssueData.issuenumber,
            purchasetype: purchaseType,
            price: comicPricingData.pb_price,
            authorname: comicSeriesData.authorname,
            purchasetypetext: purchaseTypeText,
            subtotal: SubTotal,
            quantity: Quantity,
          };

          priceArray.push(comicPricingData.pb_price);
          this.setState({ priceList: priceArray });
        } else if (purchaseType == "hb_single") {
          var orderItemObject = {
            imageref: comicIssueData.imageref,
            comicid: comicId,
            seriesname: comicIssueData.seriesname,
            issuenumber: comicIssueData.issuenumber,
            purchasetype: purchaseType,
            price: comicPricingData.hb_price,
            authorname: comicSeriesData.authorname,
            purchasetypetext: purchaseTypeText,
            subtotal: SubTotal,
            quantity: Quantity,
          };

          priceArray.push(comicPricingData.hb_price);
          this.setState({ priceList: priceArray });
        }
        console.log("checkpoint object:" + orderItemObject);
        //passing data to the state to send into the child component
        orderItems.push(orderItemObject);
        this.setState({ allItems: orderItems });

        this.setState({ subTotalArray: SubTotalArray });
      }

      //get item from state and search and set data
      let finalAmount = 0;
      for (let jindex = 0; jindex < priceArray.length; jindex++) {
        var multiply = parseInt(priceArray[jindex]);
        multiply = multiply * quantityArray[jindex];
        console.log(priceArray[jindex]);
        finalAmount = finalAmount + multiply;
      }
      console.log(parseInt(finalAmount) + " this come as the not NaN item");
      this.setState({ amount: finalAmount });
      localStorage.setItem("amount", JSON.stringify(finalAmount));
    } else {
      console.log("ArraySetup bad return");
    }
  }

  navigateToReciept() {
    this.props.history.push("/reciept");
  }
}
