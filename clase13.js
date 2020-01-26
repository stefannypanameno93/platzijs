var Stefanny = {
    nombre: 'Stefanny',
    apellido: 'Panameño',
    edad: 26,
    peso: 55
}

console.log(`Al inicio del año, ${Stefanny.nombre} pesa ${Stefanny.peso}kg`)

/*function aumentarDePeso(persona){
    persona.peso += 200
}*/

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()
    if(random < 0.25){
        //aumenta de peso
        aumentarDePeso(Stefanny)
    } else if(random < 0.5){
        //adelgazar
        adelgazar(Stefanny)
    }
}

console.log(`Al final del año, ${Stefanny.nombre} pesa ${Stefanny.peso.toFixed(1)}kg`)