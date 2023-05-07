let brand =  require("./brandModel")


exports.addBrand=((req,res)=>{
    console.log(req.file)
    console.log(req.body)
    let brandobj = brand() 
    brandobj.brandName = req.body.brandName,
    brandobj.brandLogo = "brand/"+req.file.filename 
    brandobj.save()
    .then((data=>{
       
       res.json({
           status:200,
           success:true,
           meassage:"brand added successfully",
          date:data
       })
    }))

})


