//const { body, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const validator = require("email-validator");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../models/User");

const userRegistration = async (req, res) => {
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

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json(token);
        }
      );

      //res.status(200).send("User Registered");
    } else {
      res.status(400).send("Passwords not matching");
    }
  } catch (error) {
    console.log("Error caught at ", error);
    res.status(500).send("Server Error");
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email == "" || password == "") {
      return res.status(400).send("Not all mandatory values have been set!");
    }
    if (validator.validate(email) == false) {
      return res.status(400).send("Invalid Login email");
    }
    if (password.length < 8) {
      return res.status(400).send("Invalid Login password length");
    }

    let user = await User.findOne({ email }); //check if user already exists

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        console.log("User Logged in successfully");
        res.status(200).send("Login Successful");
      } else {
        return res.status(400).send("Invalid Login password");
      }
    } else {
      res.status(400).send("Invalid Login Credentails, please register");
    }
  } catch (error) {
    console.log("Error caught at ", error);
    res.status(500).send("Server Error");
  }
};

const googleUserLogin = async (req, res) => {
  //code comes here after setting heroku for google developer console auth screen confirmation
};
module.exports = { userRegistration, userLogin, googleUserLogin };
