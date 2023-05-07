const router = require("express").Router()
const studentController = require("../api/student/studentController")

router.post("/addStudent",studentController.Addstu)

module.exports=router