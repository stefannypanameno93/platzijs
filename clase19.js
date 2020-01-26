var stefanny = {
    nombre: 'Stefanny',
    apellido: 'Panameño',
    altura: 1.53
}

var osmin = {
    nombre: 'Osmín',
    apellido: 'López',
    altura: 1.70
}

var lissette = {
    nombre: 'Lissette',
    apellido: 'Navarrete',
    altura: 1.65
}

var ariel = {
    nombre: 'Ariel',
    apellido: 'Claros',
    altura: 1.80
}

const esAlta = ({altura}) => altura >= 1.6

var personas = [stefanny, osmin, lissette, ariel]

var personasAltas = personas.filter(esAlta)

//var personasAltas = personas.filter(function(persona){
    //return persona.altura > 1.6
//})

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura*100
})

/*{
    //persona.altura = persona.altura*100
    //persona.altura *= 100
    //return persona

    return {
        ...persona,
        altura: persona.altura * 100
    }
}*/

var estaturaCms = personas.map(pasarAlturaACms)
console.log(estaturaCms)