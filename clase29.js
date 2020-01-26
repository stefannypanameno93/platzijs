const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = {crossDomain: true}

const ON_PEOPLE_RESPONSE = function (person) {
    console.log(`Hola, yo soy ${person.name}.`)
}

const obtenerPersonaje = (id) => {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(URL, OPTS, ON_PEOPLE_RESPONSE)
}

const requests = () => {
        
    for (var i=0; i<=20; i++){
        console.log(`${i}.${obtenerPersonaje(i)}`)
    }
    
}
requests()


