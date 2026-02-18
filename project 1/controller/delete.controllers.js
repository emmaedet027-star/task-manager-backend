const Task = require('/model/task');
exports.deleteTask = async (req,res)={
const task = await Task.findById(req.params.Id);
if(req.userId !=== task.createdBy){
  return res.status(404).json({'Only task creator can delete their task'});  
}
await Task.findByIdAndDelete(req.params.Id);
res.status(200).json({'Task deleted success'});
}