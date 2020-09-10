import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

class CheckoutItem extends Component {
  render() {
    return (
      <div>
        <tr className="woocommerce-cart-form__cart-item cart_item ">
          <td
            className="product-price"
            data-title="Quantity"
            style={{ minWidth: 80 }}
          >
            <span className="woocommerce-Price-amount amount">
              <a href="#">
                <img
                  src={this.props.data.imageref}
                  style={{ maxWidth: 70 }}
                  style={{ maxHeight: 180 }}
                  className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                  alt=""
                />
              </a>
            </span>
          </td>
          <td
            className="product-name"
            data-title="Product"
            style={{ minWidth: 250 }}
          >
            <div
              className="d-flex align-items-center"
              style={{ "text-align": "justify" }}
            >
              <div className="ml-3 m-w-200-lg-down">
                <span className="seriesname">{this.props.data.seriesname}</span>
                <span className="seriesname">
                  #{this.props.data.issuenumber}
                </span>
                <div className="text-gray-700 font-size-2 d-block" tabindex="0">
                  <span className="seriesname">
                    {this.props.data.authorname}
                  </span>

                  <p>
                    <span className="seriesname">
                      {this.props.data.purchasetypetext}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </td>
          <td
            className="product-price"
            data-title="Quantity"
            style={{ minWidth: 180 }}
          >
            <span className="woocommerce-Price-amount amount">
              {this.props.data.quantity}
              <br />
              <span className="woocommerce-Price-currencySymbol">
                Quantity&nbsp;&nbsp;
              </span>
            </span>
          </td>
          <td
            className="product-price"
            data-title="Price"
            style={{ minWidth: 250 }}
          >
            <span className="woocommerce-Price-amount amount">
              <span className="woocommerce-Price-currencySymbol">$</span>
              {this.props.data.price}
              <br />
            </span>
            <p className="seriesname">Unit Price</p>
          </td>
          <td
            className="product-price"
            data-title="subtotal"
            style={{ minWidth: 250 }}
          >
            <span className="woocommerce-Price-amount amount">
              <span className="woocommerce-Price-currencySymbol">$</span>
              {this.props.data.subtotal}
              <br />
            </span>
            <p className="seriesname">Sub Total</p>
          </td>
        </tr>
      </div>
    );
  }
}

export default CheckoutItem;
