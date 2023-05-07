const user = require("./Usermodel")

exports.addStu=(req,res)=>{
    let stuobj = user()
    stuobj.name = req.body.name,
    stuobj.age = req.body.age,
    stuobj.phone = req.body.phone,
    stuobj.email = req.body.email,
    stuobj.save()
    .then(data=>{
        res.json({
            success:200,
            status:true,
            message:"STUDENT ADDED SUCCESSFULLTY",
            data:data,


        })
    })
}

exports.showstu=(req,res)=>{
    student.find(req.body).exec()
    .then(data=>{
        res.json({
            success:200,
            status:true,
            message:"STUDENT ADDED SUCCESSFULLTY",
            data:data

        })
    })

}
exports.showone=(req,res)=>{
    student.findOne(req.body.id).exec()
    .then(data=>{
        res.json({
            success:200,
            status:true,
            message:"STUDENT ADDED SUCCESSFULLTY",
            data:data

        })
    })

}