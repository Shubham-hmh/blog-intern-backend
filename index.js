const express = require("express");
const db = require("./config/db");
const app =express();
const dotenv =require('dotenv').config();
const port =process.env.port || 5000;
const cookieParser =require("cookie-parser");
const morgan =require("morgan");

const blogRouter =require("./routes/blogRoute");


const cors = require("cors");

db();
app.use(express.json());
app.use(cors());     
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api/blog",blogRouter);




 app.listen(port , ()=>{
    console.log(`server is running on port : ${port}`);
 })