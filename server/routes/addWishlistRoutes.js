const express = require('express');
const router = express.Router()
const {addWishlsit} = require("../controllers/addWishListContoller");

router.post("/addToWishList", addWishlsit);

module.exports = router;