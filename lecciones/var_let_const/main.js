
function hacer_algo(condicion){
    // var uno;  // esto sucede por el hoisting

    if(condicion){
        var uno = "La condición se cuplió";
        console.log(uno);
    } else {
        console.log(uno); // undefined, esperábamos un error de indefinición
    }

}


// let
function hacer_algo(condicion){
    // var uno;  // esto sucede por el hoisting

    if(condicion){
        let uno = "La condición se cuplió"; // variable 'uno'  no se lleva al bloque tope, no funciona el hoisting, crea una variable a nivel de bloque
        console.log(uno);
    } else {
        console.log(uno); // undefined, esperábamos un error de indefinición
    }

}

// const

const una_variable = "asignación no modificable"; // no crea un valor inmutable

// constan no permite reasigna r el

const meses = ["Octubre", "Noviembre", "Diciembre"] // Esto debería ser un valor constante e inmutable para los demás programadores

meses.shift("Septiembre") // Funciona pero rompe un poco la idea declarar constantes

