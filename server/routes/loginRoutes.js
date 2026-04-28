const {logIn} = require("../controllers/loginController");

const express = require("express");
const router = express.Router();

router.post("/login", logIn);

module.exports = router;