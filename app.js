require('express-async-errors');

const express = require("express")

// const cors = require("cors"); // cross origin resource sharing.
const errorHandler = require("./handlers/errorHandler");
const mongoose = require("mongoose");
const userRoutes = require("./modules/users/users.routes");
const transactionRoutes = require('./modules/transactions/transactions.routes');
// const transactionRoutes = require('./modules/transactions/transactions.routes');

require("dotenv").config();


const app = express();
// app.use(cors()); // for deployment.

mongoose.connect(process.env.mongo_connection, {})
.then(() => {
    console.log("Mongo connection successful!");
}).catch((error) => {
    console.log('Connection failed', error.message);
});



// Importing the models here will make it global to your entire application.
require("./models/users.model");
require("./models/transactions.model");
app.use(express.json()); // For data parsing.

// ** Routes...
app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionRoutes);
// app.use("/api/transactions", transactionRoutes);


// Working for all request and checking if an api point or a page is not found.
app.all("*", (req, res, next) => { // POST GET DELETE 
    res.status(404).json({
        status: "failed",
        message: `404 Not Found: ${req.originalUrl}`
    })  
});

// api/v1/users/ayo/stupid ❌


app.use(errorHandler);



app.listen(8000, () => {
    console.log("Server started ...");
});



