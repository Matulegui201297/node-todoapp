const { 
    inquirerMenu, 
    inquirerInput 
} = require ('./helpers/inquirer');

const { 
    getAllTask, 
    createTask 
} = require ('./services/fileService');

const 
TaskRepository = require ('./respositories/task-respository');

const main = async() => {

    const taskRepository = new TaskRepository();
    let option = '';
    const condition = '';
    
    do {
        option = await inquirerMenu ();

        switch (option) {
            case 1:
                const title = await inquirerInput('Task Title');
                createTask(title);
            break;
        
            case 2: 
                const allTask = getAllTask()
                if (tasks.length > 0) {
                    console.log(allTask);
                } else {
                    console.log("There are not task!".red);
                }
            break;
        }
    }  
    
    while (condition !== 'X');
};

main();