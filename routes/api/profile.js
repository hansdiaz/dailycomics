const express = require("express");
const router = express.Router();

//@route GET api/profile
//@desc temprary route for user's favourite collections
router.get("/", (req, res) => res.send("Profile Route"));

module.exports = router;
