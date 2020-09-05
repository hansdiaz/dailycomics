//const { body, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const validator = require("email-validator");
const jwt = require("jsonwebtoken");
const config = require("config");

const Shipping = require("../models/Shipping");
const User = require("../models/User");
const { response } = require("express");

//Registration
const shippingSave = async (req, res) => {
  try {
    let userId = req.body._id;
    let userName = req.body.name;
    let userAddress = req.body.address;
    let postalCode = req.body.postalcode;
    let userCity = req.body.city;
    let userCountry = req.body.country;
    let userPhoneNumber = req.body.phone;

    if (
      userId == "" ||
      userName == "" ||
      userAddress == "" ||
      userCity == "" ||
      userCountry == ""
    ) {
      return res.status(400).send("Not all mandatory values have been set!");
    }
    if (userPhoneNumber == true && Number.isInteger(userPhoneNumber) == false) {
      return res.status(400).send("Use a valid Phone Number");
    }

    let userExist = await User.findOne({ _id: userId });

    if (!userExist) {
      res.status(400).send("There is no user with this id");
    }

    let shippingdetails = await Shipping.findOne({ user_id: userId }); //check if user already exists

    if (shippingdetails) {
      res.status(400).send("Shipping Details for this User Already exists"); //sending the error by json if the user exist hence closing the response
    }

    shippingObject = new Shipping({
      //create shipping object to set data
      user_id: userId,
      name: userName,
      address: userAddress,
      postalcode: postalCode,
      city: userCity,
      country: userCountry,
      phonenumber: userPhoneNumber,
    });

    await shippingObject.save();
    res.status(200).send("Shipping details saved to " + userExist.email);
  } catch (error) {
    console.log("Error caught at ", error);
    res.status(500).send("Server Error");
  }
};

//Update
const shippingUpdate = async (req, res) => {
  try {
    var errors = {};
    let userId = req.body._id;
    let userName = req.body.name;
    let userAddress = req.body.address;
    let postalCode = req.body.postalcode;
    let userCity = req.body.city;
    let userCountry = req.body.country;
    let userPhoneNumber = req.body.phone;

    if (
      userId == "" ||
      userName == "" ||
      userAddress == "" ||
      userCity == "" ||
      userCountry == ""
    ) {
      return res.status(400).send("Not all mandatory values have been set!");
    }
    if (userPhoneNumber == true && Number.isInteger(userPhoneNumber) == false) {
      return res.status(400).send("Use a valid Phone Number");
    }

    let userExist = await User.findOne({ _id: userId });

    if (!userExist) {
      res.status(400).send("There is no user with this id");
    }

    const shippingUpdate = await Shipping.findOneAndUpdate(
      { user_id: userId },
      {
        name: userName,
        address: userAddress,
        postalcode: postalCode,
        city: userCity,
        country: userCountry,
        phonenumber: userPhoneNumber,
      }
    )
      .then((shippingUpdate) => {
        if (shippingUpdate) {
          return res.status(200).json({ updatesuccess: true });
        } else {
          errors = "There is no shipping data for this user to update 1";
          return res.status(404).json(errors);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({
          users: "There is no shipping data for this user to update 2",
        });
      });
  } catch (error) {
    console.log(error);
  }
};

//get shipping details of all the users
const getAllShipping = async (req, res) => {
  const errors = {};
  let userId = req.params.id;

  const shippingData = Shipping.find(
    {},
    {
      user_id: 1,
      name: 1,
      address: 1,
      postalcode: 1,
      city: 1,
      country: 1,
      phonenumber: 1,
    }
  )
    .populate("shippings")
    .then((shippingData) => {
      if (shippingData) {
        return res.status(200).json(shippingData);
      } else {
        errors = "There are no shipping details for any user";
        return res.status(404).json(errors);
      }
    })
    .catch((err) =>
      res
        .status(404)
        .json({ users: "There are no shipping details for any user" })
    );
};

//get Single Shipping details of one user
const getShipping = async (req, res) => {
  const errors = {};
  let userId = req.params.id;
  let userExist = await User.findOne({ _id: userId });

  if (!userExist) {
    res.status(400).send("There is no user with this id");
  }

  const shippingData = Shipping.findOne(
    { user_id: userId },
    {
      user_id: 1,
      name: 1,
      address: 1,
      postalcode: 1,
      city: 1,
      country: 1,
      phonenumber: 1,
    }
  )
    .populate("shippings")
    .then((shippingData) => {
      if (shippingData) {
        return res.status(200).json(shippingData);
      } else {
        errors = "There are no shipping details for this user";
        return res.status(404).json(errors);
      }
    })
    .catch((err) =>
      res
        .status(404)
        .json({ users: "There are no shipping details for this user" })
    );
};

module.exports = {
  shippingSave,
  shippingUpdate,
  getAllShipping,
  getShipping,
};
