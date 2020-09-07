const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
  comicissue_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  purchase_type: {
    type: String,
    required: true,
  },
  order_item_status: {
    //purchased item delivery status
    type: String,
    required: true,
  },
});

module.exports = Order = mongoose.model("orderitem", OrderItemSchema);
