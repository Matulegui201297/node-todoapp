const { inquirerMenu, inquirerInput } = require ('./helpers/inquirer');
const TaskRepository = require ('./respositories/task-respository');


const main = async() => {

    const taskRepository = new TaskRepository();
    let option = '';
    const condition = '';
    
    do {
        option = await inquirerMenu ();

        switch (option) {
            case 1:
                //Todo: hacer que el usuario puedo ingresar el titulo de la tarea
                console.log('El usuario selecciono la option crear tarea');
               
                const title = await inquirerInput('Task Title')
                console.log(title);
               
                taskRepository.createTask(title);
            
                break;
            case 2: 
                //Todo: mostrar la lista de tarea de la bbdd
                const allTask = taskRepository.getAllTask()
                console.log(allTask);
            break;
        }
    }  
    
    while (condition !== 'X') {
    
    };

}

main();