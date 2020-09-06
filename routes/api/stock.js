const express = require("express");
const cors = require("cors");
const comicRouter = express.Router();
const comicController = require("../../controller/comicController");

comicRouter.get("/allstocks", cors({ origin: true }), (req, res) => {
  comicController.getAllStock(req, res);
});

comicRouter.get("/stock/:id", cors({ origin: true }), (req, res) => {
  comicController.getStockById(req, res);
});

comicRouter.post("/stocksave", cors({ origin: true }), (req, res) => {
  comicController.stockSave(req, res);
});

comicRouter.put("/stockupdate", cors({ origin: true }), (req, res) => {
  comicController.stockUpdate(req, res);
});

comicRouter.delete("/deletestock/:id", cors({ origin: true }), (req, res) => {
  comicController.deleteStock(req, res);
});

module.exports = comicRouter;
