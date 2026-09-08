const jwt=require('jsonwebtoken')
const tokenBlacklistModel=require("../models/blacklist.model")
async function authuser(req,res,next){
     console.log("Cookies =>", req.cookies)
    const token=req.cookies.token

    console.log("Token =>", token)
    if(!token){
        return res.status(401).json({
            message:"token not provided"
        })
    }
    const isTokenBlacklisted=await tokenBlacklistModel.findOne({token})
    if(isTokenBlacklisted){
        return res.status(401).json({
            message:"token is invalid"
        })
    }
try{

    const decoded=jwt.verify(token,process.env.JWT_SECRET)
      console.log("Decoded =>", decoded)
    req.user=decoded
    next()
}
catch(err){
    return res.status(401).json({
        message:"invalid token"
    })
}
}
module.exports={
    authuser
}