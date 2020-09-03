const { response } = require("express");

const authFunction = (req, res) => {
  try {
    //Business Function goes here
    console.log("auth logic hits this");
    res.status(200).send();
  } catch (error) {
    console.log("Error caught at ", error);
  }
};

module.exports = { authFunction };
