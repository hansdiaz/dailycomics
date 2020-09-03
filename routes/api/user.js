const express = require("express");
const userRouter = express.Router();
const cors = require("cors");

const userController = require("../../controller/userController");


userRouter.post("/loginuser",cors({ origin: true }), (req, res) => {
  userController.userLogin(req, res);
});

userRouter.post("/createuser",cors({ origin: true }), (req, res) => {
  userController.userRegistration(req, res);
});



userRouter.post("/googleuserlogin",cors({ origin: true }), (req, res) => {
  userController.googleUserLogin(req, res);
});

module.exports = userRouter;
