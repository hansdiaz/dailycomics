import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default class AccountDetails extends Component {
    render() {
        return (
            <div class="container my-lg-1 pt-lg-8 py-lg-8">
                <div class="pb-6 pb-lg-9">
                    <div class=" pl-md-5 pl-lg-9">
                        {/* <div class="font-weight-medium font-size-22 mb-4 pb-xl-1">
                            Edit Account
                      </div> */}
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="js-form-message">
                                    <label for="exampleFormControlInput1">First name *</label>
                                    <input type="text" class="form-control rounded-0 pl-3 placeholder-color-3"
                                        id="exampleFormControlInput1" name="name" aria-label="Jack Wayley" placeholder="Ali"
                                        required="" data-error-class="u-has-error" data-msg="Please enter your name."
                                        data-success-class="u-has-success" />
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="js-form-message">
                                    <label for="exampleFormControlInput2">Last name *</label>
                                    <input type="text" class="form-control rounded-0 pl-3 placeholder-color-3"
                                        id="exampleFormControlInput2" name="name" aria-label="Jack Wayley" placeholder="TUF.."
                                        required="" data-error-class="u-has-error" data-msg="Please enter your name."
                                        data-success-class="u-has-success" />
                                </div>
                            </div>
                            <div class="col-md-12 mb-4">
                                <div class="js-form-message">
                                    <label for="exampleFormControlInput3">Display name</label>
                                    <input type="text" class="form-control rounded-0" name="name" aria-label="Jack Wayley"
                                        id="exampleFormControlInput3" required="" data-error-class="u-has-error"
                                        data-msg="Please enter your name." data-success-class="u-has-success" />
                                </div>
                            </div>
                            <div class="col-md-12 mb-4 mb-md-0">
                                <div class="js-form-message">
                                    <label for="exampleFormControlInput4">Email address</label>
                                    <input type="email" class="form-control rounded-0" name="name" id="exampleFormControlInput4"
                                        aria-label="Jack Wayley" required="" data-error-class="u-has-error"
                                        data-msg="Please enter your name." data-success-class="u-has-success" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pl-md-5 pl-lg-9 space-bottom-2 space-bottom-lg-3">
                    <div class="font-weight-medium font-size-22 mb-4 pb-xl-1">
                        Password Change
                    </div>
                    <div class="row">
                        <div class="col-md-12 mb-4">
                            <div class="js-form-message">
                                <label for="exampleFormControlInput5">Current Password</label>
                                <input type="password" class="form-control rounded-0" name="name"
                                    id="exampleFormControlInput5" aria-label="Jack Wayley" required=""
                                    data-error-class="u-has-error" data-msg="Please enter your name."
                                    data-success-class="u-has-success" />
                            </div>
                        </div>
                        <div class="col-md-12 mb-4">
                            <div class="js-form-message">
                                <label for="exampleFormControlInput6">New Password</label>
                                <input type="password" class="form-control rounded-0" name="name"
                                    id="exampleFormControlInput6" aria-label="Jack Wayley" required=""
                                    data-error-class="u-has-error" data-msg="Please enter your name."
                                    data-success-class="u-has-success" />
                            </div>
                        </div>
                        <div class="col-md-12 mb-5">
                            <div class="js-form-message">
                                <label for="exampleFormControlInput7">Confirm new password</label>
                                <input type="password" class="form-control rounded-0" name="name"
                                    id="exampleFormControlInput7" aria-label="Jack Wayley" required=""
                                    data-error-class="u-has-error" data-msg="Please enter your name."
                                    data-success-class="u-has-success" />
                            </div>
                        </div>
                        <div class="ml-3">
                            <button type="submit"
                                class="btn btn-wide btn-dark text-white rounded-0 transition-3d-hover height-60 width-390">
                                Save Changes
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

