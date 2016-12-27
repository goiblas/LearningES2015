// let nombre = "Héctor";
let edad = 27;/

function persona(nombre, edad){
    return {
        name,
        edad,
        saludar(){
            return `Hola, ${this.name}`;
        }
    }
}


// Deconstrucción de objetos
hector = persona('Hector', 27);

let {name, age} = hector; // Ahora name = 'hector', age = 27


function deconstructPersona({name, age}){
    console.log(name);
    console.log(persona);
}

deconstructPersona(hector);