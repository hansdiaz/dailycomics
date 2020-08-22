const authorFunction = (req, res) => {
    try {

      //Business Function goes here
      res.send('author logic comes this page');
    } catch (error) {
      console.log("Error caught at ", error);
    }
  };
  
  module.exports = { authorFunction };