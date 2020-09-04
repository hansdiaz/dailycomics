import React, { Component } from "react";

export default class Cart extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    //const element = (<div>Text from Element</div>)
    return (
      <div className="site-content bg-punch-light overflow-x" id="content">
        <div className="container">
          <header className="entry-header space-top-2 space-bottom-1 mb-2">
            <h1 className="entry-title font-size-7">Your cart: 3 items</h1>
          </header>
          <div className="row pb-8 justify-content-between ">
            <div id="primary" className="content-area">
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
                              <th className="product-price">Price</th>
                              <th className="product-quantity">Quantity</th>
                              <th className="product-subtotal">Total</th>
                              <th className="product-remove">&nbsp;</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="woocommerce-cart-form__cart-item cart_item">
                              <td className="product-name" data-title="Product">
                                <div className="d-flex align-items-center">
                                  <a href="#">
                                    <img
                                      src={require("../../assets/img/90x138/img1.jpg")}
                                      className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                  <div className="ml-3 m-w-200-lg-down">
                                    <a href="#">
                                      The Overdue Life of Amy Byler
                                    </a>
                                    <a
                                      href="#"
                                      className="text-gray-700 font-size-2 d-block"
                                      tabindex="0"
                                    >
                                      Kelly Harms
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td className="product-price" data-title="Price">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    £
                                  </span>
                                  79.99
                                </span>
                              </td>
                              <td
                                className="product-quantity"
                                data-title="Quantity"
                              >
                                <div className="quantity d-flex align-items-center">
                                  <div className="border px-3 width-120">
                                    <div className="js-quantity">
                                      <div className="d-flex align-items-center">
                                        <label className="screen-reader-text sr-only">
                                          Quantity
                                        </label>
                                        <a
                                          className="js-minus text-dark"
                                          href="javascript:;"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="10px"
                                            height="1px"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              fill="rgb(22, 22, 25)"
                                              d="M-0.000,-0.000 L10.000,-0.000 L10.000,1.000 L-0.000,1.000 L-0.000,-0.000 Z"
                                            />
                                          </svg>
                                        </a>
                                        <input
                                          type="number"
                                          className="input-text qty text js-result form-control text-center border-0"
                                          step="1"
                                          min="1"
                                          max="100"
                                          name="quantity"
                                          value="1"
                                          title="Qty"
                                        />
                                        <a
                                          className="js-plus text-dark"
                                          href="javascript:;"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="10px"
                                            height="10px"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              fill="rgb(22, 22, 25)"
                                              d="M10.000,5.000 L6.000,5.000 L6.000,10.000 L5.000,10.000 L5.000,5.000 L-0.000,5.000 L-0.000,4.000 L5.000,4.000 L5.000,-0.000 L6.000,-0.000 L6.000,4.000 L10.000,4.000 L10.000,5.000 Z"
                                            />
                                          </svg>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td
                                className="product-subtotal"
                                data-title="Total"
                              >
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    £
                                  </span>
                                  79.99
                                </span>
                              </td>
                              <td className="product-remove">
                                <a
                                  href="#"
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
                                </a>
                              </td>
                            </tr>
                            <tr className="woocommerce-cart-form__cart-item cart_item">
                              <td className="product-name" data-title="Product">
                                <div className="d-flex align-items-center">
                                  <a href="#">
                                    <img
                                      src={require("../../assets/img/90x138/img2.jpg")}
                                      className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                  <div className="ml-3 m-w-200-lg-down">
                                    <a href="#">
                                      All You Can Ever Know: A Memoir
                                    </a>
                                    <a
                                      href="#"
                                      className="text-gray-700 font-size-2 d-block"
                                      tabindex="0"
                                    >
                                      Kelly Harms
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td className="product-price" data-title="Price">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    £
                                  </span>
                                  79.99
                                </span>
                              </td>
                              <td
                                className="product-quantity"
                                data-title="Quantity"
                              >
                                <div className="quantity d-flex align-items-center">
                                  <div className="border px-3 width-120">
                                    <div className="js-quantity">
                                      <div className="d-flex align-items-center">
                                        <label className="screen-reader-text sr-only">
                                          Quantity
                                        </label>
                                        <a
                                          className="js-minus text-dark"
                                          href="javascript:;"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="10px"
                                            height="1px"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              fill="rgb(22, 22, 25)"
                                              d="M-0.000,-0.000 L10.000,-0.000 L10.000,1.000 L-0.000,1.000 L-0.000,-0.000 Z"
                                            />
                                          </svg>
                                        </a>
                                        <input
                                          type="number"
                                          className="input-text qty text js-result form-control text-center border-0"
                                          step="1"
                                          min="1"
                                          max="100"
                                          name="quantity"
                                          value="1"
                                          title="Qty"
                                        />
                                        <a
                                          className="js-plus text-dark"
                                          href="javascript:;"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="10px"
                                            height="10px"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              fill="rgb(22, 22, 25)"
                                              d="M10.000,5.000 L6.000,5.000 L6.000,10.000 L5.000,10.000 L5.000,5.000 L-0.000,5.000 L-0.000,4.000 L5.000,4.000 L5.000,-0.000 L6.000,-0.000 L6.000,4.000 L10.000,4.000 L10.000,5.000 Z"
                                            />
                                          </svg>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td
                                className="product-subtotal"
                                data-title="Total"
                              >
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    £
                                  </span>
                                  79.99
                                </span>
                              </td>
                              <td className="product-remove">
                                <a
                                  href="#"
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
                                </a>
                              </td>
                            </tr>
                            <tr className="woocommerce-cart-form__cart-item cart_item">
                              <td className="product-name" data-title="Product">
                                <div className="d-flex align-items-center">
                                  <a href="#">
                                    <img
                                      src={require("../../assets/img/90x138/img3.jpg")}
                                      className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                  <div className="ml-3 m-w-200-lg-down">
                                    <a href="#">Winter Garden</a>
                                    <a
                                      href="#"
                                      className="text-gray-700 font-size-2 d-block"
                                      tabindex="0"
                                    >
                                      Kelly Harms
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td className="product-price" data-title="Price">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    £
                                  </span>
                                  79.99
                                </span>
                              </td>
                              <td
                                className="product-quantity"
                                data-title="Quantity"
                              >
                                <div className="quantity d-flex align-items-center">
                                  <div className="border px-3 width-120">
                                    <div className="js-quantity">
                                      <div className="d-flex align-items-center">
                                        <label className="screen-reader-text sr-only">
                                          Quantity
                                        </label>
                                        <a
                                          className="js-minus text-dark"
                                          href="javascript:;"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="10px"
                                            height="1px"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              fill="rgb(22, 22, 25)"
                                              d="M-0.000,-0.000 L10.000,-0.000 L10.000,1.000 L-0.000,1.000 L-0.000,-0.000 Z"
                                            />
                                          </svg>
                                        </a>
                                        <input
                                          type="number"
                                          className="input-text qty text js-result form-control text-center border-0"
                                          step="1"
                                          min="1"
                                          max="100"
                                          name="quantity"
                                          value="1"
                                          title="Qty"
                                        />
                                        <a
                                          className="js-plus text-dark"
                                          href="javascript:;"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="10px"
                                            height="10px"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              fill="rgb(22, 22, 25)"
                                              d="M10.000,5.000 L6.000,5.000 L6.000,10.000 L5.000,10.000 L5.000,5.000 L-0.000,5.000 L-0.000,4.000 L5.000,4.000 L5.000,-0.000 L6.000,-0.000 L6.000,4.000 L10.000,4.000 L10.000,5.000 Z"
                                            />
                                          </svg>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td
                                className="product-subtotal"
                                data-title="Total"
                              >
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    £
                                  </span>
                                  79.99
                                </span>
                              </td>
                              <td className="product-remove">
                                <a
                                  href="#"
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
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="5" className="actions">
                                <input
                                  type="submit"
                                  className="button"
                                  name="update_cart"
                                  value="Update cart"
                                />
                                <input
                                  type="hidden"
                                  id="_wpnonce"
                                  name="_wpnonce"
                                  value="db025d7a70"
                                />
                                <input
                                  type="hidden"
                                  name="_wp_http_referer"
                                  value="/storefront/cart/"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </form>
                    </div>
                  </div>
                </div>
              </main>
            </div>
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
                    <a
                      className="d-flex align-items-center justify-content-between text-dark"
                      href="#"
                      data-toggle="collapse"
                      data-target="#cartCollapseOne"
                      aria-expanded="true"
                      aria-controls="cartCollapseOne"
                    >
                      <h3 className="cart-title mb-0 font-weight-medium font-size-3">
                        Cart Totals
                      </h3>
                      <svg
                        className="mins"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="15px"
                        height="2px"
                      >
                        <path
                          fill-rule="evenodd"
                          fill="rgb(22, 22, 25)"
                          d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"
                        />
                      </svg>
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="15px"
                        height="15px"
                      >
                        <path
                          fill-rule="evenodd"
                          fill="rgb(22, 22, 25)"
                          d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"
                        />
                      </svg>
                    </a>
                  </div>
                  <div
                    id="cartCollapseOne"
                    className="mt-4 cart-content collapse show"
                    aria-labelledby="cartHeadingOne"
                    data-parent="#cartAccordion"
                  >
                    <table className="shop_table shop_table_responsive">
                      <tbody>
                        <tr className="cart-subtotal">
                          <th>Subtotal</th>
                          <td data-title="Subtotal">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                £
                              </span>
                              79.99
                            </span>
                          </td>
                        </tr>
                        <tr className="order-shipping">
                          <th>Shipping</th>
                          <td data-title="Shipping">Free Shipping</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="p-4d875 border">
                  <div id="cartHeadingTwo" className="cart-head">
                    <a
                      className="d-flex align-items-center justify-content-between text-dark"
                      href="#"
                      data-toggle="collapse"
                      data-target="#cartCollapseTwo"
                      aria-expanded="true"
                      aria-controls="cartCollapseTwo"
                    >
                      <h3 className="cart-title mb-0 font-weight-medium font-size-3">
                        Shipping
                      </h3>
                      <svg
                        className="mins"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="15px"
                        height="2px"
                      >
                        <path
                          fill-rule="evenodd"
                          fill="rgb(22, 22, 25)"
                          d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"
                        />
                      </svg>
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="15px"
                        height="15px"
                      >
                        <path
                          fill-rule="evenodd"
                          fill="rgb(22, 22, 25)"
                          d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"
                        />
                      </svg>
                    </a>
                  </div>
                  <div
                    id="cartCollapseTwo"
                    className="mt-4 cart-content collapse show"
                    aria-labelledby="cartHeadingTwo"
                    data-parent="#cartAccordion"
                  >
                    <ul id="shipping_method">
                      <li>
                        <input
                          type="radio"
                          name="shipping_method[0]"
                          data-index="0"
                          id="shipping_method_0_flat_rate1"
                          value="flat_rate:1"
                          className="shipping_method"
                        />
                        <label for="shipping_method_0_flat_rate1">
                          Free shipping
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="shipping_method[0]"
                          data-index="0"
                          id="shipping_method_0_flat_rate2"
                          value="flat_rate:2"
                          className="shipping_method"
                          checked="checked"
                        />
                        <label for="shipping_method_0_flat_rate2">
                          Flat rate:
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            15
                          </span>
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="shipping_method[0]"
                          data-index="0"
                          id="shipping_method_0_flat_rate3"
                          value="flat_rate:2"
                          className="shipping_method"
                          checked="checked"
                        />
                        <label for="shipping_method_0_flat_rate3">
                          Local pickup::
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            8
                          </span>
                        </label>
                      </li>
                    </ul>

                    <span className="font-size-2">Shipping to Turkey.</span>
                    <a
                      href="#"
                      className="font-weight-medium h-primary ml-3 font-size-2"
                    >
                      Change Address
                    </a>
                  </div>
                </div>
                <div className="p-4d875 border">
                  <div id="cartHeadingThree" className="cart-head">
                    <a
                      className="d-flex align-items-center justify-content-between text-dark"
                      href="#"
                      data-toggle="collapse"
                      data-target="#cartCollapseThree"
                      aria-expanded="true"
                      aria-controls="cartCollapseThree"
                    >
                      <h3 className="cart-title mb-0 font-weight-medium font-size-3">
                        Coupon
                      </h3>
                      <svg
                        className="mins"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="15px"
                        height="2px"
                      >
                        <path
                          fill-rule="evenodd"
                          fill="rgb(22, 22, 25)"
                          d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"
                        />
                      </svg>
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="15px"
                        height="15px"
                      >
                        <path
                          fill-rule="evenodd"
                          fill="rgb(22, 22, 25)"
                          d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"
                        />
                      </svg>
                    </a>
                  </div>
                  <div
                    id="cartCollapseThree"
                    className="mt-4 cart-content collapse show"
                    aria-labelledby="cartHeadingThree"
                    data-parent="#cartAccordion"
                  >
                    <div className="coupon">
                      <label for="coupon_code">Coupon:</label>
                      <input
                        type="text"
                        name="coupon_code"
                        className="input-text"
                        id="coupon_code"
                        value=""
                        placeholder="Coupon code"
                        autocomplete="off"
                      />
                      <input
                        type="submit"
                        className="button"
                        name="apply_coupon"
                        value="Apply coupon"
                      />
                    </div>
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
                                £
                              </span>
                              97.99
                            </span>
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="wc-proceed-to-checkout">
                <a
                  href="checkout.html"
                  className="checkout-button button alt wc-forward btn btn-dark btn-block rounded-0 py-4"
                >
                  Proceed to checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
