const express = require("express");
const userRouter = express.Router();

const userController = require("../../controller/userController");

//@route GET api/users
//@desc temprary route for user

userRouter.post(
  "/user",
  userController.userValidationRules(),
  userController.validate,
  (req, res) => {
    {userController.userFunction(req, res);}
  }
);

module.exports = userRouter;
