const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

// CONNECT DATABASE
mongoose.connect("mongodb+srv://santanu_pinu:santanu2002@prototype.qb4dtaw.mongodb.net/myDB")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const signUp = require("./routes/signUpRoutes");
const logIn = require("./routes/loginRoutes");
const getProducts = require("./routes/productRoutes");
const getStates = require("./routes/stateRoutes");
const addAddress = require("./routes/addAddressRoutes");
const getAddress = require("./routes/getAddressRoutes");
const removeAddress = require("./routes/removeAddressRoutes");

// ROUTES
app.use("/api/newuser", signUp);
app.use("/api/user/", logIn);
app.use("/api/products", getProducts);
app.use("/api/state", getStates);
app.use("/api/address", addAddress);
app.use("/api/address", getAddress);
app.use("/api/address", removeAddress);


app.get("/", (req, res) => {
    res.send("Server running");
});

app.listen(5000, () => {
    console.log("Server started");
});