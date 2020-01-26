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

function imprimirNombreMayusculas(persona){
    //var nombre = persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreMayusculas(Stefanny)
imprimirNombreMayusculas(Ariel)
//imprimirNombreMayusculas({nombre: 'Pepito'})
//imprimirNombreMayusculas({apellido: 'Gomez'})

function cumple(persona){

    return{
        ...persona,
        edad: persona.edad + 1
    }
    
}
