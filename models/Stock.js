const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  comicissue_id: {
    type: String,
    required: true,
    unique: true,
  },
  hb_stock: {
    type: Number,
    required: true,
  },
  pb_stock: {
    type: Number,
    required: true,
  },
});

module.exports = Stock = mongoose.model("stock", StockSchema);
