const Stock = require("../models/Stock");
const Comic = require("../models/ComicIssue");
const stockRouter = require("../routes/api/stock");

//Saving
const stockSave = async (req, res) => {
  try {
    let comicissue_id = req.body.comicissue_id;
    let hb_stock = req.body.hb_stock;
    let pb_stock = req.body.pb_stock;

    if (comicissue_id == false || hb_stock == false || pb_stock == false) {
      return res.status(400).send("Not all mandatory values have been set!");
    }

    let comicExist = await Comic.findOne({ _id: comicissue_id });

    if (comicExist == false) {
      //check the existence of the comic issue to make a stock
      res.status(400).send("There is no comic issue with this id");
    }

    stockObject = new Stock({
      //create series object to set data
      comicissue_id,
      hb_stock,
      pb_stock,
    });

    await stockObject.save();
    res.status(200).send("Stock details saved ");
  } catch (error) {
    console.log("Error caught at ", error);
    res.status(500).send("Server Error");
  }
};

//Update stock
const stockUpdate = async (req, res) => {
  try {
    let comicissue_id = req.body.comicissue_id;
    let hb_stock = req.body.hb_stock;
    let pb_stock = req.body.pb_stock;

    if (comicissue_id == false || hb_stock == false || pb_stock == false) {
      return res.status(400).send("Not all mandatory values have been set!");
    }

    let comicExist = await Comic.findOne({ _id: comicissue_id });

    if (comicExist == false) {
      //check the existence of the comic issue to make a stock
      res.status(400).send("There is no comic issue with this id");
    }

    const stockUpdate = await Stock.findOneAndUpdate(
      { comicissue_id: comicissue_id },
      {
        hb_stock: hb_stock,
        pb_stock: pb_stock,
      }
    )
      .then((stockUpdate) => {
        if (stockUpdate) {
          return res.status(200).json({ updatesuccess: true });
        } else {
          return res.status(404).json("There is no stock to update");
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json("stocks failed to update");
      });
  } catch (error) {
    console.log(error);
  }
};

//get stock details of all the issues
const getAllStock = async (req, res) => {
  const stockData = Stock.find(
    {},
    {
      comicissue_id: 1,
      hb_stock: 1,
      pb_stock: 1,
    }
  )
    .populate("stocks")
    .then((stockData) => {
      if (stockData) {
        return res.status(200).json(stockData);
      } else {
        return res.status(404).json("There are no stock data");
      }
    })
    .catch((err) => res.status(404).json("failed to retriev stock data"));
};

//get Single stock details of one user
const getStock = async (req, res) => {
  let comicissue_id = req.params.id; //not the id but the comic issue id since its uniquw, it is set as unique from mongoose

  const stockData = Stock.findOne(
    { comicissue_id: comicissue_id },
    {
      comicissue_id: 1,
      hb_stock: 1,
      pb_stock: 1,
    }
  )
    .populate("stocks")
    .then((stockData) => {
      if (stockData) {
        return res.status(200).json(stockData);
      } else {
        return res.status(404).json("There are no comic with this name");
      }
    })
    .catch((err) => res.status(404).json("Failed to get stock data"));
};

//Delete comic issue
const deleteStock = async (req, res) => {
  const stockDeletion = Stock.findOneAndDelete({ comicissue_id: req.params.id })
    .then((stockDeletion) => {
      if (stockDeletion) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(404).json("There is no stock to delete with this id");
      }
    })
    .catch((err) => res.status(404).json("failed to delete stock"));
};

const consumeStock = async (req, res) => {
  try {
    let comicissueId = req.body.comicissue_id;
    let stock_qty = JSON.parse(req.body.stock_qty); //intergered it since it came sringified
    let stock_type = req.body.stock_type;

    var stockData = Stock.findOne({ comicissue_id: comicissueId });

    if (stockData == false) {
      return res.status(404).json("There is no stock found to consume");
    }
    const stockUpdate = null;
    if (stock_type == "hb_single") {
      let hb_stock_qty = 0;
      hb_stock_qty = stockData.hb_stock;
      hb_stock_qty = hb_stock_qty - stock_qty;

      stockUpdate = await Stock.findOneAndUpdate(
        { comicissue_id: comicissueId },
        {
          hb_stock: hb_stock_qty,
        }
      );
    } else if (stock_type == "pb_single") {
      let pb_stock_qty = 0;
      pb_stock_qty = stockData.pb_stock;
      pb_stock_qty = pb_stock_qty - stock_qty;

      stockUpdate = await Stock.findOneAndUpdate(
        { comicissue_id: comicissueId },
        {
          pb_stock: pb_stock_qty,
        }
      );
    }

    if (stockUpdate == true) {
      console.log("Updated the stock");
      return res.status(200).json("Stock updated");
    } else {
      return res.status(404).json("Stock update failed");
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json(error);
  }
};

module.exports = {
  stockSave,
  stockUpdate,
  getAllStock,
  getStock,
  deleteStock,
  consumeStock,
};
