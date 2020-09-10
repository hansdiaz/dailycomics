const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  order_date: {
    type: Date,
    default: Date.now,
  },

  total_items: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  postalcode: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  phonenumber: {
    type: Number,
  },
  order_item_status: {
    //purchased item delivery status, added by constant at saving from controller nmethod
    type: String,
    required: true,
  },
  quantity_array: [
    {
      type: String,
      required: true,
    },
  ],

  purchase_array: [
    {
      type: String,
      required: true,
    },
  ],

  item_array: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = Order = mongoose.model("order", OrderSchema);
