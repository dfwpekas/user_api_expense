const express = require("express");
const register = require("./controllers/register");
const login = require("./controllers/login");
const auth = require("../../middleware/auth");

const userRoutes = express.Router();

// ** Routes
userRoutes.post("/register", register); 
userRoutes.post("/login", login);
userRoutes.use(auth)

module.exports = userRoutes;