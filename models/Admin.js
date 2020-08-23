const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
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
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Admin = mongoose.model("admin", AdminSchema);