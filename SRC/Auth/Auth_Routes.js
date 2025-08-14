const express = require("express");
const { register, login, profile } = require("./Auth_Controller");
const {authUser} = require("./Auth_Middleware");

const routes = express.Router();

routes.post("/register", register);
routes.post("/login", login);
routes.get("/profile", authUser, profile);

module.exports = routes;
