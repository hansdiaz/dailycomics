const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  order_date: {
    type: Date,
    default: Date.now,
  },
  order_item_id: [
    {
      type: ObjectId,
      ref: "orderitem",
    },
  ],
  total: {
    type: Number,
    required: true,
  },
});

module.exports = Order = mongoose.model("order", OrderSchema);
