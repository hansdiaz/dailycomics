const mongoose = require("mongoose");

const WishListSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  comicissue_id: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = WishList = mongoose.model("wishlist", WishListSchema);
