// let nombre = "Héctor";
let edad = 27;

function persona(nombre, edad){
    return {
        nombre,
        edad,
        saludar(){
            return `Hola, ${this.name}`;
        }
    }
}


// Deconstrucción de objetos
hector = persona('Hector', 27);

let {name, age} = hector; // Ahora name = 'hector', age = 27


function presentarPersona({nombre, edad}){ // podemos deconstruir valores justo en los parámetros de las funcionres.
    console.log(nombre);
    console.log(edad);
    return `Te presento a ${nombre}, tiene ${edad} años`;
}

console.log(presentarPersona(hector));