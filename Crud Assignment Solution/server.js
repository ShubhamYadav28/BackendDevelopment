const express = require("express");
const cors = require("cors");
const { userRoute } = require("./routes/User.route");
require("dotenv").config()

const {connectToDatabase} = require('./config/dbConnection.js')
 
const app=express();

connectToDatabase()

app.use(cors());
app.use(express.json()) //middleware to work with json data

app.use("/",userRoute)  // user route

app.listen(process.env.PORT,()=>{
    console.log("Server Started on PORT NO:",process.env.PORT)
})