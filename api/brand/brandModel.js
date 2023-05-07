const mongoose = require("mongoose")
let BrandSchema = new  mongoose.Schema({
    brandName:{ type :String, default:"" },
    brandLogo:{ type :String, default:"no-image.jpg" },
    CreratedAt:{ type :Date, default:Date.now() }
}) 

module.exports = new mongoose.model("brand",BrandSchema)