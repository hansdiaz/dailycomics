const SeriesComic = require("../models/ComicSeries");
const ComicIssue = require("../models/ComicIssue");
//Saving
const comicSave = async (req, res) => {
  try {
    let seriesname = req.body.seriesname;
    let issuenumber = req.body.issuenumber;
    let description = req.body.description;
    let imageref = req.body.imageref;

    if (
      seriesname == false ||
      issuenumber == false ||
      description == false ||
      imageref == false
    ) {
      return res.status(400).send("Not all mandatory values have been set!");
    }

    let seriesExist = await SeriesComic.findOne({ seriesname: seriesname });

    if (seriesExist == false) {
      //check the existence of the series in series collection
      res.status(400).send("There is no series with this name");
    }

    let comicExist = await ComicIssue.findOne({
      seriesname: seriesname,
      issuenumber: issuenumber,
    });

    if (comicExist == true) {
      //check the existence of the comic issue
      res.status(400).send("There already is an issue with this issue number");
    }

    comicObject = new ComicIssue({
      //create comic object to set data
      seriesname,
      issuenumber,
      description,
      imageref,
    });

    await comicObject.save(); //save the comic object

    const comicSeriesUpdate = await SeriesComic.findOneAndUpdate(
      //increment the no of published issues in the series collection
      { seriesname: seriesname },
      {
        $inc: { issuespublished: 1 },
      }
    );

    if (comicSeriesUpdate == false) {
      res.status(400).send("Comic Series update failed at incrementing");
    }

    res.status(200).send("Comic details saved ");
  } catch (error) {
    console.log("Error caught at ", error);
    res.status(500).send("Server Error");
  }
};

//Update series
const comicUpdate = async (req, res) => {
  try {
    var errors = {};
    let seriesname = req.body.seriesname; //this is to search the comic issue
    let previousissuenumber = req.body.previssuenumber; //this will be used to search too
    let issuenumber = req.body.issuenumber; //this is the new issue number if it needs to be udpated
    let description = req.body.description;
    let imageref = req.body.imageref;

    if (
      seriesname == false ||
      previousissuenumber == false ||
      issuenumber == false ||
      description == false ||
      imageref == false
    ) {
      return res.status(400).send("Not all mandatory values have been set!");
    }

    let seriesExist = await SeriesComic.findOne({ seriesname: seriesname });

    if (seriesExist == false) {
      res.status(400).send("There is no comic series to update");
    }

    let comicExist = await ComicIssue.findOne({
      seriesname: seriesname,
      issuenumber: issuenumber,
    });

    if (comicExist == false) {
      //check the existence of the comic issue
      res.status(400).send("There is no comic issue in this number to update");
    }

    const comicUpdate = await ComicIssue.findOneAndUpdate(
      { seriesname: seriesname, issuenumber: previousissuenumber },
      {
        issuenumber: issuenumber,
        description: description,
        imageref: imageref,
      }
    )
      .then((comicUpdate) => {
        if (comicUpdate) {
          return res.status(200).json({ updatesuccess: true });
        } else {
          errors = "There is no comic to update";
          return res.status(404).json(errors);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({
          users: "Comic failed to update",
        });
      });
  } catch (error) {
    console.log(error);
  }
};

//get Series details of all the users
const getAllComics = async (req, res) => {
  const errors = {};

  const comicData = ComicIssue.find(
    {},
    {
      seriesname: 1,
      issuenumber: 1,
      description: 1,
      imageref: 1,
      publishdate: 1,
    }
  )
    .populate("comicissues")
    .then((comicData) => {
      if (comicData) {
        return res.status(200).json(comicData);
      } else {
        errors = "There are no comic data";
        return res.status(404).json(errors);
      }
    })
    .catch((err) =>
      res.status(404).json({ comics: "Failed to retreive comic issue data" })
    );
};

//get Single Series details of one user by the id in get request
const getComicById = async (req, res) => {
  const errors = {};
  let comicId = req.params.id; //not the id but the name itself, it is set as unique from mongoose

  const comicIssueData = ComicIssue.findOne(
    { _id: comicId },
    {
      seriesname: 1,
      issuenumber: 1,
      description: 1,
      imageref: 1,
      publishdate: 1,
    }
  )
    .populate("comicissues")
    .then((comicIssueData) => {
      if (comicIssueData) {
        return res.status(200).json(comicIssueData);
      } else {
        errors = "There are no comic issue with this id";
        return res.status(404).json(errors);
      }
    })
    .catch((err) =>
      res.status(404).json({ comic: "Error at retrieving data" })
    );
};

//get Single Series details of one user
const getComicByName = async (req, res) => {
  const errors = {};
  let seriesname = req.body.seriesname; //not the id but the name itself, it is set as unique from mongoose
  let issuenumber = req.body.issuenumber;

  if (seriesname == false || issuenumber == false) {
    return res.status(400).send("Not all mandatory values have been set!");
  }

  const comicIssueData = ComicIssue.findOne(
    { seriesname: seriesname, issuenumber: issuenumber },
    {
      seriesname: 1,
      issuenumber: 1,
      description: 1,
      imageref: 1,
      publishdate: 1,
    }
  )
    .populate("comicissues")
    .then((comicIssueData) => {
      if (comicIssueData) {
        return res.status(200).json(comicIssueData);
      } else {
        errors = "There are no comic issue with this id";
        return res.status(404).json(errors);
      }
    })
    .catch((err) =>
      res.status(404).json({ comic: "Error at retrieving data" })
    );
};

//Delete comic issue
const deleteComic = async (req, res) => {
  const errors = {};

  const comicDeletion = ComicIssue.findOneAndDelete({ _id: req.params.id })
    .then((comicDeletion) => {
      if (comicDeletion) {
        return res.status(200).json({ success: true });
      } else {
        errors = "There is no comic to delete with this id";
        return res.status(404).json(errors);
      }
    })
    .catch((err) =>
      res.status(404).json({ data: "failed to delete item" })
    );
};

module.exports = {
  comicSave,
  comicUpdate,
  getAllComics,
  getComicById,
  getComicByName,
  deleteComic
};
