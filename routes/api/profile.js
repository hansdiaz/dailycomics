const express = require("express");
const profileRouter = express.Router();
const profileController = require("../../controller/profileController");

//@route GET api/profile
//@desc temprary route for user's favourite collections
profileRouter.get("/profile", profileController.profileFunction);

module.exports = profileRouter;
