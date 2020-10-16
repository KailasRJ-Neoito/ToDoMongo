const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const todo = require('./routes/todo.routes');
const app=express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/ToDoList', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});


app.use('/todo',todo)
const port=process.env.PORT || 9000;
app.listen(port,()=>{
    console.log("Server Listen @",port);
})