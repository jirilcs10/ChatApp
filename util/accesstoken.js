const jwt=require('jsonwebtoken')

exports.generateAccessToken=function (id)
{
  return jwt.sign({userId:id},process.env.SECURE_STRING);
}