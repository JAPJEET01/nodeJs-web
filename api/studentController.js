const student = require("./studentModel")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
exports.addStu=(req,res)=>{
    let stuobj = student()
    stuobj.name = req.body.name,
    stuobj.age = req.body.age,
    stuobj.phone = req.body.phone,
    stuobj.email = req.body.email,
    stuobj.password = bcrypt.hashSync((req.body.password), saltRounds )
    stuobj.save()
    .then(data=>{
        res.json({
            success:200,
            status:true,
            message:"STUDENT ADDED SUCCESSFULLTY",
            data:data,
            UserId : data._id

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
exports.tempdeleteone=(req,res)=>{
    student.findOne({_id:req.body._id}).exec()
    .then(data=>{
        res.json({
            success:200,
            status:false,
            message:"STUDENT DELETED SUCCESSFULLTY",
            data:data
            
        })
    })

}
exports.update=(req,res)=>{
    student.findOne({_id:req.body._id}).exec()
    .then(data=>{
        if(data!= null){
            data.name = req.body.name,
            data.age = req.body.age,
            data.phone = req.body.phone,
            data.email = req.body.email,
            data.password = req.body.password,
            data.save()
            res.json({
                status:200,
                success:true,
                data:data,
                message:"STUDENT UPDATED SUCCESSFULLTY",
                
            })
        }
        else{
            res.json({
                status:200,
                success:true,
                message:"data not found"
            })
        }
    })

}

exports.delete=(req,res)=>{
    student.findOne({_id:req.body._id}).exec()
    .then(data=>{
        if(data != null){

            student.deleteOne({_id:req.body._id})
            .then(()=>{

                res.json({
                success:200,
                status:true,
                message:"STUDENT DELETED SUCCESSFULLTY",
                        
                    })
            }

            )
        }
        else{
            res.json({
                success:200,
                status:false,
                message:"data not found",

            })
        }
    })

}