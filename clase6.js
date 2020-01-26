var Stefanny = {
    nombre: 'Stefanny',
    apellido: 'Panameño',
    edad: 26,
    peso: 53
}

var Ariel = {
    nombre: 'Ariel',
    apellido: 'López',
    edad: 25,
    peso: 75
}

function imprimirNombreMayusculas({nombre}){
    console.log(nombre.toUpperCase())
}

imprimirNombreMayusculas(Stefanny)
imprimirNombreMayusculas(Ariel)
//imprimirNombreMayusculas({nombre: 'Pepito'})
imprimirNombreMayusculas({apellido: 'Gomez'})