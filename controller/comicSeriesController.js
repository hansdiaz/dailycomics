const comicSeriesFunction = (req, res) => {
  try {
    //Business Function goes here
    res.send("comic series logic comes this page");
  } catch (error) {
    console.log("Error caught at ", error);
  }
};

module.exports = { comicSeriesFunction };
