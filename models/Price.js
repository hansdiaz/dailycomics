const mongoose = require("mongoose");

const PriceSchema = new mongoose.Schema({
  comicissue_id: {
    type: String,
    required: true,
    unique: true,
  },

  hb_price: {
    type: Number,
    required: true,
  },
  pb_price: {
    type: Number,
    required: true,
  },
});

module.exports = Price = mongoose.model("price", PriceSchema);
