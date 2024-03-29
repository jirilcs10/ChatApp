const User = require('../models/users');
const bcrypt=require('bcrypt');
const accessToken=require('../util/accesstoken');




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

exports.userLogin = async (req,res,next)=>{
  let data;
  try{
 
  const {email,password} = req.body;
  console.log(email);
  console.log(password);
  if(!email.length>0||!password.length>0)
  {
    throw new Error("Please enter the email and password");
  }

  data=await User.findOne({ where: { email:email } });
  console.log(data.ispremiumuser);
  console.log(1321);
  console.log(data.id);
  if(data)
  {
      bcrypt.compare(password,data.password,(error,result)=>{
        if(error)
        throw new Error("Something went wrong");
        if(result===true)
        {
        return res.status(201).json({message:"User Logged in Successfully",token:accessToken.generateAccessToken(data.id)});
        }
        else
        return res.status(401).json("Password does not match");
      });
  }
  else
  {
    return res.status(404).json("User Not Found");
  }
  
}
catch(err)
{
    console.log(err);
    return res.status(801).json(err);
}
};

exports.sendMessage= async (req,res,next)=>{
  try{
    const user=req.user;
  const msg = req.body.msg;
  if(msg){
  const data=await user.createChat({
    message:msg,
  });
  res.status(201).json({message:"Message saved successfully"});
}
}
catch(err)
{
    console.log(err);
    res.status(505).json(err);
}
};
