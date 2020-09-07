import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllProductsProduct extends Component {
  render() {
    return (
      <li className="product col">
        <div className="product__inner overflow-hidden p-3 p-md-4d875">
          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
            <div className="woocommerce-loop-product__thumbnail">
              <Link onClick={this.props.onNavigate} className="d-block">
                <img
                  src={this.props.data.imageref}
                  className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                  alt="image-description"
                />
              </Link>
            </div>
            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                {this.props.data.seriesname}#{this.props.data.issuenumber}
              </h2>
              <div className="font-size-2 mb-1 text-truncate">
                {this.props.data.authorname}
              </div>
            </div>
            <div className="product__hover d-flex align-items-center">
              <Link
                onClick={this.props.onNavigate}
                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
                data-toggle="tooltip"
                data-placement="right"
                title=""
                data-original-title="ADD TO CART"
              >
                <span className="product__add-to-cart">ADD TO CART</span>
                <span className="product__add-to-cart-icon font-size-4">
                  <i className="flaticon-icon-126515"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default AllProductsProduct;
