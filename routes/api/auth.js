const express = require("express");
const authRouter = express.Router();
const authController = require("../../controller/authController");
const auth = require("../../middleware/auth");

//@route GET api/auth
//@desc route for generating JWT
authRouter.get("/auth", auth, (res, req) => { //auth function must be set in the get parameter to refer the token and then pass
  authController.authFunction(res, req);
});

module.exports = authRouter;
