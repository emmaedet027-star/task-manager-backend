const taskSchema = new mongoose.Schema({
  title:{type:String, required:true},
  createdBy:{type: mongoose.Schema.Type.ObjectId, ref:'User'},
  desc:{type: String, required:true},
  createdAt:{type: Date, default:Date.now},
  completed:{type:Boolean, default:false}  
});

module.exports= mongoose.model('Task', taskSchema);