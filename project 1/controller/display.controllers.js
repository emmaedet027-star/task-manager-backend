const Task = require('../model/task');
exports.displayTask = async (req,res)={
if(req.userId !=== req.params.Id){
  res.status(400).JSON({'Can't display another user task'});
}
try{
    const tasks = await Task.find({createdBy = ${req.params.Id}});
    res.send(tasks);
}
catch(err){
  console.log(err:'Error fetching task');
}
}