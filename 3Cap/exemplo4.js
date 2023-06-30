const prompt = require("prompt-sync")() //adiciona o pacote do programa
const pesoKg = Number(prompt("Peso da ração (Kg): ")) //lê dados de entrada
const consumo = Number(prompt("Consumo Diário (gr): "))
const pesoGr = pesoKg * 1000 //cria variavel auxiliar pesoGr
const duracao = Math.floor(pesoGr / consumo) //calcular resposta
const sobra = pesoGr % consumo
console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)