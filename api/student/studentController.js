const student = require("./studentModel")

exports.Addstu=(req,res)=>{
    student.findOne({name:req.body.name})
    .then(async data=>{
        if(data != null){
            res.json({
                status:400,
                success:false,
                message:"Student Already exist" 
            }) 
        }
        else{
            let stuobj = new student()
            stuobj.name = req.body.name,
            stuobj.email = req.body.email,
            stuobj.phone = req.body.phone,
            stuobj.age = req.body.age          
            stuobj.save()
            .then(data=>{

                res.json({
                    status:200,
                    success:true,
                    message:"Student Added Successfully",
                    data:data 
                }) 
            })

        }
        })}
