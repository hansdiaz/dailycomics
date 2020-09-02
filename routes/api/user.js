const express = require("express");
const userRouter = express.Router();

const userController = require("../../controller/userController");

//@route GET api/users
//@desc temprary route for user

userRouter.post("/createuser", (req, res) => {
  userController.userRegistration(req, res);
});

userRouter.post("/loginuser", (req, res) => {
  userController.userLogin(req, res);
});

userRouter.post("/googleuserlogin", (req, res) => {
  userController.googleUserLogin(req, res);
});

module.exports = userRouter;
