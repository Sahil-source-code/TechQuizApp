const mongoose=require("mongoose")
const blacklistTokenSchema=new mongoose.Schema({
    token:{
        type:String,
        required:[true,"tokjen uis required for blacklisting"]
    }
},{
    timestamps:true
})
const tokenBlacklistModel=mongoose.model("blackListTokens",blacklistTokenSchema)
module.exports=tokenBlacklistModel