const mongoose  = require ("mongoose")
mongoose.connect("mongodb://localhost:27017/jpajeetsingh_tech")
.then(
    console.log("DATABASE CONNECTED NAMED (japjeetb singh.tech)")
)