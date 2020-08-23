const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  comicissue_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comicissue",
    required: true,
  },
  singlestock: {
    hb_stock: {
      type: Number,
      required: true,
    },
    pb_stock: {
      type: Number,
      required: true,
    },
  },
});

module.exports = Stock = mongoose.model("stock", StockSchema);
