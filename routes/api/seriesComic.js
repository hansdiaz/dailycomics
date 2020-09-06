const express = require("express");
const SeriesComicRouter = express.Router();
const cors = require("cors");

const SeriesComicController = require("../../controller/seriesComicController");

SeriesComicRouter.get("/allseries", cors({ origin: true }), (req, res) => {
  SeriesComicController.getAllSeries(req, res);
});

SeriesComicRouter.get(
  "/comicseries/:id",
  cors({ origin: true }),
  (req, res) => {
    SeriesComicController.getSeries(req, res);
  }
);

SeriesComicRouter.post(
  "/seriescomicsave",
  cors({ origin: true }),
  (req, res) => {
    SeriesComicController.seriesSave(req, res);
  }
);

SeriesComicRouter.put("/seriesupdate", cors({ origin: true }), (req, res) => {
  SeriesComicController.seriesUpdate(req, res);
});

module.exports = SeriesComicRouter;
