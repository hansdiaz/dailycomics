const express = require("express");
const cors = require("cors");
const priceRouter = express.Router();
const priceController = require("../../controller/priceController");

priceRouter.get("/allprices", cors({ origin: true }), (req, res) => {
  priceController.getAllPrices(req, res);
});

priceRouter.get("/prices/:id", cors({ origin: true }), (req, res) => {
  priceController.getPrice(req, res);
});

priceRouter.post("/pricesave", cors({ origin: true }), (req, res) => {
  priceController.priceSave(req, res);
});

priceRouter.put("/priceupdate", cors({ origin: true }), (req, res) => {
  priceController.priceUpdate(req, res);
});

priceRouter.delete("/deleteprice/:id", cors({ origin: true }), (req, res) => {
  priceController.deletePrice(req, res);
});

module.exports = priceRouter;
