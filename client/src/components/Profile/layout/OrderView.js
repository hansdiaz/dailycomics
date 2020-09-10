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
  }

  render() {
    return <div></div>;
  }

  async componentDidMount() {
    this.loadShippingData();
    if (localStorage.getItem("watchingOrder")) {
      this.loadShippingData();
    } else {
      //if no content in your cartobject then redirect to collection
      this.props.history.push("/products");
    }
  }

  async loadShippingData() {
    var orderId = localStorage.getItem("watchingOrder");
    var fullName = null;
    var Address = null;
    var City = null;
    var Country = null;
    var postalCode = null;
    var phoneNumber = null;

    let shippingData = await axios.get(
      `http://localhost:5000/usershipping/${orderId}`
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
}
