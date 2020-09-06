const express = require("express");
const cors = require("cors");
const stockRouter = express.Router();
const stockController = require("../../controller/stockController");

stockRouter.get("/allstocks", cors({ origin: true }), (req, res) => {
  stockController.getAllStock(req, res);
});

stockRouter.get("/stock/:id", cors({ origin: true }), (req, res) => {
  stockController.getStock(req, res);
});

stockRouter.post("/stocksave", cors({ origin: true }), (req, res) => {
  stockController.stockSave(req, res);
});

stockRouter.put("/stockupdate", cors({ origin: true }), (req, res) => {
  stockController.stockUpdate(req, res);
});

stockRouter.delete("/deletestock/:id", cors({ origin: true }), (req, res) => {
  stockController.deleteStock(req, res);
});

module.exports = stockRouter;
