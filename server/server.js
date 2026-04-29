const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// ROUTES
const signUp = require("./routes/signUpRoutes");
const logIn = require("./routes/loginRoutes");
const getProducts = require("./routes/productRoutes");
const getStates = require("./routes/stateRoutes");
const addAddress = require("./routes/addAddressRoutes");
const getAddress = require("./routes/getAddressRoutes");
const removeAddress = require("./routes/removeAddressRoutes");

app.use("/api/newuser", signUp);
app.use("/api/user/", logIn);
app.use("/api/products", getProducts);
app.use("/api/state", getStates);
app.use("/api/address/add", addAddress);
app.use("/api/address/get", getAddress);
app.use("/api/address/remove", removeAddress);

app.get("/", (req, res) => {
  res.send("Server running");
});

// CONNECT DB + START SERVER (ONLY ONCE)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch(err => {
    console.log("MongoDB connection failed", err);
  });