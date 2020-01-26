var Stefanny = {
    nombre: 'Stefanny',
    edad: 26,
}

var Carlos = {
    nombre: 'Carlos',
    edad: 8,
}

const MAYORIA_EDAD = 18

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} tiene ${persona.edad} años, es mayor de edad.`)
     } else {

            console.log(`${persona.nombre} tiene ${persona.edad} años, es menor de edad.`)
        }
}

imprimirSiEsMayorDeEdad(Stefanny)
imprimirSiEsMayorDeEdad(Carlos)