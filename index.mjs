
import { json } from 'express';
import express from "express";
//import { connect } from 'mongoose';
//const User = require('./modules/Users
const app  = express();
//const mainRoutes = require('./router/auth')
const port = process.env.PORT || 7001; 


//'port', process.env.PORT || 3000

// const DB =  process.env.DATABASE;

// connect(DB,{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   family:4
// }).then(()=>{
//   console.log('connection successfully with database')
// }).catch((err)=>console.log('no connection'))



// app.use(_json());


// app.use(mainRoutes)

// middleware()
app.get("/",(req,res)=>{
    res.send("hello I'm connect from server app")
})



 //server create
 app.listen(port,()=>{
    console.log(`serve is running at port no ${port}` )
 })
