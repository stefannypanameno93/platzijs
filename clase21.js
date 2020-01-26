function persona(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
var stefanny = new persona('Stefanny', 'Panameño')
var ariel = new persona('Ariel', 'Claros')
var arturo = new persona('Arturo', 'Navarrete')