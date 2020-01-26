function persona(nombre, apellido, estatura){
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
}


const estaturaAlta = 1.7

persona.prototype.saludo = function () {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}. Mido ${this.estatura}.`)
}

persona.prototype.decirAltura = function () {
    if (this.estatura >= estaturaAlta) {
        console.log('Soy alto.')
    } else {
        console.log('No soy alto.')
    }
}

var stefanny = new persona('Stefanny', 'Panameño', 1.53)
var ariel = new persona('Ariel', 'Sanz', 1.7)
var arturo = new persona('Arturo', 'Navarrete', 1.8)

