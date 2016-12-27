// El operador rest (...) toma todos parátros y los guarda en un array

function sumar(...numeros) {
    return numbers.reduce(function(acc, item){
        return acc + item;
    })
}


//  El operador spread toma un array y manda cada elemento de este como
// argumentos para una función

function multiplicar(x, y){
    return x * y;
}

numeros = [3, 5];
console.log(...numeros); // manda  a llamar la función con un parámetro por cada elemento del array