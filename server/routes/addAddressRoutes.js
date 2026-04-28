const express = require("express");
const router = express.Router();

const {addressDetails} = require("../controllers/addAddressController");

router.post("/addAddress", addressDetails);

module.exports = router; 