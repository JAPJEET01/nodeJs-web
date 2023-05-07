const brandschema = require("./brandModel")

exports.addbrand=(req,res)=>{
    brandschema.findOne({brandname:req.body.brandname})
    .then(async data=>{
        if(data!=null){
            res.json({
                status:400,
                success:false,
                message:"Brand already exist"
        })
    }
    else{
        let brandobj = new brandschema()
        brandobj.brandname = req.body.brandname
        if(req.file){
            brandobj.brandLogo = "brand/"+ req.file.filename

        }
        brandobj.save()
        .then(data=>{
            res.json({
                status:200,
                success:true,
                message:"Brand Added Succesffully",
                data:data
            
            })
            
        })
    }
})
}