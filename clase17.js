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
    altura: 1.53
}

var ariel = {
    nombre: 'Ariel',
    apellido: 'Claros',
    altura: 1.70
}

var personas = [stefanny, osmin, lissette, ariel]

for (var i=0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} tiene ${persona.altura} metros de altura`)
}