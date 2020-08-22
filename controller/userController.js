const userFunction = (req, res) => {
  try {

    //Business Function goes here
    res.send('user logic comes this page');
  } catch (error) {
    console.log("Error caught at ", error);
  }
};

module.exports = { userFunction };
