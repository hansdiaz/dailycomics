const mongoose = require("mongoose");

const MysteryBoxOrderSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  order_date: {
    type: Date,
    default: Date.now,
  },
  subscription_status: {
    type: String,
    required: true,
  },
});

module.exports = Order = mongoose.model("order", OrderSchema);
