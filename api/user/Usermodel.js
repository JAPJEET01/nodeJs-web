const mongoose= require("mongoose")
const schemaa = new mongoose.Schema({
    name : {type:String , default:""},
    age : {type:String , default:""},
    phone : {type:String , default:""},
    email : {type:String , default:""},
    createdAt : {type:Date , default:Date.now()},
}
    )
module.exports= new mongoose.model("user",schemaa)