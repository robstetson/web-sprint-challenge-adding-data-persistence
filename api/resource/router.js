// build your `/api/projects` router here
const express = require('express')
const Resource = require('./model')
const router = express.Router()

router.get('/', async (req,res, next)=>{
  try{
const resources = await Resource.getAll()
res.json(resources)
  }catch (error){
    next(error)
  }
})

router.post('/', async (req,res, next)=>{
 try{
     const resource = await Resource.newResource(req.body)
     res.json(resource)
 }catch(error){
     next(error)
 }
})
module.exports = router