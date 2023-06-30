const prompt = require("prompt-sync")() // adiciona o pacote ao programa
const salario = prompt("Salário: ")
const tempo = prompt("Tempo (anos): ")
const quadrienios = Math.floor(tempo / 4) // calcular o quadrienios
const acrescimo = salario * quadrienios / 100
console.log(`Quadriênios: ${quadrienios}`)
console.log(`Salário Final R$: ${(salario+acrescimo)}`)

