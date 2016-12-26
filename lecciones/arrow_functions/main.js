class TaskCollections{
    constructor(task = []){
        this.tasks = tasks;
    }

    log(){
        this.tasks.forEach(task => console.log(task));
    }
}


let nombres = ["Héctor", "Iván"]

nombres = nombres.map(nombre => "Hola " + nombre);