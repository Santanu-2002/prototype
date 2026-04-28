const mongoose = require("mongoose");
const {v4 : uuidV4} = require("uuid");
const userSchema = new mongoose.Schema({
    id:{
        type: String,
        default: uuidV4,
        unique: true
        // for unquie id 
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true,
        // unique: true
    },
    password:{
        type: String,
        required: true
    },
},{timestamps: true});

module.exports = mongoose.model("User", userSchema, "users");

