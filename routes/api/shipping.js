const express = require("express");
const ShippingRouter = express.Router();
const cors = require("cors");

const ShippingController = require("../../controller/shippingController");

ShippingRouter.get("/usershippings", cors({ origin: true }), (req, res) => {
  ShippingController.getAllShipping(req, res);
});

ShippingRouter.get("/usershipping/:id", cors({ origin: true }), (req, res) => {
  ShippingController.getShipping(req, res);
});

ShippingRouter.post("/usershippingsave", cors({ origin: true }), (req, res) => {
  ShippingController.shippingSave(req, res);
});

ShippingRouter.put("/usershippingupdate", cors({ origin: true }), (req, res) => {
  ShippingController.shippingUpdate(req, res);
});

ShippingRouter.delete("/deleteshippingdetails/:id", cors({ origin: true }), (req, res) => {
  ShippingController.deleteShipping(req, res);
});

module.exports = ShippingRouter;
