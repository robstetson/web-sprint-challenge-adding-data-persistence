// build your `Resource` model here
const database = require("../../data/dbConfig");

function getAll() {
  return database('resources')
}

function getById(id) {
  return database('resources').where('resource_id', id).first()
}

function newResource(resource){
return database('resources').insert(resource)
.then(([id])=> getById(id))
}

module.exports = {
    getAll,
    getById,
    newResource,
}