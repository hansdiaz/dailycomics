const mongoose = require("mongoose");

const ComicIssueSchema = new mongoose.Schema({
  seriesname: {
    type: String,
    required: true,
  },
  issuenumber: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageref: {
    type: String,
    required: true,
  },
  publishdate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ComicIssue = mongoose.model("comicissue", ComicIssueSchema);
