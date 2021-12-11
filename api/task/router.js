const express = require('express')
const Task = require('./model')
const router = express.Router()

router.get('/', async (req,res, next)=>{
Task.getTasks()
.then(task =>{
    res.json(task)
})
.catch(next)
})

router.post('/',(req,res, next)=>{
Task.createTask(req.body)
.then(newTask =>{
    res.json(newTask)
})
.catch(next)
})
module.exports = router