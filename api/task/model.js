const database = require('../../data/dbConfig')


async function getTasks(){
 const newTask = await database('task as t')
.leftJoin('projects as p',{
    'p.project_id':'t.project_id'
})
return newTask.map(np=>{
    return({
        task_id: np.task_id,
        task_description: np.task_description,
        task_notes: np.task_notes,
        task_completed: np.task_completed,
        project_name: np.project_name,
        project_description: np.project_description,
    })
})
}
    
const createTask= async (newTask)=>{
const added = await database('tasks')
.insert(newTask)
.then(([task_id])=>{
    return database('tasks')
    .where('task_id', task_id)
    .first()
})
return added
}
    
    module.exports = {
        getTasks,
        createTask,
    }