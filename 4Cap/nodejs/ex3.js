const prompt = require("prompt-sync")()
const numero = Number(prompt("Número (centena): "))
if (numero < 100 || numero >= 1000) {
    console.log("Error... deve ser uma centena")
    return 
}
const num1 = Math.floor(numero / 100) //obtem um numero
const sobra = numero % 100
const num2 = Math.floor(sobra / 10) //obtem 2 numero
const num3 = sobra % 10 // obtem 3 numero
console.log(`Invertido: ${num3}${num2}${num1}`)
