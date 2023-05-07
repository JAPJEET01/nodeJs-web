const express = require("express")
const app  = express()
const db = require("./config/db")
const router = require("./routes/routes")
const port = 3004
app.use(express.urlencoded({extended:true}))
app.use("/admin",router)

app.listen(port,()=>{
    console.log("server nunning at " ,  port)
})