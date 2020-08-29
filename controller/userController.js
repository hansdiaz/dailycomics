const { body, validationResult } = require("express-validator");
var gravatar = require("gravatar");
const { genSalt, hash } = require("bcryptjs");

const User = require("../models/User");

const userValidationRules = () => {
  return [
    // username must be an email
    body("email", "Email not valid").isEmail(),
    // password must be at least 5 chars long
    body("password", "Password must meet a minimum of 8 characters").isLength({
      min: 8,
    }),
    body("confirmpassword").isLength({ min: 8 }),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

const userFunction = async (req, res) => {
  try {
    const { email, password, confirmpassword } = req.body;

    let user = await User.findOne({ email }); //check if user already exists

    if (user) {
      res.status(400).json({ errors: [{ msg: "User Already Exists" }] }); //sending the error by json if the user exist hence closing the response
    }

    if (password.toString !== confirmpassword.toString) {
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
      res.status(400).json({ errors: [{ msg: "Passwords not matching" }] });
    }
  } catch (error) {
    console.log("Error caught at ", error);
    res.status(500).send("Server Error");
  }
};

module.exports = { userFunction, userValidationRules, validate };
