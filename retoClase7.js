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

function imprimirNombreYEdad(dato){
    var {nombre} = dato
    var {edad} = dato
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`)
}

imprimirNombreYEdad(Stefanny)
imprimirNombreYEdad(Ariel)