const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: true}))

mongoose.connect('mongodb://localhost:27017')
.then(()=>{
    app.listen(8080, ()=>{
        console.log("Ready to Start");
    })
})
.catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
})