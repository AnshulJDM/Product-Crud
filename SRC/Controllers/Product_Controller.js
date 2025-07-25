const Product = require("../Models/Product_Models");

// Get all products
const getAll = async (req, res) => {
  const products = await Product.find();
  res.json({
    products: products,
    msg: "All products",
  });
};

// Get one product by ID
const getOne = async (req, res) => {
  const id = req.params["id"];
  const product = await Product.findOne({ _id: id });
  if (!product) return res.json({ msg: "Product not found" });
  return res.json({ product: product, msg: "Product found" });
};

// Create one product
const createOne = async (req, res) => {
  const { name, price, category, inStock, description } = req.body;
  const product = await Product.create({ name, price, category, inStock, description });
  res.status(201).json({ msg: "Product created", product: product });
};

// Update one product
const updateOne = async (req, res) => {
  const id = req.params["id"];
  const product = await Product.findById(id);
  if (!product) return res.json({ msg: "Product not found" });

  const { name, price, category, inStock, description } = req.body;

  await Product.findOneAndUpdate(
    { _id: id },
    { name, price, category, inStock, description }
  );

  res.json({ msg: "Product updated successfully" });
};

// Delete one product
const deleteOne = async (req, res) => {
  const id = req.params["id"];
  const result = await Product.findByIdAndDelete(id);
  res.json({ msg: `Product deleted successfully, ${JSON.stringify(result)}` });
};

module.exports = { getAll, getOne, createOne, updateOne, deleteOne };
