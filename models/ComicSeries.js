const mongoose = require("mongoose");

const ComicSeriesSchema = new mongoose.Schema({
  seriesname: {
    type: String,
    required: true,
    unique: true,
  },
  author_id: [
    {
      type: ObjectId,
      ref: "author",
    },
  ],
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
