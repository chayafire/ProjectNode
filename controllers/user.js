const User=require ('../models/User');
const nodemailer = require("nodemailer");
const { prototype } = require("nodemailer/lib/dkim");
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
const { getMaxListeners } = require('../models/User');
// const nodeMailer = require("../nodeMailer");
dotenv.config();


// const getUser=async(req,res)=>{
// console.log(req.body.name);
// let user;
// try{
//     user= await User.findOne({name:req.body.name,password:req.body.password})
// if(user==null){
//     res.status(200).json({errorMessage:"enter create user"})  
   
// }
// else{
//  if(req.body.password==user.password){
//      let token=jwt.sign({name:req.body.name,password:req.body.password},process.env.ACSSES_TOKEN_SECRET);
//    console.log(token)
//    res.status(200).json({ "messege": "You have successfully logged in", token });
//     }
// else{
//    res.status(500).json({errorMessage:"Incorrect details"}) 
// }
// }
// }
// catch (error){
//     res.status(500).json({errorMessage:error})
// }
// }


const getUser = async (req, res) => {
  console.log("get user")
  try {
      //.findById(req.params.name); 
      currentUser = await User.findOne({ name: req.body.name })
      if (currentUser == null) {
          res.status(200).json({ "messege": "don't have this user,you need to register" });
          //this.createUser();
      }
      else {
          if (currentUser.password == req.body.password) {
              let token = jwt.sign({ name: req.body.name, password: req.body.password }, process.env.ACSSES_TOKEN_SECRET)
              console.log(token);
              res.status(200).json({ "messege": "You have successfully logged in", token });
              //let decoded = jwt.verify(token, process.env.ACCCESS_TOKEN_SECRET)
              // console.log(decoded);
          }
          else {
              res.status(200).json({ "messege": "The password is incorrect, please try again" });
          }
      }
  }
  catch (error) {
      res.status(400).json({ errorMessege: error.errorMessege });
  }
}


const getAllUsers=async(req,res)=>{
  console.log("get all users");
  let users;
  try{
    users=await User.find();
    if(users==null){
    res.send("could not hava user");
    }
    return res.json({status:200,users:users})
  }
  catch (error){
    res.status(400).json({myMessage:error.message})
  }
  }




const createUser = async (req, res) => {
    let newUser = new User(req.body);
    console.log(newUser);

  
    try {
      await newUser.save();
      res.status(200).json({ user:newUser})
      main(newUser.mail,newUser.name)
  // nodeMailer.sendMailToNewUser(newUser.mail);
      
  }
  catch (error) {
      res.status(400).send(error,)
  }
  }

  const deleteUser=async(req,res)=>{
    try{
      await User.deleteOne({ name: req.body.name })
      res.status(200).json({"massage":"user is deleted"});
    }
    catch (error){
      res.status(400).json({"errpr massage":error.message});
    }
    }

    const updateUser=async(req,res)=>{
      let user;
      try{
      user=await User.updateOne(req.body)
      // user=await User.findOneAndUpdate({"name":req.params.name},req.body)
      // await user.save()
      res.send("the user is updated")
      
      }
      catch (err){
        res.status(500).json({err:err.message})
      }
      }


module.exports={getUser,createUser,deleteUser,updateUser,getAllUsers}



async function main(mail,name) {
console.log(`mail: ${mail}`);
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 's0527133360@gmail.com',
      pass: '0504103873'
    }
  });

  var mailOptions = {
    // from: 'chayalenicht@gmail.com',
    to:mail,
    subject: 'Wlcome',
    text: 'Hiii test55!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(`error ${error}`);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });


}






