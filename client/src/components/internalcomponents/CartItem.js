import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

class CartItem extends Component {
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
            style={{ minWidth: 150 }}
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
            style={{ minWidth: 150 }}
          >
            <span className="woocommerce-Price-amount amount">
              <span className="woocommerce-Price-currencySymbol">$</span>
              {this.props.data.subtotal}
              <br />
            </span>
            <p className="seriesname">Sub Total</p>
          </td>
          <td className="product-remove" style={{ minWidth: 50 }}>
            <Link
              onClick={this.props.onRemove}
              className="remove"
              aria-label="Remove this item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="15px"
                height="15px"
              >
                <path
                  fill-rule="evenodd"
                  fill="rgb(22, 22, 25)"
                  d="M15.011,13.899 L13.899,15.012 L7.500,8.613 L1.101,15.012 L-0.012,13.899 L6.387,7.500 L-0.012,1.101 L1.101,-0.012 L7.500,6.387 L13.899,-0.012 L15.011,1.101 L8.613,7.500 L15.011,13.899 Z"
                />
              </svg>
            </Link>
          </td>
        </tr>
      </div>
    );
  }
}

export default CartItem;
