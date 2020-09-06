const express = require("express");
const cors = require("cors");
const orderRouter = express.Router();
const orderController = require("../../controller/orderController");

orderRouter.get("/allorders", cors({ origin: true }), (req, res) => {
  orderController.getAllOrders(req, res);
});

orderRouter.get("/order/:id", cors({ origin: true }), (req, res) => {
  orderController.getOrder(req, res);
});

orderRouter.post("/createorder", cors({ origin: true }), (req, res) => {
  orderController.createOrder(req, res);
});

orderRouter.delete("/deleteorder/:id", cors({ origin: true }), (req, res) => {
  orderController.deleteOrder(req, res);
});

module.exports = orderRouter;
