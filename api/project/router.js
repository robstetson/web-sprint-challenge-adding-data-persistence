// build your `/api/projects` router here
// const express = require('express')
const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req,res, next)=>{
Project.getProjects()
.then((projects)=>{
res.json(projects)
}).catch(next)
})

router.post('/', async (req,res, next)=>{
try{
    const project = await Project.insert(req.body)
    res.status(201).json(project)
}catch (error){
    next(error)
}
}) 
module.exports = router