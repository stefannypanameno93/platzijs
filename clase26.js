class persona {
    constructor(nombre, apellido, estatura){
        this.nombre = nombre
        this.apellido = apellido
        this.estatura = estatura
    }
    saludar(fn){
        //var {nombre, apellido} = thiss
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if (fn){
            fn(this.nombre, this.apellido)
        }
    }
    soyAlto(){
        return this.estatura > 1.7
    }
}

class Desarrollador extends persona {
    constructor(nombre, apellido, estatura) {
        super(nombre, apellido, estatura)
    }
    saludar(fn){
        var nombre = this.nombre
        var apellido = this.apellido

        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}. Soy desarrollador/a.`)
        if (fn){
            fn(nombre, apellido, true)
        }
    }
    
}

function responderSaludo( nombre, apellido, esDev){
    console.log(`Buenos días ${nombre} ${apellido}`)

    if (esDev){
        console.log(`No sabía quer eres desarrollador/a`)
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
var arturo = new Desarrollador('Arturo', 'Navarrete', 1.8)

stefanny.saludar()
ariel.saludar(responderSaludo)
arturo.saludar(responderSaludo)