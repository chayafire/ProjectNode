const mongoose=require("mongoose");
// const tasks = require("../controllers/task");
const userSchema=mongoose.Schema({
name:{
    type:String,
    default:"user"
},
password:{
    type:String,
    minlength:6
},

mail:{
    type:String,  
},

tasks:[
    {type:mongoose.Schema.Types.ObjectId,ref:'Task',require:true}
]


})
module.exports=mongoose.model('User',userSchema);