const express = require('express');
const router = express.router();
const bcrypt = require('bcrypt');
const jwt = require(jsonwebtoken');
const User = require('/model/user');
const authMiddleware = require(/'middleware/authMiddleware');

router.post('/signup', async (req, res)=>{
  try{
    const {name,email,password}= req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create(
      name: name,
      email:email,
      password: hashedPassword
     );
    res.status(200);
    return res.redirect('/login');
  }
catch(err){
  console.log(err);
}  

});

router.post('/login', async (req, res)=>{
  try{
    const{email, password} = req.body;
    const user = await User.findOne({email:email});
    if(!user){return
      res.status(400).json({'Invalid credentials'});}
    const ismatch = await bcrypt.compare(password, user.password);
    if(!ismatch){return
      res.status(200).json({'Invalid credentials'});}
    
        
    const token = jwt.sign(
      {userId: req.userId},
      process.env.JWT-KEY,
      {expiresIn: '7d'}
    );
    res.json({token});            
    res.redirect('/profile');      
  }
 catch(err){
   console.log(err);
 }  
  
}
router.get('/profile', authMiddleware, async (req,res)={
  const user = await User.findById(req.userId).select('-password');
  res.json(user);
});



