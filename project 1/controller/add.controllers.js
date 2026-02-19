const User = require('../model/user');
exports.addTask = async (req,res)={
  const task = await Task.create({
    createdBy:req.userId,
    desc:desc,
    createdAt,
    completed
  });
  return res.status(201).json({'task created succesfully'});
}