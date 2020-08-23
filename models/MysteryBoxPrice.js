const mongoose = require("mongoose");

const MysteryBoxPriceSchema = new mongoose.Schema({
  comicissue_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comicissue",
    required: true,
  },
  subsrciption_price: {
    biweekly_price: {
      type: Number,
      required: true,
    },
    monthly_price: {
      type: Number,
      required: true,
    },
  },
});

module.exports = MysteryBoxPrice = mongoose.model("mysteryboxprice", MysteryBoxPriceSchema);
