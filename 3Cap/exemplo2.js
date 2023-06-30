const prompt = require("prompt-sync")() // adiciona o pacote ao programa
const veiculo = prompt("Veiculo: ") //lê os dados de entrada
const preco = Number(prompt("Preço R$: "))
const entrada = preco * 0.50 // calcular valor das entradas
const parcela = (preco * 0.50) / 12 // calcular valor das parcelas
console.log(`Promoção: ${veiculo}`) // exibe as respostas
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)
