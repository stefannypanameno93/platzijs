var signoZodiacal = prompt('¿Cuál es tu sigo zodiacal?').toUpperCase()

const SIN_TILDES = (cadena) => { var chars = {
    "á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
		"à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u", "ñ":"n",
		"Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
        "À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U", "Ñ":"N"
}
var expr = /[áéíóú]/ig;
var resp = cadena.replace(expr,function(e){return chars[e]})
return resp
}
console.log(signoZodiacal)

signoZodiacal = SIN_TILDES(signoZodiacal)

switch (signoZodiacal) {
    case 'aries':
        console.log('Deberá dedicar esta jornada a aprender de las experiencias negativas y positivas que viva. De esta forma, mañana podrá enseñarle a otros lo vivido.')
        break

    case 'tauro':
        console.log('Será de suma importancia que empiece a moderar cada uno de sus impulsos y piense dos veces antes de tomar una determinación fundamental en su vida.')    
        break

    case 'GEMINIS':
        console.log('Probablemente será un periodo de dudas y cierto negativismo con la gente que se rodea. Momento para conocer gente nueva y cambiar el entorno afectivo.')
        break

    case 'cancer':
        console.log('Deje de presionarse, ya que el tiempo actuará a su favor. En esta jornada, su tenacidad y optimismo serán puestos a prueba y tendrá muy buenos resultados.')
        break

    case 'leo':
        console.log('Deje de ser tan obstinado en la vida. Intente ver más allá de lo que su manía le permite, ya que pronto se dará cuenta que estaba equivocado.')
        break

    case 'virgo':
        console.log('Aprenda que nunca hay que olvidarse del pasado, solo hay que tomar distancia de aquellas situaciones o momentos que le quitan el buen ánimo.')
        break

    case 'libra':
        console.log('Comprenda que muchas veces la libertad no es peligrosa en la vida. A veces nos ayuda a asomar lo mejor que uno tiene en su interior y no lo demuestra.')
        break

    case 'escorpio':
        console.log('Sepa que será muy positivo para sus relaciones que modifique esa exigencia que tiende a corregir los detalles sin importancia de las personas.')
        break

    case 'sagitario':
        console.log('Sería bueno que no se empecine y escuche a su entorno. De esta forma, aprenderá de los demás y podrá cambiar de manera positiva su punto de vista.')
        break

    case 'capricornio':
        console.log('Tener la Luna en su signo, le hará recuperar su propia energía. Sepa que podrá ganar mucha más confianza y seguir avanzando en cada uno de los proyectos.')
        break

    case 'acuario':
        console.log('Aunque todo cambio le genere inseguridad, ya es el momento para que avance en su vida. No dude en arriesgar por más que tenga obstáculos en el camino.')
        break

    case 'piscis':
        console.log('En este día, trate de desplegar en primer lugar sus propios deseos, proyectos y trasmítaselos a su vínculo cercano. Ellos sabrán acompañarlo en todo.')
        break

    default:
        console.log('No es un signo zodiacal válido')
        break


}