const express = require("express");

const auth = require("../../middleware/auth");
const addExpense = require("./controllers/addExpense");

const transactionRoutes = express.Router();

// ** Routes


transactionRoutes.use(auth); // auth middleware is run first before dashboard...

// ** Protected routes

transactionRoutes.post('/addExpense', addExpense);


module.exports = transactionRoutes;

