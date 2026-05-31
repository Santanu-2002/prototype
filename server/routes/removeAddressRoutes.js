const {removeAddress} = require("../controllers/removeAddressController");

const express = require("express");
const router = express.Router();

router.delete("/removeAddress" , removeAddress);

module.exports = router;