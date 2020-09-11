import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import OrderItems from "../layout/OrderItems";

export default class Orders extends Component {
  state = {
    allOrders: [],
  };

  render() {
    return (
      <div class="container my-lg-1 pt-lg-8 py-lg-8 pl-lg-9 pl-md-5">
        {/* <div class="font-weight-medium font-size-22 mb-4 pb-xl-1">
          My Orders
                      </div> */}
        <table class="table">
          <thead>
            <tr class="border">
              <th
                scope="col"
                class="py-3 border-bottom-0 font-weight-medium pl-3 pl-lg-5"
              >
                Orders
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.allOrders.map((order) => (
              <div key={order.id}>
                <OrderItems
                  key={order.id}
                  data={order}
                  onNavigate={() => this.navigateToOrder(order.id)}
                />
              </div>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  async componentDidMount() {
    let orderData = await axios.get(
      "http://dailycomics.herokuapp.com/allorders"
    );
    console.log(orderData);

    let state = [];
    if (orderData) {
      state = orderData.data.map((order) => {
        return {
          id: order._id,
          order_date: order.order_date,
          total_items: order.total_items,
          total: order.total,
          order_item_status: order.order_item_status,
        };
      });
    }
    console.log(state);
    console.log(this.state.allOrders);
    this.setState({ allOrders: state });
  }

  navigateToOrder(orderid) {
    /*localStorage.setItem("watchingOrder", orderid);
    this.props.history.push("/orders/order");*/
  }
}
