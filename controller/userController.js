const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const validator = require("email-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const dateFns = require("date-fns");
const moment = require("moment");

const User = require("../models/User");

//Registration
const userRegistration = async (req, res) => {
  res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
  res.header("Access-Control-Allow-Origin", "*");
  try {
    const { email, password, confirmpassword } = req.body;

    if (email == "" || password == "" || confirmpassword == "") {
      return res.status(400).send("Not all mandatory values have been set!");
    } else if (validator.validate(email) == false) {
      return res.status(400).send("Use a valid email");
    } else if (password.length < 8) {
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
          responseObject = { token: token, msg: "User Registered" };
          console.log("User Registered in successfully");
          res.json(responseObject);
        }
      );
    } else {
      res.status(400).send("Passwords not matching");
    }
  } catch (error) {
    console.log("Error caught at ", error);
    res.status(500).send("Server Error");
  }
};

//login
const userLogin = async (req, res) => {
  res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
  res.header("Access-Control-Allow-Origin", "*");
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (email == "" || password == "") {
      responseObject = { msg: "Not all mandatory values have been set!" };
      return res.status(400).send(responseObject);
    } else if (validator.validate(email) == false) {
      //return res.status(400).send("Invalid Login email");
      responseObject = { msg: "Invalid Login Credentails" };
      return res.status(400).send(responseObject);
    } else if (password.length < 8) {
      //return res.status(400).send("Invalid Login password length");
      responseObject = { msg: "Invalid Login Credentails" };
      return res.status(400).send(responseObject);
    }

    const user = await User.findOne({ email }); //check if user already exists

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        const payload = {
          user: {
            id: user.id,
          },
        };
        jwt.sign(
          payload,
          config.get("jwtSecret"),
          { expiresIn: 3600 },
          async (err, token) => {
            if (err) throw err;
            var timeOfExpire = new Date(Date.now() + 36000);
            console.log(timeOfExpire);
            responseObject = {
              id: user.id,
              token: token,
              msg: "Login Successful",
            };

            console.log("User Logged in successfully");
            res.json(responseObject);
          }
        );
      } else {
        //return res.status(400).send("Invalid Login password");
        responseObject = { msg: "Invalid Login Credentails" };
        return res.status(400).send(responseObject);
      }
    } else {
      //res.status(400).send("Invalid Login Credentails, please register");
      responseObject = { msg: "Invalid Login Credentails, please register" };
      return res.status(400).send(responseObject);
    }
  } catch (error) {
    console.log("Error caught at ", error);
    res.status(500).send("Server Error " + error);
  }
};

//GoogleLogin
const googleUserLogin = async (req, res) => {
  //code comes here after setting heroku for google developer console auth screen confirmation
  try {
    const email = req.body.email;

    if (email == false) {
      responseObject = { msg: "Not all mandatory values have been set!" };
      return res.status(400).send(responseObject);
    }

    const user = await User.findOne({ email }); //check if user already exists

    if (user == false) {
      var avatar = gravatar.url(email, { s: "100", r: "pg", d: "mm" }, true);

      user = new User({
        //create user object to set data
        email,
        avatar,
      });

      await user.save();

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        async (err, token) => {
          if (err) throw err;
          var timeOfExpire = new Date(Date.now() + 36000);
          console.log(timeOfExpire);
          responseObject = {
            id: user.id,
            token: token,
            msg: "Login Successful",
          };

          console.log("User Logged in successfully");
          res.json(responseObject);
        }
      );
    } else {
      if (isMatch) {
        const payload = {
          user: {
            id: user.id,
          },
        };
        jwt.sign(
          payload,
          config.get("jwtSecret"),
          { expiresIn: 3600 },
          async (err, token) => {
            if (err) throw err;
            var timeOfExpire = new Date(Date.now() + 36000);
            console.log(timeOfExpire);
            responseObject = {
              id: user.id,
              token: token,
              msg: "Login Successful",
            };

            console.log("User Logged in successfully");
            res.json(responseObject);
          }
        );
      }
    }
  } catch (error) {
    console.log("Error caught at ", error);
    res.status(500).send("Server Error " + error);
  }
};

//Update
const userUpdate = async (req, res) => {
  try {
    var errors = {};
    var userpassword = req.body.password;
    var id = req.body._id;
    const salt = await bcrypt.genSalt(10);
    var encryptedPassword = await bcrypt.hash(userpassword, salt);
    console.log(userpassword, id);
    const userUpdate = await User.findOneAndUpdate(
      { _id: id },
      { password: encryptedPassword }
    )
      .then((userUpdate) => {
        if (userUpdate) {
          return res.status(200).json({ updatesuccess: true });
        } else {
          errors = "There is no user to update";
          return res.status(404).json(errors);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ users: "There is no user profile to update" });
      });
  } catch (error) {
    console.log(error);
  }
};

//UserDelete
const userDeletion = async (req, res) => {
  const errors = {};

  const userDeletion = User.findOneAndDelete({ _id: req.params.id })
    .then((userDeletion) => {
      if (userDeletion) {
        return res.status(200).json({ success: true });
      } else {
        errors = "There is no user";
        return res.status(404).json(errors);
      }
    })
    .catch((err) =>
      res.status(404).json({ users: "There is no user profile" })
    );
};

//get All Users
const getAllUsers = async (req, res) => {
  const errors = {};

  const userProfiles = User.find({}, { email: 1, avatar: 1, date: 1 })
    .populate("users")
    .then((userProfiles) => {
      if (userProfiles) {
        return res.status(200).json(userProfiles);
      } else {
        errors = "There are no users";
        return res.status(404).json(errors);
      }
    })
    .catch((err) =>
      res.status(404).json({ users: "There are no user profiles" })
    );
};

//get Single user
const getUser = async (req, res) => {
  const errors = {};

  const userProfile = User.find(
    { _id: req.params.id },
    { email: 1, avatar: 1, date: 1 }
  )
    .populate("users")
    .then((userProfile) => {
      if (userProfile) {
        return res.status(200).json(userProfile);
      } else {
        errors = "There is no user";
        return res.status(404).json(errors);
      }
    })
    .catch((err) =>
      res.status(404).json({ users: "There is no user profile" })
    );
};

module.exports = {
  userRegistration,
  userLogin,
  googleUserLogin,
  userUpdate,
  userDeletion,
  getAllUsers,
  getUser,
};
