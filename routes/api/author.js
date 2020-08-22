const express = require("express");
const router = express.Router();

//@route GET api/author
//@desc temprary route for author and their collections of items
router.get("/", (req, res) => res.send("Author Route"));

module.exports = router;
