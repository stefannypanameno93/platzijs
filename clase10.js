var Stefanny = {
    nombre: 'Stefanny',
    apellido: 'Panameño',
    edad: 26,
    ingeniero: true,
    cantante: true,
    policia: false,
    cajera: false,
    designer: true
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)

    if(persona.ingeniero){
        console.log('Ingeniero')
    }
    
    if(persona.cantante){
        console.log('Cantante')
    }

    if(persona.policia){
        console.log('Policía')
    }

    if(persona.cajera){
        console.log('Cajera')
    }

    if(persona.designer){
        console.log('Diseñadora')
    }
}

imprimirProfesiones(Stefanny)