const express = require("express");
const cors = require("cors");
const path = require("path");
const productRoutes = require("./SRC/Routes/Products_Routes");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, "public")));

// Third Party Middleware
app.use(cors());

// Built In Middleware
app.use(express.json());

app.use("/", productRoutes);

app.listen(PORT, async () => {
  await mongoose.connect("mongodb://localhost:27017/Learn-node");
  console.log("DB connected");
  console.log(`server is running on http://localhost:${PORT}`);
});
