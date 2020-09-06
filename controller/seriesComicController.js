const SeriesComic = require("../models/ComicSeries");

//Saving
const seriesSave = async (req, res) => {
  try {
    let seriesname = req.body.seriesname;
    let authorname = req.body.authorname;
    let category = req.body.category;
    let universe = req.body.universe;
    let issuespublished = 0;

    if (
      seriesname == "" ||
      authorname == "" ||
      category == "" ||
      universe == ""
    ) {
      return res.status(400).send("Not all mandatory values have been set!");
    }

    let seriesExist = await SeriesComic.findOne({ seriesname: seriesname });

    if (seriesExist) {
      res.status(400).send("There is already a series with this name");
    }

    seriesObject = new SeriesComic({
      //create series object to set data
      seriesname,
      authorname,
      category,
      universe,
      issuespublished,
    });

    await seriesObject.save();
    res.status(200).send("Series details saved ");
  } catch (error) {
    console.log("Error caught at ", error);
    res.status(500).send("Server Error");
  }
};

//Update series
const seriesUpdate = async (req, res) => {
  try {
    var errors = {};
    let previousname = req.body.previousname; //this will be needing becuase we search the document to update from this name.
    let seriesname = req.body.seriesname;
    let authorname = req.body.authorname;
    let category = req.body.category;
    let universe = req.body.universe;

    if (
      seriesname == "" ||
      authorname == "" ||
      category == "" ||
      universe == ""
    ) {
      return res.status(400).send("Not all mandatory values have been set!");
    }

    let seriesExist = await SeriesComic.findOne({ seriesname: previousname });

    if (seriesExist == false) {
      res.status(400).send("There is no comic series to update");
    }

    const comicSeriesUpdate = await SeriesComic.findOneAndUpdate(
      { seriesname: previousname },
      {
        seriesname: seriesname,
        authorname: authorname,
        category: category,
        universe: universe,
      }
    )
      .then((comicSeriesUpdate) => {
        if (comicSeriesUpdate) {
          return res.status(200).json({ updatesuccess: true });
        } else {
          errors = "There is no comic series to update";
          return res.status(404).json(errors);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({
          users: "Comic series failed to update",
        });
      });
  } catch (error) {
    console.log(error);
  }
};

//get Series details of all the users
const getAllSeries = async (req, res) => {
  const errors = {};

  const comicSeriesData = SeriesComic.find(
    {},
    {
      seriesname: 1,
      authorname: 1,
      category: 1,
      universe: 1,
      issuespublished: 1,
      publishdate: 1,
    }
  )
    .populate("comicseries")
    .then((comicSeriesData) => {
      if (comicSeriesData) {
        return res.status(200).json(comicSeriesData);
      } else {
        errors = "There are no comic series data";
        return res.status(404).json(errors);
      }
    })
    .catch((err) =>
      res.status(404).json({ users: "There are no comic series data" })
    );
};

//get Single Series details of one user
const getSeries = async (req, res) => {
  const errors = {};
  let seriesName = req.params.id; //not the id but the name itself, it is set as unique from mongoose

  const comicSeriesData = SeriesComic.findOne(
    { seriesname: seriesName },
    {
      seriesname: 1,
      authorname: 1,
      category: 1,
      universe: 1,
      issuespublished: 1,
      publishdate: 1,
    }
  )
    .populate("comicseries")
    .then((comicSeriesData) => {
      if (comicSeriesData) {
        return res.status(200).json(comicSeriesData);
      } else {
        errors = "There are no comic series with this name";
        return res.status(404).json(errors);
      }
    })
    .catch((err) =>
      res.status(404).json({ users: "There are no comic series data" })
    );
};

module.exports = {
  seriesSave,
  seriesUpdate,
  getAllSeries,
  getSeries,
};
