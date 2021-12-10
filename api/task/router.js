const router = require('express').Router()
const Task = require('./model')

router.get('/', (req,res, next)=>{
    Task.getTasks()
    .then((task)=>{
    res.json(task)
    }).catch(next)
})

router.post('/', async (req,res, next)=>{
    try{
        const tasks = await Task.insert(req.body)
        res.status(201).json(tasks)
    }catch (error){
        next(error)
    } 
})
module.exports = router