const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/postmanapi")
.then(
    console.log("DB CONNECTED")
)


