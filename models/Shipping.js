const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const ShippingSchema = Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  postalcode: {
    type: String,
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
});

module.exports = Shipping = mongoose.model("shipping", ShippingSchema);
