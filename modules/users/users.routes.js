const express = require("express");
const register = require("./controllers/register");
const login = require("./controllers/login");
const forgotPassword = require("./controllers/forgotPassword");
const userDashboard = require("./controllers/userDashboard");
const auth = require("../../middleware/auth");
const resetPassword = require("./controllers/resetPassword")

const userRoutes = express.Router();

// ** Routes
userRoutes.post("/register", register); 
userRoutes.post("/login", login);
userRoutes.post("/forgotPassword", forgotPassword);
userRoutes.use(auth);
userRoutes.post("/resetPassword", resetPassword);
userRoutes.get("/dashboard", userDashboard);

module.exports = userRoutes;