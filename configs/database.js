const mongoose = require("mongoose");
require("dotenv").config();

const dbConnectionString = process.env.MONGODB_CONNECTION_STRING;

const connectDB = () => {
  mongoose
    .connect(dbConnectionString)
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = { connectDB };
