const mongoose = require('mongoose');

var ToDoSchema = new mongoose.Schema({
    itemname:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('Todo', ToDoSchema);