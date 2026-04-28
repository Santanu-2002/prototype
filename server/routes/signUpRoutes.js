const {signUp} = require("../controllers/signUpController");
const express = require("express");
const router = express.Router();

router.post("/signup", signUp);

module.exports = router;