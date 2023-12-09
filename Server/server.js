const express = require('express');
const app = express();
const PORT = 2501;

const connectDB = require('./db/connect');
require('dotenv').config();


app.use(express.json()); // adding a middleware to parse json http requested headers .
app.use(express.urlencoded({extended:false})); // adding a middleware to parse form data, it will be visible in the req.body  .
app.use(express.static('../Client')); // to ket the server display the content to the user.




const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, console.log("The server is listening on port: " + PORT));
    }catch(error){
        console.log(error);
    }
};

start();


