require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Task = require('/model/task');
const User = require('/model/user');
const app = express();
app.use('/task/add', require('./route/add.routes'));
app.use('/signup', require('./route/auth.routes'));
app.use('/task/:id/delete', require('./route/delete.routes'));
app.use('/task/user/:id', require('./route/display.routes'));
app.use('/task/:id/edit', require('./route/edit.routes'));
app.use('/task/:id/mark', require('./route/edit.routes'));
app.use('/task/:id/editprofile', require('./route/edit.routes'));
app.use('/task/:id/deleteprofile', require('./route/edit.routes'));
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGOOSE-URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{ console.log('Mongoose connected')})
.catch((err) =>{ console.log('Mongoose connection failed:'err);
  process.exit(1);});
  
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, ()=>{
    console.log('server running on port ${PORT}');
  });