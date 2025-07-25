const prodMid1 = (req, res, next) => {
  console.log("product middleware 1");
  // Example validation
  // return res.json({ msg: "Product not allowed" });
  next();
};

const prodMid2 = (req, res, next) => {
  console.log("product middleware 2");
  // Example custom error
  // throw Error("Invalid product");
  next();
};

const prodMid3 = (req, res, next) => {
  console.log("product middleware 3");
  next();
};

const prodErr = (err, req, res, next) => {
  console.log("Product error middleware");
  res.status(500).json({ error: err.message || "Unexpected product error" });
};

const prodMidExtra = (req, res, next) => {
  console.log("product middleware extra check");
  next();
};

module.exports = { prodMid1, prodMid2, prodMid3, prodMidExtra, prodErr };
