import React, { Component } from "react";
import Select from "react-select";

const purchaseType = [
  { value: "esingle", label: "Ebook Single" },
  { value: "pbsingle", label: "PaperBack Single" },
  { value: "hbsingle", label: "HardBack Single" },
  { value: "esingle", label: "Ebook Single" },
  { value: "esub", label: "Ebook Subscription" },
  { value: "pbsub", label: "PaperBack Subscription" },
];

export default class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const element = (<div>Text from Element</div>)
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
                        <img
                          src={require("../../assets/img/300x452/img5.jpg")}
                          alt="Image Description"
                          className="mx-auto img-fluid"
                        />
                      </div>
                    </div>
                  </figure>
                </div>
                <div className="col-md-6 col-lg-5 summary entry-summary">
                  <div className="border bg-white">
                    <div className="py-4 px-5">
                      <div className="border-bottom mb-4">
                        <h1 className="product_title entry-title font-size-26 mb-3">
                          Where the Crawdads Sing
                        </h1>
                        <div className="font-size-2 mb-4 justify-content-between row">
                          <div>
                            <span className="ml-3 font-weight-medium">
                              By (author)
                            </span>
                            <span className="ml-2 text-gray-600">
                              Anna Banks
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="price font-size-22 font-weight-medium mb-4">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          4.95
                        </span>
                      </p>
                      <label className="form-label font-size-2 font-weight-medium">
                        Book Format
                      </label>

                      <div style={{ minWidth: 100 + "%" }} className="py-lg-2">
                        <Select
                          options={purchaseType}
                          defaultValue={purchaseType[0]}
                        />
                      </div>

                      <form
                        className="cart mb-4 d-md-flex align-items-end"
                        method="post"
                        enctype="multipart/form-data"
                      >
                        <button
                          type="submit"
                          name="add-to-cart"
                          value="7145"
                          className="btn btn-block  btn-dark border-0 rounded-1 p-3 single_add_to_cart_button button alt"
                          style={{ minWidth: 100 + "%" }}
                        >
                          Add to cart
                        </button>
                      </form>
                      <ul className="list-unstyled nav d-block d-md-flex justify-content-center">
                        <li className="mr-md-4 mb-4 mb-md-0">
                          <a href="#" className="h-primary">
                            <i className="flaticon-heart mr-2"></i> Add to
                            Wishlist
                          </a>
                        </li>
                        <li className="">
                          <a href="#" className="h-primary">
                            <i className="flaticon-share mr-2"></i> Share
                          </a>
                        </li>
                      </ul>
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
                        <p class="mb-0">
                          We aim to show you accurate product information.
                          Manufacturers, suppliers and others provide what you
                          see here, and we have not verified it. See our
                          disclaimer
                        </p>
                        <p class="mb-0">#1 New York Times Bestseller</p>
                        <p class="mb-0">
                          A Reese Witherspoon x Hello Sunshine Book Club Pick
                        </p>
                        <p class="mb-4">
                          "I can't even express how much I love this book! I
                          didn't want this story to end!"--Reese Witherspoon
                        </p>
                        <p class="mb-4">
                          "Painfully beautiful."--The New York Times Book Review
                        </p>
                        <p>"Perfect for fans of Barbara Kingsolver."--Bustle</p>
                        <p class="mb-4">
                          For years, rumors of the "Marsh Girl" have haunted
                          Barkley Cove, a quiet town on the North Carolina
                          coast. So in late 1969, when handsome Chase Andrews is
                          found dead, the locals immediately suspect Kya Clark,
                          the so-called Marsh Girl. But Kya is not what they
                          say. Sensitive and intelligent, she has survived for
                          years alone in the marsh that she calls home, finding
                          friends in the gulls and lessons in the sand. Then the
                          time comes when she yearns to be touched and loved.
                          When two young men from town become intrigued by her
                          wild beauty, Kya opens herself to a new life--until
                          the unthinkable happens.
                        </p>
                        <p class="mb-4">
                          Perfect for fans of Barbara Kingsolver and Karen
                          Russell, Where the Crawdads Sing is at once an
                          exquisite ode to the natural world, a heartbreaking
                          coming-of-age story, and a surprising tale of possible
                          murder. Owens reminds us that we are forever shaped by
                          the children we once were, and that we are all subject
                          to the beautiful and violent secrets that nature keeps
                        </p>
                        <p>WHERE THE CRAWDADS LP</p>
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
                                <th class="px-4 px-xl-5">Format: </th>
                                <td class="">Paperback | 384 pages</td>
                              </tr>
                              <tr>
                                <th class="px-4 px-xl-5">Dimensions</th>
                                <td>9126 x 194 x 28mm | 301g</td>
                              </tr>
                              <tr>
                                <th class="px-4 px-xl-5">Publication date: </th>
                                <td>20 Dec 2020</td>
                              </tr>
                              <tr>
                                <th class="px-4 px-xl-5">Publisher:</th>
                                <td>Little, Brown Book Group</td>
                              </tr>
                              <tr>
                                <th class="px-4 px-xl-5">Imprint:</th>
                                <td>Corsair</td>
                              </tr>
                              <tr>
                                <th class="px-4 px-xl-5">
                                  Publication City/Country:
                                </th>
                                <td>London, United Kingdom</td>
                              </tr>
                              <tr>
                                <th class="px-4 px-xl-5">Language:</th>
                                <td>English</td>
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
}
