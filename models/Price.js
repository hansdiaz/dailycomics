const mongoose = require("mongoose");

const PriceSchema = new mongoose.Schema({
  comicissue_id: {
    type: String,
    required: true,
  },

  eb_price: {
    type: Number,
    required: true,
  },
  hb_price: {
    type: Number,
    required: true,
  },
  pb_price: {
    type: Number,
    required: true,
  },

  daily_price: {
    type: Number,
    required: true,
  },
  weekly_price: {
    type: Number,
    required: true,
  },
  monthly_price: {
    type: Number,
    required: true,
  },
});

module.exports = Price = mongoose.model("price", PriceSchema);
