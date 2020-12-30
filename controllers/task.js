const Task = require('../models/Task');
const User = require('../models/User');


const createTask = async (req, res) => {
    let newTask = new Task(req.boby);
    try {
        await newTask.save();
        let user = await User.findById(req.body.owner);
        user.tasks.push(newTask._id)
        await user.save();
        res.status(200).json({ task: newTask, user: user })
    }
    catch (error) {
        res.status(400).send(error)
    }
}

const getTask=async(req,res)=>{
    console.log(req.params.id);
  
    let task;
    try{
    task=await Task.findById(req.params.id)
      res.status(200).json({theTask:task})
    }
    catch(error){
      res.status(500).json({errorMessage:error})
    }
  }

const updateTask=async(req,res)=>{
    let task;
    try{
    task=await Task.findByIdAndUpdate(req.params.id,req.body)
    // user=await User.findOneAndUpdate({"name":req.params.name},req.body)
    // await user.save()
    console.log(req.body._id)
    res.send("the task is updated")
    res.status(200).json({task:task})
    }
    catch (err){
      res.status(500).json({err:err.message})
    }
    }

    const deleteTask = async (req, res) => {
        let task = await Task.findByIdAndDelete(req.body._id);
        try {
           
            let user = await User.findById(req.body.owner);
            user.tasks.pop(req.body._id)
            await user.save();
            res.status(200).json("task deleted")
        }
        catch (error) {
            res.status(400).send(error)
        }
    }
    const getAllTasks=async(req,res)=>{
        console.log("get all users");
        let tasks;
        try{
          tasks=await Task.find();
          if(tasks==null){
          res.send("could not hava user");
          }
          return res.json({status:200,tasks:tasks})
        }
        catch (error){
          res.status(400).json({myMessage:error.message})
        }
        }









module.exports = { createTask,updateTask,deleteTask,getTask,getAllTasks}
// const createTask=async(req,res)=>{
//     console.log(req.params.id);

  
//     let tasks;
//     try{
//       tasks=await User.findById(req.params.id)
//       res.status(200).json({theUser:tasks.id})
//     }
//     catch(error){
//       res.status(500).json({errorMessage:error})
//     }
//   }

//   const createTask = async (req, res) => {
//     let newTask = new Task(req.body);
//     console.log(newTask);
//     try {
//       await newTask.save();
//       res.status(200).json({ user:newTask })
//   }
//   catch (error) {
//       res.status(400).send(error)
//   }
//   }




// const getTask=async(req,res)=>{
// try {
//   let task=await Task.findById("5fbb9d34093ee8417c76e70b").populate('owner');

//   // let user=await (await User.findById("5fbb9d34093ee8417c76e70b"))
//   // .populate({path:'tasks',match:{completed:false}});

//   res.status(200).json({ task: task })
// } catch (error) {
//   res.send("cannot save user: ", error.message)
// }

// }

// module.exports={createTask}