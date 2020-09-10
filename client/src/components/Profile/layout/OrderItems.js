import React, { Component } from "react";
import { Link } from "react-router-dom";

class OrderItems extends Component {
  render() {
    return (
      <tr class="border" style={{}}>
        <th class="pl-3 pl-md-5 font-weight-normal align-middle py-6">
          Order Id {this.props.data.id}
        </th>
        <td class="align-middle py-5">{this.props.data.order_date}</td>
        <td class="align-middle py-5">{this.props.data.order_item_status}</td>
        <td class="align-middle py-5">
          <span class="text-primary">${this.props.data.total}</span> for{" "}
          {this.props.data.total_items}
          items
        </td>
      </tr>
    );
  }
}

export default OrderItems;
