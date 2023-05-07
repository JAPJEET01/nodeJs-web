const router = require("express").Router()
const studentController = require("../api/student/studentController")
const brandController = require("../api/brand/brandController")
const multer  = require('multer')

router.post("/addStudent",studentController.Addstu)

const brandstorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/brand')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname )
    }
})

const brandupload = multer({ storage: brandstorage })
router.post("/addbrand",brandupload.single('brandLogo'),brandController.addbrand)

module.exports=router