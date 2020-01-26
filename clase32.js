/*
    new Promise (function(resolve, reject){
    }).then(valor => {
        ...
    }).catch(err =>{
        ...
    })
*/

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = {crossDomain: true}

obtenerPersonaje = (id) => {
    //console.log(id)
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(URL, OPTS, function(data){
        resolve(data)
    }).fail = () => reject(id)

    })
}
    
const onError = (id) => console.log(`Sucedió un error al llamar al personaje ${id}`)

obtenerPersonaje(1)
    .then(function (personaje){
        console.log(`El personaje 1 es ${personaje.name}`)
    })
    .catch(onError)