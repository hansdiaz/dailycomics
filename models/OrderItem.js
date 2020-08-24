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
  delivery: {
    next_dod: {
      //designated for onetime and subscription service Date of Delivery
      type: Date,
      required: true,
    },
    next_dod: {
      //designated for subscription services would point the next up date
      type: Date,
    },
    order_item_status: {
      //purchased item delivery status
      type: String,
      required: true,
    },
    next_order_item_status: {
      //next up item delivery status
      type: String,
      required: true,
    },
  },
});

module.exports = Order = mongoose.model("orderitem", OrderItemSchema);
