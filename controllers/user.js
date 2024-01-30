const User = require('../models/users');
const bcrypt=require('bcrypt');





exports.signUp = async (req,res,next)=>{
  try{
  const name = req.body.name;
  const email= req.body.email;
  const password= req.body.password;
  const phno=req.body.phno;
  const hash=await bcrypt.hash(password,10)
  const data=await User.create({
    name:name,
    email:email,
    password:hash,
    phno:phno
  });
  res.status(201).json({message:"New user created successfully"});
}
catch(err)
{
    console.log(err);
    if(err.name==="SequelizeUniqueConstraintError")
    res.status(414).json(err);
    else
    res.status(505).json(err);
}
};

