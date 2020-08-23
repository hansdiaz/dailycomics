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
  delivery: {
    next_dod: {
      //designated for onetime and subscription service Date of Delivery
      type: Date,
      required: true,
    },
    loop_dod: {
      //designated for subscription services would point the next up date
      type: Date,
    },
  },
});

module.exports = Order = mongoose.model("orderitem", OrderItemSchema);
