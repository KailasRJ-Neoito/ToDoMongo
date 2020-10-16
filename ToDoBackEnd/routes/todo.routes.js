const express = require('express')
const todo = require('../controller/todo.controller')



const router=express.Router()



router.get('/',todo.get);
router.get('/:id',todo.getid);
router.post('/', todo.create);
router.put('/:id',todo.update);
router.delete('/:id',todo.delete);


module.exports=router;

