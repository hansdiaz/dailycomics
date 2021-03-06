const mongoose = require("mongoose");

const ComicSeriesSchema = new mongoose.Schema({
  seriesname: {
    type: String,
    required: true,
    unique: true,
  },
  authorname: {
    type: String,
    require: true,
  },

  category: {
    type: String,
    required: true,
  },
  universe: {
    type: String,
    required: true,
  },
  issuespublished: {
    type: Number,
    required: true,
  },
  publishdate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ComicSeries = mongoose.model("comicseries", ComicSeriesSchema);
