var Stefanny = {
    nombre: 'Stefanny',
    edad: 26,
}

var Carlos = {
    nombre: 'Carlos',
    edad: 8,
}

function imprimirSiEsMayorDeEdad(persona){
    if(persona.edad >= 18){
        console.log(`${persona.nombre} tiene ${persona.edad} años, es mayor de edad.`)
     } else {

            console.log(`${persona.nombre} tiene ${persona.edad} años, es menor de edad.`)
        }
}

imprimirSiEsMayorDeEdad(Stefanny)
imprimirSiEsMayorDeEdad(Carlos)