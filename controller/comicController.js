const comicFunction = (req, res) => {
    try {

      //Business Function goes here
      res.send('comic logic comes this page');
    } catch (error) {
      console.log("Error caught at ", error);
    }
  };
  
  module.exports = { comicFunction };