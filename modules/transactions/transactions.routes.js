const express = require("express");

const auth = require("../../middleware/auth");
const addExpense = require("./controllers/addExpense");
const addIncome = require("./controllers/addIncome");
const getTransactions = require("./controllers/getTransaction");
const editTransaction = require("./controllers/editTransaction");
const deleteTransaction = require("./controllers/deleteTransaction")

const transactionRoutes = express.Router();

// ** Routes
transactionRoutes.use(auth); // auth middleware is run first before dashboard...

// ** Protected routes

transactionRoutes.post('/addExpense', addExpense);
transactionRoutes.post('/addIncome', addIncome);
transactionRoutes.get('/', getTransactions);
transactionRoutes.patch('/', editTransaction);
transactionRoutes.delete('/:transaction_id', deleteTransaction)


module.exports = transactionRoutes;