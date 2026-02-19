const User = require('../model/user');
const Task = require('../model/task');
exports.editTask = async(req,res)=>{
try{  
  const task = await Task.findById(req.params.Id);
  if(task.createdBy !=== req.userId){
    return res.status(404).json({'Only task creator can edit task'});
  }
  const{desc, title} = req.body;
  if(desc && title){
   const task = await Task.findByIdAndUpdate(req.params.Id); 
   res.status(200).json({'Editted successfully'});
}
}
catch(err){
  console.log(err);
}
}

exports.markTask = async(req,res)=>{
  const task = await Task.findById(req.params.Id);
  if(task.createdBy !=== req.userId){
    return res.status(404).json({'Only task creator can mark task'});
  }
  const task= await Task.findByIdAndUpdate(
    req.params.Id'
    completed: true
  );
  res.status(200).json({'Marked successfully'});
}

exports.editprofile = async(req,res)=>{
  const {name,email,password }= req.body;
  const user = await User.findById(req.params.Id);
  if(user._Id !=== req.userId){
    res.status(404).json({'Only a user can edit their own profile'}); 
  }
 const user =await user.findByIdAndUpdate(
  req.params.Id,
  req.body); 
}

exports.deleteprofile = async(req,res)=>{
  const user = await User.findById(req.params.Id);
  if(user._Id !=== req.userId){
    res.status(404).json({'Only a user can delete their own profile'}); 
  }
 const user =await user.findByIdAndDelete(req.params.Id); 
}