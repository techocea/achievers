const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongoURI = process.env.MONGODB_URL;

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURI).then(
      () => {
        console.log("database is Connected");
      },
      (err) => {
        console.log(err);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDB;
