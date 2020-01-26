var stefanny = {
    nombre: 'Stefanny',
    apellido: 'Panameño',
    altura: 1.53
}

var sara = {
    nombre: 'Sara',
    apellido: 'López',
    altura: 1.70
}

var lissette = {
    nombre: 'Lissette',
    apellido: 'Claros',
    altura: 1.65
}

var silvia = {
    nombre: 'Silvia',
    apellido: 'Martínez',
    altura: 1.80
}

 const esBajita = (persona) => {
     return persona.altura < 1.7
 }

 var personas = [stefanny, sara, lissette, silvia]

 var personasBajitas = personas.filter(esBajita)

 console.log(personasBajitas)