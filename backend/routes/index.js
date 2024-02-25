const express = require("express");
const router = express.Router();

const { validateTodo, validateId } = require("../middlewares");
const Todo = require("../db");

router.get("/todos", async (req, res, next) => {
    try{
        const dbResponse = await Todo.find({}).exec()
        res.status(200).json({"todos": dbResponse})
    }catch(err){
        next(err)
    }
});

router.post("/todo", validateTodo, async (req, res, next) => {
    const todo = req.body
    try{
        const dbResponse = await Todo.create({
            ...todo, 
            completed: false
        })
        res.status(200).json({'msg': dbResponse})
    }catch(err){
        console.log(err)
        next(err)
    }
});

router.put("/completed", validateId, async (req, res, next) => {
    try{
        const dbResponse = await Todo.updateOne({_id: req.body.id}, {completed: req.body.completed}).exec()
        res.status(200).json({'msg': dbResponse})
    }catch(err){
        next(err)
    }
});

router.all('*', (req, res)=>{
    res.status(404).json({err: 'endpoint not found'})
})

router.use((err, req, res, next)=>{
    res.status(500).json(err)
})

module.exports = router;
