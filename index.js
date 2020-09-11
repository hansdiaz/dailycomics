const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRouter = require("./routes/api/auth");
const comicRouter = require("./routes/api/comic");
const userRouter = require("./routes/api/user");
const shippingRouter = require("./routes/api/shipping");
const seriesComicRouter = require("./routes/api/seriesComic");
const stockRouter = require("./routes/api/stock");
const priceRouter = require("./routes/api/price");
const orderRouter = require("./routes/api/order");
const path = require("path");

const app = express();

connectDB(); //mongoose Mongo DB connection invoke

//Init Middleware
app.use(cors({ origin: true }));
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.use(authRouter); //using the MVC approach on nodejs
app.use(userRouter);
app.use(shippingRouter);
app.use(seriesComicRouter);
app.use(comicRouter);
app.use(stockRouter);
app.use(priceRouter);
app.use(orderRouter);

//serve the static assets in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log("Server Started on port ", PORT));
