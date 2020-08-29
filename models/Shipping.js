const mongoose = require("mongoose");

const ShippingSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  shipping_info: {
    address: {
      type: String,
      required: true,
    },
    postalcode: {
      type: Number,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number,
    },
  },
});

module.exports = Shipping = mongoose.model("shipping", shippingSchema);
