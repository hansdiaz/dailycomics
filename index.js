const express = require("express");
const connectDB = require("./config/db");
const authRouter = require("./routes/api/auth");
const authorRouter = require("./routes/api/author");
const comicRouter = require("./routes/api/comic");
const userRouter = require("./routes/api/user");

const app = express();

connectDB(); //mongoose Mongo DB connection invoke

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("API Running")); //traditional approach of not using seperate functionality layers

app.use(authRouter); //using the MVC approach on nodejs
app.use(authorRouter);
app.use(comicRouter);
app.use(userRouter);

app.listen(PORT, () => console.log("Server Started on port ", PORT));
