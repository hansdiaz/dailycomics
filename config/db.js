const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); //two parameters passed since the single param method call is depreciated
    console.log("Mongo DB is connected Successfully...");
  } catch (err) {
    console.error(err.message);

    // Exiting Process with failiure
    process.exit(1);
  }
};

module.exports = connectDB;
