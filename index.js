const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRouter = require("./routes/api/auth");
const comicRouter = require("./routes/api/comic");
const userRouter = require("./routes/api/user");
const shippingRouter = require("./routes/api/shipping");
const seriesComicRouter = require("./routes/api/seriesComic");

const app = express();

connectDB(); //mongoose Mongo DB connection invoke

//Init Middleware
app.use(cors({ origin: true }));
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("API Running")); //traditional approach of not using seperate functionality layers

app.use(authRouter); //using the MVC approach on nodejs
app.use(userRouter);
app.use(shippingRouter);
app.use(seriesComicRouter);
app.use(comicRouter);



app.listen(PORT, () => console.log("Server Started on port ", PORT));
