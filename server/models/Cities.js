const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    circleName: {
      type: String,
      trim: true
    },
    regionName: {
      type: String,
      trim: true
    },
    divisionName: {
      type: String,
      trim: true
    },
    officeName: {
      type: String,
      trim: true
    },
    pincode: {
      type: Number,
      required: true,
      index: true
    },
    officeType: {
      type: String,
      trim: true
    },
    delivery: {
      type: String,
      trim: true
    },
    district: {
      type: String,
      trim: true
    },
    stateName: {
      type: String,
      trim: true
    },
    latitude: {
      type: String
    },
    longitude: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("city", citySchema, "cities");