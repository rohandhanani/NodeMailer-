const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/otpsend")
.then(()=>{
    console.log('connection successfully....');
}).catch((error)=>{
    console.log(error);
})

