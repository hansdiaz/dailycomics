import React, { Component } from "react";

export default class FeaturedComics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const element = (<div>Text from Element</div>)
    return (
        <div class="bg-gray-200 space-2 space-lg-3">
            <div class="container ">
                <div class="d-md-flex justify-content-between">
                    <header class="mb-4">
                        <h2 class="font-size-7">Featured Books</h2>
                    </header>
                    <ul class="nav justify-content-md-center nav-gray-700 mb-5 flex-nowrap flex-lg-wrap overflow-auto overflow-lg-visible" role="tablist">
                        <li class="nav-item mx-5 mb-1 flex-shrink-0 flex-lg-shrink-1">
                            <a class="nav-link px-0 active" id="example1-tab" data-toggle="tab" href="#example1" role="tab" aria-controls="example1" aria-selected="true">Marvel Universe</a>
                        </li>
                        <li class="nav-item mx-5 mb-1 flex-shrink-0 flex-lg-shrink-1">
                            <a class="nav-link px-0" id="example2-tab" data-toggle="tab" href="#example2" role="tab" aria-controls="example2" aria-selected="false">DC Universe</a>
                        </li>
                    </ul>
                </div>
                <div class="tab-content" id="featuredBooksContent">
                    <div class="tab-pane fade show active" id="example1" role="tabpanel" aria-labelledby="example1-tab">
                        <ul class="products list-unstyled row no-gutters row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-wd-6 border-top border-left my-0">
                            <li class="product col">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require( "../../assets/img/120x180/img1.jpg")} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Think Like a Monk: Train Your Mind for Peace and Purpose Everyday</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require( "../../assets/img/120x180/img2.jpg")} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Man's Search for Meaning</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require("../../assets/img/120x180/img3.jpg" )} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Until the End of Time: Mind, Matter</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require("../../assets/img/120x180/img4.jpg" )} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">The Overdue Life of Amy Byler</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require( "../../assets/img/120x180/img5.jpg")} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Scot Under the Covers: The Wild Wicked</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require("../../assets/img/120x180/img6.jpg" )} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Where the Crawdads Sing</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require( "../../assets/img/120x180/img7.jpg")} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Blindside (Michael Bennett)</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require( "../../assets/img/120x180/img8.jpg" )} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Camino Winds</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col d-xl-none d-wd-block">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require( "../../assets/img/120x180/img9.jpg")} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">The Overdue Life of Amy Byler</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col d-xl-none d-wd-block">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require("../../assets/img/120x180/img10.jpg")} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Scot Under the Covers: The Wild Wicked</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col d-xl-none d-wd-block">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require("../../assets/img/120x180/img1.jpg" )} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Where the Crawdads Sing</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col d-xl-none d-wd-block">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require( "../../assets/img/120x180/img3.jpg")} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Blindside (Michael Bennett)</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="example2" role="tabpanel" aria-labelledby="example2-tab">
                        <ul class="products list-unstyled row no-gutters row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-wd-6 border-top border-left my-0">
                            <li class="product col">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require( "../../assets/img/120x180/img1.jpg")} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Think Like a Monk: Train Your Mind for Peace and Purpose Everyday</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require( "../../assets/img/120x180/img2.jpg")} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Man's Search for Meaning</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require( "../../assets/img/120x180/img3.jpg")} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Until the End of Time: Mind, Matter</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require( "../../assets/img/120x180/img4.jpg")} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">The Overdue Life of Amy Byler</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require( "../../assets/img/120x180/img5.jpg")} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Scot Under the Covers: The Wild Wicked</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require( "../../assets/img/120x180/img6.jpg")} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Where the Crawdads Sing</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require("../../assets/img/120x180/img7.jpg" )} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Blindside (Michael Bennett)</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require("../../assets/img/120x180/img8.jpg" )} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Camino Winds</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col d-xl-none d-wd-block">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require( "../../assets/img/120x180/img9.jpg")} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">The Overdue Life of Amy Byler</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col d-xl-none d-wd-block">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require("../../assets/img/120x180/img10.jpg" )} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Scot Under the Covers: The Wild Wicked</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col d-xl-none d-wd-block">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require("../../assets/img/120x180/img1.jpg" )} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Where the Crawdads Sing</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product col d-xl-none d-wd-block">
                                <div class="product__inner overflow-hidden bg-white p-3 p-md-4d875">
                                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                        <div class="woocommerce-loop-product__thumbnail">
                                            <a href="../shop/single-product-v2.html" class="d-block"><img src={require("../../assets/img/120x180/img3.jpg" )} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                                        </div>
                                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v2.html">Paperback</a></div>
                                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v2.html">Blindside (Michael Bennett)</a></h2>
                                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay Shetty</a></div>
                                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                            </div>
                                        </div>
                                        <div class="product__hover d-flex align-items-center">
                                            <a href="../shop/single-product-v2-2.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-switch"></i>
                                            </a>
                                            <a href="../shop/single-product-v2-2.html" class="h-p-bg btn btn-outline-primary border-0">
                                            <i class="flaticon-heart"></i>
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
