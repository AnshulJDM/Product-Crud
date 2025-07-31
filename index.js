const express = require("express");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./SRC/Routes/User_Routes");
const productRoutes = require("./SRC/Routes/Products_Routes");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(PORT, async () => {
  await mongoose.connect("mongodb://localhost:27017/09-learn-node");
  console.log("DB connected");
  console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports = app;