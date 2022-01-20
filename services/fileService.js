const colors = require ('colors');
const TaskRepository = require ('../respositories/task-respository');
const taskRepository = new TaskRepository();

const getAllTask = () => {
    const tasks = taskRepository.getAllTask().map((task) => {
        if (task.done === true) {
            return {
                title: task.tile,
                done: "Completed",
                created: task.created,
                finished: task.finished,
            };
        }

        return {
            title: task.title,
            done: "UNFINISHED",
            cread: task.created,
        };
    });
    
    return tasks;
}

const createTask = (title) => {
    taskRepository.createTask(title);
}

module.exports = {
    getAllTask,
    createTask,
}
