const database = require('../../data/dbConfig')

async function getTasks(){
    const tasks = await database('tasks')
    return tasks.map((task)=>{
        return{
            ...task,
            task_completed: task.task_completed === 1,
        }
    })
    }
    
    async function findById(id){
        const row = await database('tasks')
        .where('task_id', id)
        .first()
    
        return {
            ...row, 
            task_completed: row.task_completed ? true : false
        }
    }
    
    
    async function insert(task){
     const [id]= await database('tasks')
     .insert(task)
    
     return findById(id)
    }
    module.exports = {
        getTasks,
        findById,
        insert,
    }