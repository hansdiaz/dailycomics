import React, { Component } from "react";

export default class ServiceBanner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const element = (<div>Text from Element</div>)
    return (
     
        
          <div className="site-features border-bottom space-1d625">
            <div className="container">
              <ul className="list-unstyled my-0 list-features d-flex align-items-center justify-content-between overflow-auto">
                <li className="list-feature flex-shrink-0 flex-shrink-xl-1">
                  <div className="media d-block d-lg-flex text-center text-lg-left pr-5 pr-xl-0">
                    <div className="feature__icon font-size-14 text-primary text-lh-xs mb-md-3 mb-lg-0">
                      <i className="glyph-icon flaticon-delivery"></i>
                    </div>
                    <div className="media-body ml-4">
                      <h4 className="feature__title font-size-3 text-dark">
                        Free Delivery
                      </h4>
                      <p className="feature__subtitle m-0 text-dark">
                        Orders over $100
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className="separator border-xl-left h-fixed-80"
                  aria-hidden="true"
                  role="presentation"
                ></li>
                <li className="list-feature flex-shrink-0 flex-shrink-xl-1">
                  <div className="media d-block d-lg-flex text-center text-lg-left pr-5 pr-xl-0">
                    <div className="feature__icon font-size-14 text-primary text-lh-xs mb-md-3 mb-lg-0">
                      <i className="glyph-icon flaticon-credit"></i>
                    </div>
                    <div className="media-body ml-4">
                      <h4 className="feature__title font-size-3 text-dark">
                        Secure Payment
                      </h4>
                      <p className="feature__subtitle m-0 text-dark">
                        100% Secure Payment
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className="separator border-xl-left h-fixed-80"
                  aria-hidden="true"
                  role="presentation"
                ></li>
                <li className="list-feature flex-shrink-0 flex-shrink-xl-1">
                  <div className="media d-block d-lg-flex text-center text-lg-left pr-5 pr-xl-0">
                    <div className="feature__icon font-size-14 text-primary text-lh-xs mb-md-3 mb-lg-0">
                      <i className="glyph-icon flaticon-warranty"></i>
                    </div>
                    <div className="media-body ml-4">
                      <h4 className="feature__title font-size-3 text-dark">
                        Money Back Guarantee
                      </h4>
                      <p className="feature__subtitle m-0 text-dark">
                        Within 30 Days
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className="separator border-xl-left h-fixed-80"
                  aria-hidden="true"
                  role="presentation"
                ></li>
                <li className="list-feature flex-shrink-0 flex-shrink-xl-1">
                  <div className="media d-block d-lg-flex text-center text-lg-left pr-5 pr-xl-0">
                    <div className="feature__icon font-size-14 text-primary text-lh-xs mb-md-3 mb-lg-0">
                      <i className="glyph-icon flaticon-help"></i>
                    </div>
                    <div className="media-body ml-4">
                      <h4 className="feature__title font-size-3 text-dark">
                        24/7 Support
                      </h4>
                      <p className="feature__subtitle m-0 text-dark">
                        Within 1 Business Day
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        
    );
  }
}
