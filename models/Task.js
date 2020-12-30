const mongoose=require('mongoose');

const taskSchema=mongoose.Schema({
    description:{
        type:String,
        require:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    date:{
        type:Date,
        default:Date.now()
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId, ref:'User'
    }
})
module.exports=mongoose.model('Task',taskSchema)