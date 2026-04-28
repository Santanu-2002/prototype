const {stateFind} = require("../controllers/stateController");

const express = require("express");
const router = express.Router();

router.post("/states", stateFind);
// we can also use router.get here becuase we are only doing fetch part 
// no we should not use get cause we are using userId for referal no so post is the best option.
module.exports = router;