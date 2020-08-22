const authFunction = (req, res) => {
  try {
    //Business Function goes here
    res.send("auth logic comes this page");
  } catch (error) {
    console.log("Error caught at ", error);
  }
};

module.exports = { authFunction };
