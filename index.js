const express = require('express');
const app = express();
const port = 5555;
const home = '/';
const htmlpage = '/html';
const allStudents = [
    {name: "John", age: 20, course: "Computer Science"},
    {name: "Jane", age: 22, course: "Mathematics"},
    {name: "Jim", age: 21, course: "Physics"},
    {name: "Jill", age: 23, course: "Chemistry"},
    {name: "Jack", age: 24, course: "Biology"},
]


app.get('/api', (req,res) =>{
    try{
        res.status(201).json({message:allStudents})
    }
    catch(error){
        res.status(503).json({message: error})
    }
})

app.get(home,(request,response) =>{
    console.log('/ has been accesssd');
    respond.send('can i have cold zobo')
    
})

app.get(htmlpage,(request,response) =>{
    console.log('html called for');
    console.log(__dirname);
    response.sendFile(__dirname + '/index.html');
    
    
})


app.listen(port, () => {
    console.log(`app is running on ${port}`) ;
    
})