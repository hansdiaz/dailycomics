const mongoose = require("mongoose");

const MysteryBoxOrderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  order_date: {
    type: Date,
    default: Date.now,
  },
  subscription: {
    type: String,
    required: true,
  },
});

module.exports = Order = mongoose.model("order", OrderSchema);
