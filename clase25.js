class persona {
    constructor(nombre, apellido, estatura){
        this.nombre = nombre
        this.apellido = apellido
        this.estatura = estatura
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto(){
        return this.estatura > 1.7
    }
}

class Desarrollador extends persona {
    constructor(nombre, apellido, estatura) {
        super(nombre, apellido, estatura)
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}. Soy desarrolladora.`)
    }
    
}

/*persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.soyAlto = function () {
    return this.estatura >= 1.7
}*/

//ARROW FUNCTIONS









var stefanny = new persona('Stefanny', 'Panameño', 1.53)
var ariel = new persona('Ariel', 'Claros', 1.7)
var arturo = new persona('Arturo', 'Navarrete', 1.8)