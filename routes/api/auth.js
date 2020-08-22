const express = require("express");
const authRouter = express.Router();
const authController = require("../../controller/authController");

//@route GET api/auth
//@desc route for generating JWT
authRouter.get("/auth", authController.authFunction);

module.exports = authRouter;
