const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = {crossDomain: true}

obtenerPersonaje = (id, callback) => {
    //console.log(id)
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(URL, OPTS, function (persona){
        console.log(`Hola, yo soy ${persona.name}`)

        if (callback){
            callback()
        }
    })
}

obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function (){
        obtenerPersonaje(3, function (){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5)
            })
        })
    })
    
})

