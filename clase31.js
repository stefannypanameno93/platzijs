const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = {crossDomain: true}

obtenerPersonaje = (id, callback) => {
    //console.log(id)
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(URL, OPTS, callback).fail = () => {
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
    }
    
}

obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)
    
    obtenerPersonaje(2, function (personaje){
        console.log(`Hola, yo soy ${personaje.name}`)
        
        obtenerPersonaje(3, function (personaje){
            console.log(`Hola, yo soy ${personaje.name}`)
           
            obtenerPersonaje(4, function(personaje){
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function (personaje){
                    console.log(`Hola, yo soy ${personaje.name}`)
                })
            })
        })
    })
    
})

