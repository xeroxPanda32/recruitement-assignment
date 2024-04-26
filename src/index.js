const express = require('express');
const mongoose  = require('mongoose');
const allRoutes = require('./routes/route')
require('dotenv').config()

const app = express();

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true}))
app.use(express.json());

// Mount all routes defined in the route file
app.use(allRoutes);


// Connect to MongoDB using the MONGO_URI from the environment variables
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(8080, ()=>{
        console.log("Ready to Start");
    })
})
.catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
})