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

persona.prototype.saludar = () => {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
} 

persona.prototype.soyAlto = () => this.estatura >= 1.7

var stefanny = new persona('Stefanny', 'Panameño', 1.53)
var ariel = new persona('Ariel', 'Claros', 1.7)
var arturo = new persona('Arturo', 'Navarrete', 1.8)