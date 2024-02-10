const express = require("express");   // import the express

const app = express();

const port = 8000;

//  / -> ' '

// localhost:8000/userw
// localhost:8000


app.get('/',(req,res)=>{
    res.send({Message:"First api request"});
})

app.post('/second',(req,res)=>{
    res.send({Message:"Post method successfully called second one"})
});

app.post('/',(req,res)=>{
    res.send({Message:"Post method successfully called first one"})
});

app.put('/',(req,res)=>{
    res.send({Message:"Put method successfully"})
});

app.patch('/',(req,res)=>{
    res.send({Message:"Patch method successfully"})
});

app.delete('/',(req,res)=>{
    res.send({Message:"Delete method successfully"})
});

app.listen(port,()=>{
    console.log(`Server Started at port ${port}`)
});

// localhost:8000   --> base url


module.exports = app

