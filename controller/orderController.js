const Comic = require("../models/ComicIssue");
const Order = require("../models/Order");

//Saving
const createOrder = async (req, res) => {
  try {
    console.log("API check point inside create order");
    let user_id = req.body.user_id;
    let purchase_type = req.body.purchase_type;
    let item_array = req.body.item_array;
    let quantity_array = req.body.quantity_array;
    let purchase_array = req.body.purchase_array;
    let total_items = req.body.total_items;
    let total = req.body.total;
    let name = req.body.name;
    let address = req.body.address;
    let postalcode = req.body.postalcode;
    let city = req.body.city;
    let country = req.body.country;
    let phonenumber = req.body.phonenumber;

    let order_item_status = "processing";

    if (
      purchase_type == false ||
      user_id == false ||
      item_array == false ||
      quantity_array == false ||
      purchase_array == false ||
      total_items == false ||
      total == false ||
      name == false ||
      address == false ||
      postalcode == false ||
      city == false ||
      country == false ||
      phonenumber == false
    ) {
      return res.status(400).send("Not all mandatory values have been set!");
    }

    OrderObject = new Order({
      //create  object to set data
      purchase_type,
      user_id,
      item_array,
      quantity_array,
      purchase_array,
      total_items,
      total,
      name,
      address,
      postalcode,
      city,
      country,
      phonenumber,
      order_item_status,
    });

    await OrderObject.save();
    res.status(200).send(OrderObject._id);
  } catch (error) {
    console.log("Error caught at ", error);
    res.status(500).send("Server Error");
  }
};

//get details of all the orders
const getAllOrders = async (req, res) => {
  const orderData = Order.find(
    {},
    {
      purchase_type: 1,
      user_id: 1,
      item_array: 1,
      quantity_array: 1,
      purchase_array: 1,
      total_items: 1,
      total: 1,
      name: 1,
      address: 1,
      postalcode: 1,
      city: 1,
      country: 1,
      phonenumber: 1,
      order_item_status: 1,
    }
  )
    .populate("orders")
    .then((orderData) => {
      if (orderData) {
        return res.status(200).json(orderData);
      } else {
        return res.status(404).json("There are no item data");
      }
    })
    .catch((err) => res.status(404).json("failed to retrieve item data"));
};

//get Single order details
const getOrder = async (req, res) => {
  let order_id = req.params.id; //not the id but the comic issue id since its uniquw, it is set as unique from mongoose

  const orderData = Order.findOne(
    { _id: order_id },
    {
      purchase_type: 1,
      user_id: 1,
      item_array: 1,
      quantity_array: 1,
      purchase_array: 1,
      total_items: 1,
      total: 1,
      name: 1,
      address: 1,
      postalcode: 1,
      city: 1,
      country: 1,
      phonenumber: 1,
      order_item_status: 1,
    }
  )
    .populate("orders")
    .then((orderData) => {
      if (orderData) {
        return res.status(200).json(orderData);
      } else {
        return res.status(404).json("There are no orders with this order id");
      }
    })
    .catch((err) => res.status(404).json("Failed to get order data"));
};

//Delete comic issue
const deleteOrder = async (req, res) => {
  const orderDeletion = Order.findOneAndDelete({ _id: req.params.id })
    .then((orderDeletion) => {
      if (orderDeletion) {
        return res.status(200).json({ success: true });
      } else {
        return res
          .status(404)
          .json("There are no orders to delete with this id");
      }
    })
    .catch((err) => res.status(404).json("failed to delete order"));
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrder,
  deleteOrder,
};
