const {removeAddress} = require("../controllers/remoevAddressController");

const express = require("express");
const router = express.Router();

router.delete("/removeAddress" , removeAddress);

module.exports = router;