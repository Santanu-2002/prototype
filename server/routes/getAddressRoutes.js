const {getAddress} = require ("../controllers/getAddressController");

const express = require("express");
const router = express.Router();

router.post("/getAddress", getAddress);

module.exports = router;