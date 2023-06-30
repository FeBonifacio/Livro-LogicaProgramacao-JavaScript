const prompt = require('prompt-sync')()
const produto = prompt("Produto: ")
const num = Number(prompt("N° de Etiquetas: "))

for (let i = 1; i <= num / 2; i++) { // pois imprime 2 etiquetas por linhas
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
if (num % 2 == 1) { // se quantidade solicitadas de etiquetas for ímpar
    console.log(produto)
}