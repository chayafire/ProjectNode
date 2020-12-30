const router=require("express").Router();
var user=require("../controllers/user")
var task=require("../controllers/task")

router.get('/getUserByName',user.getUser)
router.post('/newUser',user.createUser);
router.patch('/updateUser',user.updateUser)
router.get('/getAllUsers',user.getAllUsers);
router.delete('/deleteUser',user.deleteUser)

router.get('/getTask/:id',task.getTask)
router.get('/getAllTasks',task.getAllTasks);
router.post('/newTask',task.createTask);
router.patch('/updateTask/:id',task.updateTask);
router.delete('/deleteTask',task.deleteTask);

module.exports=router;