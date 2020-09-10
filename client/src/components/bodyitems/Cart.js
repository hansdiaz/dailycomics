import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartItem from "../internalcomponents/CartItem";
import { isEmptyObject } from "jquery";
toast.configure();

export default class Cart extends Component {
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
      cartQuantity: JSON.parse(localStorage.getItem("cartquantity")),
    };
  }

  render() {
    //const element = (<div>Text from Element</div>)
    return (
      <div className="site-content bg-punch-light overflow-x" id="content">
        <div className="container">
          <header className="entry-header space-top-2 space-bottom-1 mb-2">
            <h1 className="entry-title font-size-7">
              Your cart items:
            </h1>
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
                                <CartItem
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

  async componentDidMount() {
    let cartItemObjectArray = JSON.parse(localStorage.getItem("cartitem"));
    localStorage.setItem("accessright", false);
    if (!isEmptyObject(cartItemObjectArray)) {
      this.subTotaller();
    } else {
      //if no content in your cartobject then redirect to collection
      console.log("Nothing in your cart right now");
      toast.error("Nothing in your cart right now");
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

  async subTotaller() {
    let cartItemObjectArray = JSON.parse(localStorage.getItem("cartitem"));
    localStorage.setItem("cartquantity", cartItemObjectArray.length);
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

  async removeItem(comicIdPassed) {
    console.log("checkpoint remove ", comicIdPassed);

    let cartItemObjectArray1 = JSON.parse(localStorage.getItem("cartitem"));
    for (let i in cartItemObjectArray1) {
      var comicId = cartItemObjectArray1[i].comicid;

      if (cartItemObjectArray1[i].comicid == comicIdPassed) {
        console.log(i + " :index deleted");
        cartItemObjectArray1.splice(i, 1);
        localStorage.setItem("cartitem", JSON.stringify(cartItemObjectArray1));
        break;
      }
    }
    console.log("checkpoint broke");
    let cartItemObjectArray2 = JSON.parse(localStorage.getItem("cartitem"));
    localStorage.setItem("cartquantity", cartItemObjectArray2.length);
    if (!isEmptyObject(cartItemObjectArray2)) {
      await this.subTotaller();
    } else {
      //if no content in your cartobject then redirect to collection
      console.log("Nothing in your cart right now");
      toast.error("Nothing in your cart right now");
      localStorage.setItem("cartquantity", 0);
      this.props.history.push("/products");
    }
  }

  navigateToCheckout() {
    localStorage.setItem("accessright", true);
    this.props.history.push("/checkout");
  }
}
