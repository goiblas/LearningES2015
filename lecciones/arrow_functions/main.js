class TaskCollections{
    constructor(task = []){
        this.tasks = tasks;
    }

    log(){
        this.tasks.forEach(task => console.log(task));
    }
}