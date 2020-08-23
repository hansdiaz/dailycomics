const mongoose = require("mongoose");

const WishListSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  comicissue_id: [
    {
      type: ObjectId,
      ref: "comicissue",
    },
  ],
});

module.exports = WishList = mongoose.model("wishlist", WishListSchema);
