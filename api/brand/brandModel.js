const mongoose = require("mongoose")
const brandschema  = new mongoose.Schema({
    brandname :{type:String,default:""},
    brandLogo :{type:String,default:"no-img.jpg" },
    status :{type:Boolean ,default:true},
    createdAt:{type:Date,default:Date.now()}
})
module.exports= new mongoose.model("brand",brandschema)