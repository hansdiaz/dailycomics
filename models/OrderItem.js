const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  comicissue_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comicissue",
    required: true,
  },
  purchase_type: {
    type: String,
    required: true,
  },
});

module.exports = Order = mongoose.model("order", OrderSchema);
