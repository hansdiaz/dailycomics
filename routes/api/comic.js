const express = require("express");
const comicRouter = express.Router();
const comicController = require("../../controller/comicController");

//@route GET api/comic
//@desc comic book info single
comicRouter.get("/comic", comicController.comicFunction);

module.exports = comicRouter;
