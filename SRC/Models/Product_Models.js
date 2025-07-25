const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  inStock: Boolean,
  description: String,
});

// model ~~ collection
// Product = products
const Product = mongoose.model("Product", productSchema);

module.exports = Product;