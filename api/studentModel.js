const mongoose= require("mongoose")
const schemaa = new mongoose.Schema({
    name : {type:String , default:""},
    UserId: {type:mongoose.Types.ObjectId,ref:'user' , default:null},
    age : {type:String , default:""},
    phone : {type:String , default:""},
    email : {type:String , default:""},
    password : {type:String , default:""},
    createdAt : {type:Date , default:Date.now()},
}
    )
module.exports= new mongoose.model("student",schemaa)