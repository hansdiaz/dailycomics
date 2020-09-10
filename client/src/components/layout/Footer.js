import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const element = (<div>Text from Element</div>)
    return (
      <footer className="site-footer_v6">
        <div className="space-1 bg-gray-200">
          <div className="container">
            <div className="d-lg-flex text-center text-lg-left justify-content-between align-items-center">
              <div className="mb-3 mb-lg-0 font-size-2">
                ©2020 Daily Comics. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
