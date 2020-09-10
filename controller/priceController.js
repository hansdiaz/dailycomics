const Price = require("../models/Price");
const Comic = require("../models/ComicIssue");

//Saving
const priceSave = async (req, res) => {
  try {
    let comicissue_id = req.body.comicissue_id;
    let hb_price = req.body.hb_price;
    let pb_price = req.body.pb_price;

    if (comicissue_id == false || hb_price == false || pb_price == false) {
      return res.status(400).send("Not all mandatory values have been set!");
    }

    let comicExist = await Comic.findOne({ _id: comicissue_id });

    if (comicExist == false) {
      //check the existence of the comic issue to make a stock
      res.status(400).send("There is no comic issue with this id");
    }

    priceObject = new Price({
      //create series object to set data
      comicissue_id,
      hb_price,
      pb_price,
    });

    await priceObject.save();
    res.status(200).send("Price details saved ");
  } catch (error) {
    console.log("Error caught at ", error);
    res.status(500).send("Server Error");
  }
};

//Update stock
const priceUpdate = async (req, res) => {
  try {
    let comicissue_id = req.body.comicissue_id;
    let hb_price = req.body.hb_price;
    let pb_price = req.body.pb_price;

    if (comicissue_id == false || hb_price == false || pb_price == false) {
      return res.status(400).send("Not all mandatory values have been set!");
    }

    let comicExist = await Comic.findOne({ _id: comicissue_id });

    if (comicExist == false) {
      //check the existence of the comic issue to make a stock
      res.status(400).send("There is no comic issue with this id");
    }
    const priceUpdate = await Price.findOneAndUpdate(
      { comicissue_id: comicissue_id },
      {
        hb_price: hb_price,
        pb_price: pb_price,
      }
    )
      .then((priceUpdate) => {
        if (priceUpdate) {
          return res.status(200).json({ updatesuccess: true });
        } else {
          return res.status(404).json("There is no price to update");
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json("price failed to update");
      });
  } catch (error) {
    console.log(error);
  }
};

//get stock details of all the issues
const getAllPrices = async (req, res) => {
  const priceData = Price.find(
    {},
    {
      comicissue_id: 1,
      hb_price: 1,
      pb_price: 1,
    }
  )
    .populate("prices")
    .then((priceData) => {
      if (priceData) {
        return res.status(200).json(priceData);
      } else {
        return res.status(404).json("There are no price data");
      }
    })
    .catch((err) => res.status(404).json("failed to retrieve price data"));
};

//get Single stock details of one user
const getPrice = async (req, res) => {
  let comicissue_id = req.params.id; //not the id but the comic issue id since its uniquw, it is set as unique from mongoose

  const priceData = Price.findOne(
    { comicissue_id: comicissue_id },
    {
      comicissue_id: 1,
      hb_price: 1,
      pb_price: 1,
    }
  )
    .populate("prices")
    .then((priceData) => {
      if (priceData) {
        return res.status(200).json(priceData);
      } else {
        return res.status(404).json("There are no prices with this comic id");
      }
    })
    .catch((err) => res.status(404).json("Failed to get pricing data"));
};

//Delete comic issue
const deletePrice = async (req, res) => {
  const priceDeletion = Price.findOneAndDelete({ comicissue_id: req.params.id })
    .then((priceDeletion) => {
      if (priceDeletion) {
        return res.status(200).json({ success: true });
      } else {
        return res
          .status(404)
          .json("There are no prices to delete with this id");
      }
    })
    .catch((err) => res.status(404).json("failed to delete pricing"));
};

module.exports = {
  priceSave,
  priceUpdate,
  getAllPrices,
  getPrice,
  deletePrice,
};
