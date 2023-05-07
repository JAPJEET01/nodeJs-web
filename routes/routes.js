const router = require("express").Router()
const multer  = require('multer')
const stucontroller = require("../api/studentController") 
const usercontroller = require("../api/user/userController") 
const brandcontroller = require("../api/brand/brandController") 


const brandstorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/brand')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
    }
  })
  
  const brandupload = multer({ storage: brandstorage })




router.post("/addstudent",stucontroller.addStu)
router.post("/addbrand",brandupload.single('brandLogo'),brandcontroller.addBrand)
router.post("/addstudents",usercontroller.addStu)
router.post("/showstudent",stucontroller.showstu)
router.post("/showone",stucontroller.showone)
router.post("/tempdeleteone",stucontroller.tempdeleteone)
router.post("/delete",stucontroller.delete)
router.post("/update",stucontroller.update)
module.exports = router