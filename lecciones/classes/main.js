class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    cambiarEmail(email_nuevo){
        this.email = email_nuevo;
    }
    get edad_calc(){
        return this.edad * 12
    }
    set edad_calc(edad){
        this.edad = edad/12
    }
}

let usuario = new Usuario("Hector", "hectorip@devf.mx");

usuario.cambiarEmail("nuevo@gmail.com");

usuario.edad_calc = 72;
console.log(usuario.edad_calc);
console.log(usuario.edad);