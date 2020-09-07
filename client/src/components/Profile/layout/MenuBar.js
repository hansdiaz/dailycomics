import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import AccountDetails from "../layout/AccountDetails";

export default class MenuBar extends Component {
    render() {
        return (
            <div className="container">
                <div className="border-bottom py-3 py-md-0">
                    <div className="d-md-flex position-relative">
                        <div className="site-navigation mr-auto d-none d-xl-block">
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link
                                        to="/account_details"
                                        className="nav-link link-black-100 mx-2 px-0 py-3 font-weight-medium active border-bottom border-info border-width-2"
                                    >
                                        Account
                                </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/orders"
                                        className="nav-link link-black-100 mx-2 px-0 py-3 font-weight-medium active border-bottom border-info border-width-2"
                                    >
                                        Orders
                                </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/addresses"
                                        className="nav-link link-black-100 mx-2 px-0 py-3 font-weight-medium active border-bottom border-info border-width-2"
                                    >
                                        Address
                                </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="d-none d-md-block ml-md-auto secondary-navigation ">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a
                                        href="#"
                                        className="nav-link link-black-100 mx-2 px-0 py-3 font-weight-medium"
                                    >
                                        LogOut
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
