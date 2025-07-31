const express = require("express");
const product = require("../Controllers/Product_Controller");
const { middA } = require("../Middleware/Product_Middleware");

const routes = express.Router();

// Read All
routes.get("/", product.getAll);

// Read One
routes.get("/:id", product.getOne);

// Create
routes.post("/", product.createOne);

// Update
routes.put("/:id", product.updateOne);

// Delete
routes.delete("/:id", product.deleteOne);

module.exports = routes;
