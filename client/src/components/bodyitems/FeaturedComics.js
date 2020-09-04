import React, { Component } from "react";

export default class FeaturedComics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const element = (<div>Text from Element</div>)
    return (
        <div className="bg-gray-200 space-2 space-lg-3">
            <div className="container ">
                <div className="d-md-flex justify-content-between">
                    <header className="mb-4">
                        <h2 className="font-size-7">Featured Books</h2>
                    </header>
                    <ul className="nav justify-content-md-center nav-gray-700 mb-5 flex-nowrap flex-lg-wrap overflow-auto overflow-lg-visible" role="tablist">
                        <li className="nav-item mx-5 mb-1 flex-shrink-0 flex-lg-shrink-1">
                            <a className="nav-link px-0 active" id="example1-tab" data-toggle="tab" href="#example1" role="tab" aria-controls="example1" aria-selected="true">Marvel Universe</a>
                        </li>
                        <li className="nav-item mx-5 mb-1 flex-shrink-0 flex-lg-shrink-1">
                            <a className="nav-link px-0" id="example2-tab" data-toggle="tab" href="#example2" role="tab" aria-controls="example2" aria-selected="false">DC Universe</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="featuredBooksContent">
                    <div className="tab-pane fade show active" id="example1" role="tabpanel" aria-labelledby="example1-tab">
                        <ul className="products list-unstyled row no-gutters row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-wd-6 border-top border-left my-0">
                            <li className="product col">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require( "../../assets/img/120x180/img1.jpg")} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Think Like a Monk: Train Your Mind for Peace and Purpose Everyday</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require( "../../assets/img/120x180/img2.jpg")} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Man's Search for Meaning</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require("../../assets/img/120x180/img3.jpg" )} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Until the End of Time: Mind, Matter</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require("../../assets/img/120x180/img4.jpg" )} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">The Overdue Life of Amy Byler</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require( "../../assets/img/120x180/img5.jpg")} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Scot Under the Covers: The Wild Wicked</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require("../../assets/img/120x180/img6.jpg" )} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Where the Crawdads Sing</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require( "../../assets/img/120x180/img7.jpg")} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Blindside (Michael Bennett)</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require( "../../assets/img/120x180/img8.jpg" )} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Camino Winds</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col d-xl-none d-wd-block">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require( "../../assets/img/120x180/img9.jpg")} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">The Overdue Life of Amy Byler</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col d-xl-none d-wd-block">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require("../../assets/img/120x180/img10.jpg")} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Scot Under the Covers: The Wild Wicked</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col d-xl-none d-wd-block">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require("../../assets/img/120x180/img1.jpg" )} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Where the Crawdads Sing</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col d-xl-none d-wd-block">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require( "../../assets/img/120x180/img3.jpg")} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Blindside (Michael Bennett)</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-pane fade" id="example2" role="tabpanel" aria-labelledby="example2-tab">
                        <ul className="products list-unstyled row no-gutters row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-wd-6 border-top border-left my-0">
                            <li className="product col">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require( "../../assets/img/120x180/img1.jpg")} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Think Like a Monk: Train Your Mind for Peace and Purpose Everyday</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require( "../../assets/img/120x180/img2.jpg")} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Man's Search for Meaning</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require( "../../assets/img/120x180/img3.jpg")} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Until the End of Time: Mind, Matter</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require( "../../assets/img/120x180/img4.jpg")} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">The Overdue Life of Amy Byler</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require( "../../assets/img/120x180/img5.jpg")} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Scot Under the Covers: The Wild Wicked</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require( "../../assets/img/120x180/img6.jpg")} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Where the Crawdads Sing</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require("../../assets/img/120x180/img7.jpg" )} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Blindside (Michael Bennett)</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require("../../assets/img/120x180/img8.jpg" )} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Camino Winds</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col d-xl-none d-wd-block">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require( "../../assets/img/120x180/img9.jpg")} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">The Overdue Life of Amy Byler</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col d-xl-none d-wd-block">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require("../../assets/img/120x180/img10.jpg" )} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Scot Under the Covers: The Wild Wicked</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col d-xl-none d-wd-block">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require("../../assets/img/120x180/img1.jpg" )} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Where the Crawdads Sing</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product col d-xl-none d-wd-block">
                                <div className="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div className="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" className="d-block"><img src={require("../../assets/img/120x180/img3.jpg" )} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Blindside (Michael Bennett)</a></h2>
                                            <div className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a></div>
                                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div className="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span className="product__add-to-cart">ADD TO CART</span>
                                            <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" className="h-p-bg btn btn-outline-primary border-0">
                                            <i className="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    
    );
  }
}
