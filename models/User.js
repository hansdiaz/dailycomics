const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  credentials: {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },

  deliveryinfo: {
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    postalcode: {
      type: Number,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    phonenumber: {
      type: Number,
    },
  },

  paymenttoken: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
