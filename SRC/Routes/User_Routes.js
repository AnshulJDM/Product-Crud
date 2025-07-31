const express = require("express");
const user = require("../Controllers/User_Controller");
const { userMid1, userMid2 } = require("../Middleware/User_Middleware");

const routes = express.Router();

// Read All
routes.get("/", user.getAll);

// Read One
routes.get("/:id", user.getOne);

// Create
routes.post("/", userMid1, userMid2, user.createOne);

// Update
routes.put("/:id", user.updateOne);

// Delete
routes.delete("/:id", user.deleteOne);

module.exports = routes;