const express = require("express")
const app = express()
const db = require("./config/db")
const routes = require("./routes/routes")
app.use(express.urlencoded({ extended: true }));




app.listen(3005,()=>{
    console.log("server running at 3005")
})
app.use("/admin",routes)
app.use("/",(req,res)=>{
    res.json({
        success: 200,
        status:true,
        message: " my first api using postman"
    })

})