const express=require('express');
const app =express();
const mongoose=require('mongoose');
const router=require("./routes/api")
const bodyParser=require('body-parser')
// const request = require('request');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();


const connectionParams={
    newUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true
}


mongoose.connect(process.env.DB_CONNECT,connectionParams)
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(`error connecting ${err}`); 
})

app.use(bodyParser.json());
app.use('/',router)

// app.use(login)

// function login(req,res,next){
// console.log("welcom to login");
// app.use('/getUserById/:id',router)

// return next()
// }



app.listen(3000, ()=>  console.log('listening port 3000'))