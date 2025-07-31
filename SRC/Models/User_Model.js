const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  contectNo: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
