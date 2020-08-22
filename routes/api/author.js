const express = require("express");
const authorRouter = express.Router();
const authController = require("../../controller/authorController");

//@route GET api/author
//@desc temprary route for author and their collections of items
authorRouter.get("/author", authController.authorFunction);

module.exports = authorRouter;
