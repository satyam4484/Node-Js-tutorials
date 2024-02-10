const express = require("express");   // import the express

const app = express();

const port = 8000;

app.get('/',function(req,res){
    res.send({Message:"Welcome to nodejs tutorial"});
});

app.listen(port,()=>{
    console.log(`Server Started at port ${port}`)
})

