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
    dod: {
      //designated for onetime and subscription service Date of Delivery
      type: Date,
      required: true,
    },
    order_item_status: {
      //purchased item delivery status
      type: String,
      required: true,
    },
  },
});

module.exports = Order = mongoose.model("orderitem", OrderItemSchema);
