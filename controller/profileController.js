const profileFunction = (req, res) => {
    try {

      //Business Function goes here
      res.send('profile logic comes this page');
    } catch (error) {
      console.log("Error caught at ", error);
    }
  };
  
  module.exports = { profileFunction };