const express = require('express');
const userRouter = express.Router();
const userController = require('../../controller/userController')

//@route GET api/users
//@desc temprary route for user
userRouter.get('/user', userController.userFunction);

module.exports = userRouter;