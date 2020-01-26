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

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random()  < 0.4

const PESO_META = Stefanny.peso - 3

var dias = 0

while (Stefanny.peso > PESO_META) {

    if (comeMucho()) {
        //aumentar de peso
        aumentarDePeso(Stefanny)
    } 
    if (realizaDeporte()) {
        //baja de peso
        adelgazar(Stefanny)
    }
    dias += 1
}

console.log(`Al final del día ${dias}, ${Stefanny.nombre} pesa ${Stefanny.peso.toFixed(1)}kg`)