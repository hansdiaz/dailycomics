import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default class Addresses extends Component {
    render() {
        return (
            <div class="container my-lg-1 pt-lg-8 py-lg-8 pl-lg-9 pl-md-5">
     {/* <div class="font-weight-medium font-size-22 mb-4 pb-xl-1">
          My Addresses
                      </div> */}
                <div class="row row-cols-1 row-cols-md-2">
                    <div class="col">
                        <div class="mb-6 mb-md-0">
                            <h6 class="font-weight-medium font-size-22 mb-3">
                                Billing Address
                            </h6>
                            <address class="d-flex flex-column mb-4">
                                <span class="text-gray-600 font-size-2">Ali Tufan</span>
                                <span class="text-gray-600 font-size-2">Bedford St,</span>
                                <span class="text-gray-600 font-size-2">Covent Garden,</span>
                                <span class="text-gray-600 font-size-2">London WC2E 9ED</span>
                                <span class="text-gray-600 font-size-2">United Kingdom</span>
                            </address>
                            <div class="d-flex">
                                <button type="submit"
                                    class="btn btn-dark width-150 rounded-0 btn-wide font-weight-medium">
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <h6 class="font-weight-medium font-size-22 mb-3">
                            Shipping Address
                        </h6>
                        <address class="d-flex flex-column mb-4">
                            <span class="text-gray-600 font-size-2">Ali Tufan</span>
                            <span class="text-gray-600 font-size-2">Bedford St,</span>
                            <span class="text-gray-600 font-size-2">Covent Garden,</span>
                            <span class="text-gray-600 font-size-2">London WC2E 9ED</span>
                            <span class="text-gray-600 font-size-2">United Kingdom</span>
                        </address>
                        <div class="d-flex">
                            <button type="submit"
                                class="btn btn-dark width-150 rounded-0 btn-wide font-weight-medium">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

