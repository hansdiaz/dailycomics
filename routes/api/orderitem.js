const express = require("express");
const cors = require("cors");
const orderitemRouter = express.Router();
const orderItemController = require("../../controller/orderItemController");

orderitemRouter.get("/allitems", cors({ origin: true }), (req, res) => {
  orderItemController.getAllItems(req, res);
});

orderitemRouter.get("/item/:id", cors({ origin: true }), (req, res) => {
  orderItemController.getItems(req, res);
});

orderitemRouter.post("/saveitem", cors({ origin: true }), (req, res) => {
  orderItemController.saveItem(req, res);
});

orderitemRouter.put("/updateitem", cors({ origin: true }), (req, res) => {
  orderItemController.updateItem(req, res);
});

orderitemRouter.delete(
  "/deleteitem/:id",
  cors({ origin: true }),
  (req, res) => {
    orderItemController.deleteItem(req, res);
  }
);

module.exports = orderitemRouter;
