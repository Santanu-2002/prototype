const express = require("express");
const {getWishlistDetails} = require('../controllers/getWishListController');

const router = express.Router();

router.get("/getWishlist", getWishlistDetails)