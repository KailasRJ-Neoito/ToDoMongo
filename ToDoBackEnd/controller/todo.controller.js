const todo = require('../models/todo.models')


exports.create = (req,res)=>{

    console.log(req.body);
    const newitem=new todo({
        itemname:req.body.todo
    })
    newitem.save().then((result)=>{
        console.log("IN THEN")
        res.status(200).json({message:"Inserted"})
    }).catch(err=>{
        console.log("IN REJECTED")
        res.status(500).json({
            message:"error",
            error:err
        })
    })
}

exports.update = (req,res)=>{
    todo.findByIdAndUpdate(req.params.id,req.body).then((result)=>{
        res.status(200).json({message:"Updated"})
            }).catch(err=>{
                res.status(500).json({
                    message:"error",
                    error:err
                })
            })
}

exports.get = (req,res)=>{
    todo.find({}).then((result)=>{
        res.status(200).json(result)
    }).catch(err=>{
        res.status(500).json({
            message:'Error',
            error:err
        })
    })
}

exports.delete = (req,res)=>{
    todo.findByIdAndDelete(req.params.id).then((result)=>{
        res.status(200).json({message:"Deleted"})
            }).catch(err=>{
                res.status(500).json({
                    message:"error",
                    error:err
                })
            })
}

exports.getid = (req,res)=>{
    todo.findById(req.params.id).then((result)=>{
        res.status(200).json(result)
    }).catch(err=>{
        res.status(500).json({
            message:'Error',
            error:err
        })
    })
}