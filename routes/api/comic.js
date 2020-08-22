const express = require("express");
const router = express.Router();

//@route GET api/comic
//@desc temprary route for author and their collections of items
router.get("/", (req, res) => res.send("Comic Route"));

module.exports = router;
