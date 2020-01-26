var Stefanny = {
    nombre: 'Stefanny',
    edad: 26,
}

var Carlos = {
    nombre: 'Carlos',
    edad: 8,
}

const MAYORIA_EDAD = 18

const esMenorDeEdad = ({edad}) => edad < MAYORIA_EDAD


function permitirDenegarAcceso(persona){
if (esMenorDeEdad(persona)){
    console.log(`${persona.nombre} tiene ${persona.edad} años. ACCESO DENEGADO`)
} else {
        console.log(`${persona.nombre} tiene ${persona.edad} años. ACCESO PERMITIDO`)
    }
    }

permitirDenegarAcceso(Stefanny)
permitirDenegarAcceso(Carlos)
