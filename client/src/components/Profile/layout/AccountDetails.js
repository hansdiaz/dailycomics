import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default class AccountDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      address: null,
      city: null,
      country: null,
      postalcode: null,
      phonenumber: null,
      updateShippingAddress: false,
    };
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
    this.loadShippingData();
  }

  async updateUser() {
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
      .put("https://dailycomics.herokuapp.com/usershippingupdate", body, config)
      .then((res) => {
        console.log(res.data.msg);
        toast.success(res.data.msg);
      })
      .catch((err) => {
        toast.error(err);
        console.log(err);
      });

    if (res == false) {
      console.log("unexpected error occured at updating new default shipping");
      toast.success(
        "unexpected error occured at updating new default shipping"
      );
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
      `https://dailycomics.herokuapp.com/usershipping/${userId}`
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

  render() {
    return (
      <div class="container my-lg-1 pt-lg-8 py-lg-8">
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
                    <div className="d-flex justify-content-center">
                      <div className="entry-content">
                        <div className="woocommerce">
                          <form name="checkout">
                            <div
                              className="form-row-wide"
                              style={{ maxWidth: 1000 }}
                            >
                              <div
                                className=" col-md-12 col-lg-12 mb-6 mb-md-0"
                                id="customer_details"
                              >
                                <div className="px-4 pt-5 bg-white border">
                                  <div className="woocommerce-billing-fields">
                                    <h3 className="mb-4 font-size-3">
                                      Account and Shipping details
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
                                      <button
                                        type="submit"
                                        onClick={() => this.updateUser()}
                                        class="btn btn-wide btn-dark text-white rounded-0 transition-3d-hover height-60 width-390"
                                      >
                                        Save Changes
                                      </button>
                                    </div>
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
      </div>
    );
  }
}
