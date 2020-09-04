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

userRouter.put("/updateuser",cors({ origin: true }), (req, res) => {
  userController.userUpdate(req, res);
});

userRouter.delete("/deleteuser",cors({ origin: true }), (req, res) => {
  userController.userDeletion(req, res);
});

userRouter.post("/googleuserlogin",cors({ origin: true }), (req, res) => {
  userController.googleUserLogin(req, res);
});

module.exports = userRouter;
