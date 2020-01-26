function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function persona(nombre, apellido, estatura){
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
}

/*persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.soyAlto = function () {
    return this.estatura >= 1.7
}*/

//ARROW FUNCTIONS

persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
} 

persona.prototype.soyAlto = function() {
    return this.estatura > 1.7
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}. Soy desarrolladora.`)
}



var stefanny = new persona('Stefanny', 'Panameño', 1.53)
var ariel = new persona('Ariel', 'Claros', 1.7)
var arturo = new persona('Arturo', 'Navarrete', 1.8)