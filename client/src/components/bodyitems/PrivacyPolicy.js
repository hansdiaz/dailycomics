import React, { Component } from "react";

export default class PrivacyPolicy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const element = (<div>Text from Element</div>)
    return (
      <div>
        <div className="container">
          <div className="space-bottom-1 space-bottom-lg-2 space-bottom-xl-3">
            <div className="pb-lg-4">
              <div className="py-4 py-lg-5 py-xl-8">
                <h6 className="font-weight-medium font-size-7 font-size-xs-25 text-center">
                  About Us
                </h6>
              </div>
              <div className="mb-5 mb-lg-8">
                <h6 className="font-weight-medium font-size-4 mb-4 pb-1">
                  Privacy Policy
                </h6>
                <ol className="list-unstyled mb-0">
                  <li className="font-size-2 mb-3 mb-lg-1">
                    Daily Comics is a fictional company that is not associated
                    with any registered physical company or organization as if
                    to this date. Simply it is an application that Shows the
                    functionality of MERN stack based programming.
                    <br />
                  </li>
                  <li className="font-size-2 mb-3 mb-lg-1">
                    The Application is integreted with Google Login API, so that
                    when every it is clicked, we will only be able to get your
                    email data, and it will never be used for any other purpose
                    than registering and prrocessing of tthe application.
                    <br />
                  </li>
                  <li className="font-size-2 mb-3 mb-lg-1">
                    Data it will be saved in a protected MongoDb Atlas server,
                    Located in an Amazon AWS.
                  </li>
                  <li className="font-size-2 mb-3 mb-lg-1">
                    Date of Publish : 10.09.2020
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
