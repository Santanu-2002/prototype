const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  gender: String,
  masterCategory: String,
  subCategory: String,
  articleType: String,
  baseColour: String,
  season: String,
  year: Number,
  usage: String,
  productDisplayName: String,
  filename: String,
  image: String,
}, { timestamps: true });

module.exports = mongoose.model("Products", productSchema, "products");