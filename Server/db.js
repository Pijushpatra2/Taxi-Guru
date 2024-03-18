const mongoose = require("mongoose");
let mongoUrl =
  "mongodb+srv://taxyguru:taxyguru@taxyguru.rb9h802.mongodb.net/?retryWrites=true&w=majority&appName=taxyguru";
// mongoUrl = "mongodb://127.0.0.1:27017/taxiGuru";
const connectMongodb = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectMongodb;
