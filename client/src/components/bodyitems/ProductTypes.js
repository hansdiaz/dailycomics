import React, { Component } from "react";

export default class ProductTypes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const element = (<div>Text from Element</div>)
    return (
        <section className="space-1 space-1">
        <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                <div className="col">
                    <div className="mb-5 mb-xl-0 position-relative">
                        <div className="bg-indigo-light height-md-300">
                            <div className="p-5 pl-lg-6 pr-lg-5 pt-lg-5 pb-lg-5">
                                <div className="position-relative z-index-2">
                                    <h2 className="font-size-26 mt-lg-1 text-lh-md">
                                        <span className="hero__title-line-1 font-weight-bold d-block">Coloring Books</span>
                                        <span className="hero__title-line-2 font-weight-normal d-block">for adults</span>
                                    </h2>
                                    <a className="h6 stretched-link font-weight-medium text-dark" href="../shop/v2.html">Shop Now</a>
                                </div>
                                <div className="d-flex d-md-block justify-content-end position-md-absolute bottom-md-30 right-md-30">
                                    <img src={require("../../assets/img/260x220/img1.png")} className="img-fluid attachment-shop_catalog size-shop_catalog wp-post-image" alt="image-description"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-5 mb-lg-0 position-relative">
                        <div className="bg-tangerine-light height-md-300">
                            <div className="p-5 pl-lg-6 pr-lg-5 pt-lg-5 pb-lg-5">
                                <div className="mb-3 mb-lg-0">
                                    <h2 className="font-size-26 mt-lg-1 text-lh-md">
                                        <span className="hero__title-line-1 font-weight-bold d-block">New Books</span>
                                        <span className="hero__title-line-2 font-weight-normal d-block">Available</span>
                                    </h2>
                                    <a className="h6 stretched-link font-weight-medium text-dark" href="../shop/v2.html">Shop Now</a>
                                </div>
                                <div className="d-flex d-md-block justify-content-end position-md-absolute right-md-30 bottom-md-30">
                                    <img src={require("../../assets/img/150x169/img1.png")} className="img-fluid attachment-shop_catalog size-shop_catalog wp-post-image" alt="image-description"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="position-relative">
                        <div className="bg-chili-light height-md-300">
                            <div className="p-5 pl-lg-6 pr-lg-5 pt-lg-5 pb-lg-5">
                                <div className="mb-4 mb-lg-0">
                                    <h2 className="font-size-26 mt-lg-1 text-lh-md">
                                        <span className="hero__title-line-1 font-weight-bold d-block">Monthly Selected </span>
                                        <span className="hero__title-line-2 font-weight-normal d-block">Books</span>
                                    </h2>
                                    <a className="h6 stretched-link font-weight-medium text-dark" href="../shop/v2.html">Shop Now</a>
                                </div>
                                <div className="d-flex d-md-block justify-content-end position-md-absolute bottom-md-30 right-md-30">
                                    <img src={require("../../assets/img/200x162/img1.png")} className="img-fluid attachment-shop_catalog size-shop_catalog wp-post-image" alt="image-description"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    );
  }
}
