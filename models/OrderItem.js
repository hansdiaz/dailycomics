const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
  comicissue_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comicissue",
    required: true,
  },
  purchase_type: {
    type: String,
    required: true,
  },
  order_item_status: {
    type: String,
    required: true,
  },
});

module.exports = Order = mongoose.model("orderitem", OrderItemSchema);
