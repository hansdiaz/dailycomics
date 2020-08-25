const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageref: {
    profileref: {
      type: String,
      required: true,
    },
    coverref: {
      type: String,
      required: true,
    },
  },
  sales: {
    type: Number,
    required: true,
  },
});

module.exports = Author = mongoose.model("author", AuthorSchema);
