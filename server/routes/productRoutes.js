const {getAllProducts} = require("../controllers/productsController");
const express = require("express");

const router = express.Router();

router.get("/allProducts", getAllProducts);

module.exports = router;