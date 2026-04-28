const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    userId:{
        type: String,
        unique: true,
    },
    name:{
        type: String,
        required: true,
    },
    contact:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Address" , addressSchema, "addresses");