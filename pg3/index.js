const express = require("express")
const app = express()

app.use(express.json())   // middleware

// -----------------------------------------

let tasks=[
    {id:1,name:"Perform Get Operation",description:"Used to get the all task data"}
]

app.get('/task',(req,res)=>{
    res.send({message:"All Tasks Retrived",tasks});
})

app.post('/task',(req,res) => {
    const data = req.body;
    // const task = {id:todos.length + 1,name:data.name,description:data.description};
    const task = {id:tasks.length + 1,...data};
    tasks.push(task);
    res.send({message:"Task Added Successfully",task})
});

app.patch('/task/:id',(req,res)=>{
    const id = req.params.id;
    const data =  req.body;
    const index = tasks.findIndex(task => task.id === parseInt(id));
    tasks[index].name = data.name;
    res.send({message:"Task Updated Successfully",task:tasks[index]})
})

app.delete('/task/:id',(req,res)=>{
    const id = req.params.id;
    tasks=tasks.filter(task => task.id != parseInt(id));
    res.send({message:"Task Deleted Successfully"});
})











app.listen(8000,()=>{
    console.log("Server started at port 8000");
});

module.exports = app;