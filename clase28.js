/*const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const OPTS = {crossDomain: true}

const ON_PEOPLE_RESPONSE = function (lperson) {
    console.log(`Hola, yo soy ${person.name}`)
}

$.get(LUKE_URL, OPTS, ON_PEOPLE_RESPONSE)*/

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

var idPersonaje = prompt('Ingrese el ID del personaje que deseas conocer. (Ejemplo: 1, 2, 3, etc.)')

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', idPersonaje)}`
const OPTS = {crossDomain: true}

const ON_PEOPLE_RESPONSE = function (person) {
    console.log(`Estos son los datos de tu personaje`, arguments)
}

$.get(LUKE_URL, OPTS, ON_PEOPLE_RESPONSE)