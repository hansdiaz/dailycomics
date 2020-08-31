//const { body, validationResult } = require("express-validator");
var gravatar = require("gravatar");
const { genSalt, hash } = require("bcryptjs");
var validator = require("email-validator");

const User = require("../models/User");

const userFunction = async (req, res) => {
  try {
    const { email, password, confirmpassword } = req.body;

    if (email == "" || password == "" || confirmpassword == "") {
      return res.status(400).send("Not all mandatory values have been set!");
    }
    if (validator.validate(email) == false) {
      return res.status(400).send("Use a valid email");
    }
    if (password.length < 8) {
      return res
        .status(400)
        .send("Password must have atleast eight characters");
    }

    let user = await User.findOne({ email }); //check if user already exists

    if (user) {
      res.status(400).send("User Already Exists"); //sending the error by json if the user exist hence closing the response
    }

    if (password == confirmpassword) {
      var avatar = gravatar.url(email, { s: "100", r: "pg", d: "mm" }, true);

      user = new User({
        //create user object to set data
        email,
        password,
        avatar,
      });

      const salt = await genSalt(10);
      user.password = await hash(password, salt);
      await user.save();
      res.status(200).send("User Registered");
    } else {
      res.status(400).send("Passwords not matching");
    }
  } catch (error) {
    console.log("Error caught at ", error);
    res.status(500).send("Server Error");
  }
};

module.exports = { userFunction };
