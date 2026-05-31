const mongoose = require("mongoose")

const wishListSchema = new mongoose.Schema({
    userId: Number,
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

module.exports = mongoose.model("Wishlist", wishListSchema, "wishlists");