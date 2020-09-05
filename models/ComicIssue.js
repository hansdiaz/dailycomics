const mongoose = require("mongoose");

const ComicIssueSchema = new mongoose.Schema({
  seriesid: {
    type: String,
    required: true,
  },
  issuenumber: {
    type: Number,
    required: true,
  },
  publishdate: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  },
  imageref: {
    type: String,
    required: true,
  },
});

module.exports = ComicIssue = mongoose.model("comicissue", ComicIssueSchema);
