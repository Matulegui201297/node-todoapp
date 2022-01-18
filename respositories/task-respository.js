const Task = require ('../models/task');

class TaskRepository {
    
    _tasks = null;
    
    constructor(){
        this._tasks = [];
    }

    getAllTask(){

    }
/**
 * 
 * @param {String} title 
 *
 *  Todo: falta persistir datos en archivo
 *
*/
    createTask(title){
        const Tasks = new Task(title);
        this._tasks.push(task);
        return this._tasks;
    }

    deleteTask (){

    }

    completeTask(){

    }
}

module.exports = TaskRepository