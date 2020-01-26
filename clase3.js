var edad = 26

//edad = edad + 1
edad += 1

var peso = 53

//peso = peso - 1
peso -= 1

var panini = 1

peso = peso + panini

var hacerEjercicio = 5

peso -= hacerEjercicio

var precioVino = 200.3

//var totalCarrito = precioVino * 3
//var totalCarrito = precioVino * 100 * 3 /100
var totalCarrito = Math.round(precioVino * 100 * 3) / 100
var totalStr = totalCarrito.toFixed(2)
var total2 = parseFloat(totalStr)

var pizza = 8 
var persona = 2
var cantidadPorcionesPersona = pizza / persona
