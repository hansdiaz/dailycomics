const express = require("express");
const cors = require("cors");
const comicRouter = express.Router();
const comicController = require("../../controller/comicController");

//@route GET api/comic
//@desc comic book info single
comicRouter.get("/allcomics", cors({ origin: true }), (req, res) => {
  comicController.getAllComics(req, res);
});

comicRouter.get("/comic/:id", cors({ origin: true }), (req, res) => {
  comicController.getComicById(req, res);
});

comicRouter.post("/comic/", cors({ origin: true }), (req, res) => {
  comicController.getComicByName(req, res);
});

comicRouter.post("/comicsave", cors({ origin: true }), (req, res) => {
  comicController.comicSave(req, res);
});

comicRouter.put("/comicupdate", cors({ origin: true }), (req, res) => {
  comicController.comicUpdate(req, res);
});

comicRouter.delete("/deletecomic/:id", cors({ origin: true }), (req, res) => {
  comicController.deleteComic(req, res);
});

module.exports = comicRouter;
