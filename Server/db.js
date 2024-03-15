const mongoose = require("mongoose");
const mongoUrl =
  "mongodb+srv://taxyguru:taxyguru@taxyguru.rb9h802.mongodb.net/?retryWrites=true&w=majority&appName=taxyguru";

const connectMongodb = async () => {
  try {
    await mongoose.connect(mongoUrl, { useNewUrlParser: true });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectMongodb;
