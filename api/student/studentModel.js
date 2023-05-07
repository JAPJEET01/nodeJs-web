const mongoose= require("mongoose")
const stuSchema = new mongoose.Schema({
    name:{type:String,default:""},
    email:{type:String,default:""},
    phone:{type:String,default:""},
    age:{type:String,default:""},
    status:{type:Boolean ,default:true},
    createdAt:{type:Date,default:Date.now()},
})
module.exports= new mongoose.model("student",stuSchema)