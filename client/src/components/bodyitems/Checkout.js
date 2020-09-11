import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import "../../App.css";
import "react-toastify/dist/ReactToastify.css";
import CheckoutItem from "../internalcomponents/CheckoutItem";
import { isEmptyObject } from "jquery";
import { ReCaptcha } from "react-recaptcha-google";

toast.configure();

export default class Checkout extends Component {
  // eslint-disable-next-line
  constructor(props, context) {
    super(props, context);
    this.state = {
      quantityid: null,
      allItems: [],
      priceList: [],
      subTotalArray: [],
      comicIdArray: JSON.parse(localStorage.getItem("a_comic")),
      purchaseTypeArray: JSON.parse(localStorage.getItem("a_purchase")),
      quantityArray: JSON.parse(localStorage.getItem("a_quantity")),
      amount: null,
      totalitems: null,
      cartQuantity: JSON.parse(localStorage.getItem("cartquantity")),
      name: null,
      address: null,
      city: null,
      country: null,
      postalcode: null,
      phonenumber: null,
      updateShippingAddress: false,
    };

    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
      this.captchaDemo.execute();
    }
  }

  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!
    console.log("Recaptoken", recaptchaToken, "<= your recaptcha token");
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
                    <table
                      className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                      style={{ maxWidth: 800 }}
                    >
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
                  </div>
                  <br />
                  <div className="d-flex justify-content-center">
                    <div className="entry-content">
                      <div className="woocommerce">
                        <form name="checkout">
                          <div
                            className="form-row-wide"
                            style={{ maxWidth: 790 }}
                          >
                            <div
                              className=" col-md-12 col-lg-12 mb-6 mb-md-0"
                              id="customer_details"
                            >
                              <div className="px-4 pt-5 bg-white border">
                                <div className="woocommerce-billing-fields">
                                  <h3 className="mb-4 font-size-3">
                                    Billing and Shipping details (will be saved)
                                  </h3>
                                  <div className="woocommerce-billing-fields__field-wrapper row">
                                    <div className="col-12 mb-4d75 form-row form-row-first">
                                      <label
                                        for="billing_company"
                                        className="form-label"
                                      >
                                        Full Name*
                                      </label>
                                      <input
                                        className="input-text form-control"
                                        name="name"
                                        placeholder="Stan Lee"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                      />
                                    </div>
                                    <div className="col-12 mb-4d75 form-row form-row-first">
                                      <label
                                        for="billing_company"
                                        className="form-label"
                                      >
                                        Address*
                                      </label>
                                      <input
                                        className="input-text form-control"
                                        name="address"
                                        placeholder="No.120, Stark Tower, Manhattan"
                                        value={this.state.address}
                                        onChange={this.handleChange}
                                      />
                                    </div>
                                    <div className="col-12 mb-4d75 form-row form-row-first">
                                      <label
                                        for="billing_company"
                                        className="form-label"
                                      >
                                        City*
                                      </label>
                                      <input
                                        className="input-text form-control"
                                        name="city"
                                        placeholder="New York"
                                        value={this.state.city}
                                        onChange={this.handleChange}
                                      />
                                    </div>
                                    <div className="col-12 mb-4d75 form-row form-row-first">
                                      <label
                                        for="billing_company"
                                        className="form-label"
                                      >
                                        Country*
                                      </label>
                                      <input
                                        className="input-text form-control"
                                        name="country"
                                        placeholder="America"
                                        value={this.state.country}
                                        onChange={this.handleChange}
                                      />
                                    </div>
                                    <div className="col-12 mb-4d75 form-row form-row-first">
                                      <label
                                        for="billing_company"
                                        className="form-label"
                                      >
                                        Postal Code*
                                      </label>
                                      <input
                                        className="input-text form-control"
                                        name="postalcode"
                                        placeholder="11523A"
                                        value={this.state.postalcode}
                                        onChange={this.handleChange}
                                      />
                                    </div>
                                    <div className="col-12 mb-4d75 form-row form-row-first">
                                      <label
                                        for="billing_company"
                                        className="form-label"
                                      >
                                        Phone Number (Optional)
                                      </label>
                                      <input
                                        className="input-text form-control"
                                        name="phonenumber"
                                        placeholder="077 123 4567"
                                        value={this.state.phonenumber}
                                        onChange={this.handleChange}
                                      />
                                    </div>
                                    <br />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div style={{ minWidth: 360 }}>
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
                                  Amount of Items:&nbsp;
                                  {this.state.cartQuantity}
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
                          onClick={() => this.navigateToReciept()}
                          className="checkout-button button alt wc-forward btn btn-dark btn-block rounded-0 py-4"
                        >
                          Order
                        </Link>
                      </div>
                      <br />
                      <div
                        className="js-animation-link small"
                        data-target="#login1"
                        data-link-group="idForm1"
                        data-animation-in="fadeIn"
                      >
                        <Link
                          onClick={() => this.changeAddressData()}
                          className="checkout-button button alt wc-forward btn btn-dark btn-block rounded-0 py-4"
                        >
                          Make this Default Address
                        </Link>
                      </div>
                      <br />
                      <div
                        className="js-animation-link small"
                        data-target="#login1"
                        data-link-group="idForm1"
                        data-animation-in="fadeIn"
                      >
                        <Link
                          onClick={() => this.changeAddressDataBack()}
                          className="checkout-button button alt wc-forward btn btn-dark btn-block rounded-0 py-4"
                        >
                          Only Temporary Address
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
        {/* You can replace captchaDemo with any ref word */}
        <ReCaptcha
          ref={(el) => {
            this.captchaDemo = el;
          }}
          size="invisible"
          render="explicit"
          sitekey="6LcfUsoZAAAAADeHL8EyacEV8s5wNLCkxAX_blz0"
          onloadCallback={this.onLoadRecaptcha}
          verifyCallback={this.verifyCallback}
        />
      </div>
    );
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  async componentDidMount() {
    let cartItemObjectArray = JSON.parse(localStorage.getItem("cartitem"));
    this.loadShippingData();
    if (localStorage.getItem("accessright")) {
      localStorage.setItem("accessright", false);
      if (!isEmptyObject(cartItemObjectArray)) {
        this.subTotaller(cartItemObjectArray);
      } else {
        console.log("Nothing in your cart right now");
        toast.error("Nothing in your cart right now");
        this.props.history.push("/products");
      }
    } else {
      //if no content in your cartobject then redirect to collection
      console.log("Checkout expired");
      toast.error("Checkout expired");
      this.props.history.push("/products");
    }

    const script = document.createElement("script");

    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;

    document.body.appendChild(script);

    if (this.captchaDemo) {
      console.log("started, just a second...");
      this.captchaDemo.reset();
      this.captchaDemo.execute();
    }
  }

  async loadShippingData() {
    var userId = localStorage.getItem("id");
    var fullName = null;
    var Address = null;
    var City = null;
    var Country = null;
    var postalCode = null;
    var phoneNumber = null;

    let shippingData = await axios.get(
      `http://dailycomics.herokuapp.com/usershipping/${userId}`
    );
    let shippingDataExtract = shippingData.data;
    console.log(
      "checkpoint recieved shipping data: " +
        JSON.stringify(shippingDataExtract)
    );
    if (shippingDataExtract) {
      fullName = shippingDataExtract.name;
      Address = shippingDataExtract.address;
      City = shippingDataExtract.city;
      Country = shippingDataExtract.country;
      postalCode = shippingDataExtract.postalcode;
      phoneNumber = shippingDataExtract.phonenumber;
    }

    this.setState({ name: fullName });
    this.setState({ address: Address });
    this.setState({ city: City });
    this.setState({ country: Country });
    this.setState({ postalcode: postalCode });
    this.setState({ phonenumber: phoneNumber });

    //get and load shipping data from db to input
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
          `http://dailycomics.herokuapp.com/comic/${comicId}`
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
          `http://dailycomics.herokuapp.com/prices/${comicId}`
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
          `http://dailycomics.herokuapp.com/comicseries/${seriesName}`
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

  async navigateToReciept() {
    if (this.state.updateShippingAddress == true) {
      //if the guy wants to update the default shipping data too
      let userUpdate = {
        _id: localStorage.getItem("id"),
        name: this.state.name,
        address: this.state.address,
        postalcode: this.state.postalcode,
        city: this.state.city,
        country: this.state.country,
        phonenumber: this.state.phonenumber,
      };
      var jwt_token = localStorage.getItem("currentToken"); //because it is a protected route
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": jwt_token,
        },
      };
      const body = JSON.stringify(userUpdate);
      const res = await axios
        .put(
          "http://dailycomics.herokuapp.com/usershippingupdate",
          body,
          config
        )
        .then((res) => {
          console.log(res.data.msg);
          toast.success(res.data.msg);
        })
        .catch((err) => {
          toast.error(err);
          console.log(err);
        });

      if (res == false) {
        console.log(
          "unexpected error occured at updating new default shipping"
        );
        toast.success(
          "unexpected error occured at updating new default shipping"
        );
      }
    }
    //reducing the stock from database
    /*for (let i in this.state.purchaseTypeArray) {
      let dataObject = {
        comicissue_id: this.state.comicIdArray[i],
        stock_type: this.state.purchaseTypeArray[i],
        stock_qty: this.state.quantityArray[i],
      };

      var jwt_token = localStorage.getItem("currentToken"); //because it is a protected route
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": jwt_token,
        },
      };
      const body = JSON.stringify(dataObject);
      var res2 = await axios
        .put("http://dailycomics.herokuapp.com/consumestock", body, config)
        .then((res2) => {
          console.log(res2.data.msg);
          toast.success(res2.data.msg);
        })
        .catch((err) => {
          toast.error(err);
          console.log(err);
        });

      if (res2 == false) {
        console.log(
          "unexpected error occured at updating new default shipping"
        );
        toast.success(
          "unexpected error occured at updating new default shipping"
        );
      }
    }*/

    //completing the order
    let orderComplete = {
      user_id: localStorage.getItem("id"),
      name: this.state.name,
      address: this.state.address,
      postalcode: this.state.postalcode,
      city: this.state.city,
      country: this.state.country,
      phonenumber: this.state.phonenumber,
      total_items: this.state.totalitems,
      total: this.state.amount,
      quantity_array: this.state.quantityArray,
      purchase_array: this.state.purchaseTypeArray,
      item_array: this.state.comicIdArray,
    };
    console.log("checkpoint : orderComplete" + JSON.stringify(orderComplete));
    var jwt_token = localStorage.getItem("currentToken"); //because it is a protected route
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": jwt_token,
      },
    };
    const body = JSON.stringify(orderComplete);
    const result = await axios
      .post("http://dailycomics.herokuapp.com/createorder", body, config)
      .then((res2) => {
        console.log(res2);
        toast.success(res2);
        localStorage.removeItem("cartitem");
        toast.success("Order Success");
        this.props.history.push("/products");
      })
      .catch((error) => {
        toast.error(error);
        console.log(error);
      });
  }

  changeAddressData() {
    this.setState({ updateShippingAddress: true });
    toast.success("Added as new Default Address");
  }
  changeAddressDataBack() {
    this.setState({ updateShippingAddress: false });
    toast.success("Added as a Temporary Address");
  }
}
